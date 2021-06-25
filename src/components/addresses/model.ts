import { DataTypes } from 'sequelize';

import { db } from '../../db/connection';
import { AddressAttr } from './interface';

const Address = db.define<AddressAttr>('addresses', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	clientId: {
		type: DataTypes.UUID,
		allowNull: false
	},
	province: {
		type: DataTypes.STRING,
		allowNull: false
	},
	municipality: {
		type: DataTypes.STRING,
		allowNull: false
	},
	street: {
		type: DataTypes.STRING,
		allowNull: false
	},
	address: DataTypes.STRING,
	zipCode: DataTypes.STRING(15)
})

export { Address }
