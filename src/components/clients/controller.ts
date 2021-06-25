import { Request, Response } from 'express';
import { UniqueConstraintError, Op } from 'sequelize';

import { Client } from './model';
import { Address } from '../addresses/model';
import { AddressAttr } from '../addresses/interface';
import { db } from '../../db/connection';

export default {
	create: (req: Request, res: Response) => {
		Client.create(req.body, {
			include: {
				model: Address,
				as: 'addresses'
			}
		})
		.then(() => res.sendStatus(201))
		.catch(error => {
			if(error instanceof UniqueConstraintError){
				return res.status(400).send({
					message: `The email "${req.body.email}" already exists on our database.`
				})
			}

			res.sendStatus(500)
			throw error
		})
	},
	update: async (req: Request, res: Response) => {
		const transaction = await db.transaction()
		try {
			const client = req.body

			// Actualiza datos principales del cliente
			await Client.update(req.body, {
				where: { id: client.id },
				transaction
			})

			//Elimina direcciones
			await Address.destroy({
				where: {
					clientId: client.id,
					id: {
						[Op.notIn]: client.addresses.map((address: AddressAttr) => address.id)
					}
				},
				transaction
			})

			/**
			 * Agrega la direcciones nuevas
			 */
			if(client.addresses.some((item: AddressAttr) => !item.id)){
				//Filtra las nuevas
				let addresses = client.addresses.filter((item: AddressAttr) => !item.id)

				//Agrega el parametro clientId
				addresses = addresses.map((item: AddressAttr) => ({ ...item, clientId: client.id }))

				await Address.bulkCreate(addresses, { transaction })
			}

			/**
			 * Actualiza las direcciones viejas
			 */
			for(const address of client.addresses){
				if(address.id){
					await Address.update(address, { 
						where: { id: address.id },
						transaction
					})
				}
			}

			await transaction.commit()
			res.sendStatus(204)
		} catch (error) {
			await transaction.rollback();

			if(error instanceof UniqueConstraintError){
				return res.status(400).send({
					message: `The email "${req.body.email}" already exists on out database.`
				})
			}

			res.sendStatus(500)
			throw error
		}
	},
	delete: (req: Request, res: Response) => {
		const { id } = req.params;

		Client.destroy({ where: { id } })
			.then(() => res.sendStatus(204))
			.catch(error => {
				res.sendStatus(500)
				throw error
			})
	},
	getAll: (req: Request, res: Response) => {
		Client.findAll({
			include: {
				model: Address,
				as: 'addresses'
			}
		})
		.then(clients => res.status(200).send(clients))
		.catch(error => {
			res.sendStatus(500)
			throw error
		})
	},
	getOne: (req: Request, res: Response) => {
		const { id } = req.params;

		Client.findOne({ 
			where: { id },
			include: {
				model: Address,
				as: 'addresses'
			}
		})
		.then(client => {
			if(!client)
				return res.status(404).send({ 
					merssage: 'El cliente que busca no existe' 
				})

			res.status(200).send(client!.toJSON())
		})
		.catch(error => {
			res.sendStatus(500)
			throw error
		})
	}
}
