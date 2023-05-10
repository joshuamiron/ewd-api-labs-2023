import express from "express";
import MoviesController from "../controllers";
import AccountsController from "../../accounts/controllers"; //Imports accounts controller

const createMoviesRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const moviesController = MoviesController(dependencies);
  const accountsController = AccountsController(dependencies); //Create accountsController with dependencies

  //router.route('/*')
  //    .all(accountsController.verify); //ADD THIS: require token for all routes

  router.route("/").get(moviesController.getMovies);

  router.route("/:id")
    // .get(accountsController.verify, moviesController.getMovie);
    .get(moviesController.getMovie);

  router.route("/genres").get(moviesController.getGenres);

  router.route("/:id/images").get(moviesController.getMovieImages);

  router.route("/reviews/:id").get(moviesController.getMovieReviews);

  router.route("/upcoming").get(moviesController.getUpcomingMovies);

  router.route("/:id/credits").get(moviesController.getMovieCast);

  router.route("/:id/similar").get(moviesController.getSimilarMovies);

  router.route("/popular").get(moviesController.getPopularMovies);

  router.route("/trending").get(moviesController.getTrendingMovies);

  return router;
};
export default createMoviesRouter;
