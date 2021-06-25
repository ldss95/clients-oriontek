import { DataTypes } from 'sequelize';

import { db } from '../../db/connection';
import { ClientAttr } from './interface';
import { Address } from '../addresses/model';

const Client = db.define<ClientAttr>('client', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	phone: DataTypes.STRING
})

Client.hasMany(Address, { foreignKey: 'clientId', as: 'addresses', onDelete: 'cascade' });

export { Client }
