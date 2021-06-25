import mysql from 'mysql2';
const {
	DB_HOST,
	DB_USER,
	DB_PASS,
	DB_NAME,
	DB_PORT,
} = process.env;

const con = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	port: Number(DB_PORT) || 3306
})

/**
 * Crea la base de datos si no existe
 */
function createDatabase() {
	return new Promise((resolve, reject) => {
		con.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`, (error) => {
			if (error)
				return reject(error)
		
			resolve('Base de datos creada')
		})
	})
	
}

export { createDatabase }