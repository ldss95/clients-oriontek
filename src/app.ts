import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import 'dotenv/config';

import routes from './routes';

const { NODE_ENV } = process.env;
const app: Express = express();

app.use(cors({
	origin: (origin, callback) => callback(null, true)
}))
app.use(json());
app.use(urlencoded({ extended: true }));

//Swagger UI
const specs = swaggerJsDoc({
	definition: {
		openapi: '3.0.1',
		info: {
			title: 'Prueba Tecnica OrionTek',
			version: '0.0.1'
		},
		securityDefinitions: {
			auth: {
				type: 'basic'
			}
		},
		servers: [
			{
				url: 'http://localhost:3001'
			}
		]
	},
	apis: ['./src/components/**/docs.ts']
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(routes);
if(NODE_ENV == 'dev'){
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

export { app };