import { Model } from 'sequelize';

export interface AddressAttr extends Model {
	id: string;
	clientId: string;
	province: string;
	municipality: string;
	street: string;
	address: string;
	zipCode: string;
	createdAt: string;
	updatedAt: string;
}