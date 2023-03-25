import dotenv from 'dotenv';
import express from 'express';
//import moviesRouter from './src/movies';
import createMoviesRouter from './src/movies/routes';
import createAccountsRouter  from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";

dotenv.config();

const app = express();

const port = process.env.PORT;

const dependencies = buildDependencies();

app.use(express.json());

//app.use('/api/', moviesRouter);
//app.use('/api/movies', moviesRouter);
app.use('/api/movies', createMoviesRouter(dependencies));

app.use('/api/accounts', createAccountsRouter (dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
