import { Sequelize } from 'sequelize';

import { createDatabase } from './create';
// Crea la base de datos si no existe
(async () => {
	await createDatabase()
})()

const {
	DB_HOST,
	DB_USER,
	DB_PASS,
	DB_NAME,
	DB_PORT
} = process.env;

const db = new Sequelize({
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASS,
	port: Number(DB_PORT) || 3306,
	database: DB_NAME,
	dialect: 'mysql',
	logging: false,
	dialectOptions: {
		dateStrings: true,
		typeCast: true
	}
});

db.sync();

export { db }