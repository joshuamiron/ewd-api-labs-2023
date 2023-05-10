import dotenv from 'dotenv';
import express from 'express';
import createMoviesRouter from './src/movies/routes';
import createAccountsRouter from './src/accounts/routes';
import createTVShowsRouter from './src/tv/routes';
import createPeopleRouter from './src/people/routes';
import buildDependencies from "./src/config/dependencies";
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';

dotenv.config();

db.init();

const app = express();

const port = process.env.PORT;

const dependencies = buildDependencies();

app.use(express.json());

app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/tv', createTVShowsRouter(dependencies));
app.use('/api/people', createPeopleRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

app.use(errorHandler);
