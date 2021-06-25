import { Model } from 'sequelize';

import { AddressAttr } from '../addresses/interface';

export interface ClientAttr extends Model {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	addresses: AddressAttr[];
	createdAt: string;
	updatedAt: string;
}