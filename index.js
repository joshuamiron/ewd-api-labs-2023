import dotenv from 'dotenv';
import express from 'express';
import createAccountsRouter from './src/accounts/routes';
import createMoviesRouter from './src/movies/routes';
import createTVShowsRouter from './src/tv/routes';
import createPeopleRouter from './src/people/routes';
import buildDependencies from "./src/config/dependencies";
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';
//import { serveSwaggerDocs } from './swagger.js';
import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from './swagger.json';
import swaggerJSDoc from 'swagger-jsdoc';


dotenv.config();

db.init();

const app = express();

const port = process.env.PORT;
const dependencies = buildDependencies();

// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
    },
  },
  // Path to the API routes
  apis: ['./src/accounts/routes/index.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/tv', createTVShowsRouter(dependencies));
app.use('/api/people', createPeopleRouter(dependencies));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

app.use(errorHandler);
