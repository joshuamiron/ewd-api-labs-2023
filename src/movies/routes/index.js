import express from "express";
import MoviesController from "../controllers";
import AccountsController from "../../accounts/controllers"; //Imports accounts controller

const createMoviesRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const moviesController = MoviesController(dependencies);
  const accountsController = AccountsController(dependencies); //Create accountsController with dependencies

  //router.route('/*').all(accountsController.authenticateAccount); //ADD THIS: require token for all routes

  router.route("/").get(moviesController.getMovies);

  router.route("/upcoming").get(moviesController.getUpcomingMovies);

  router.route("/popular").get(moviesController.getPopularMovies);

  router.route("/trending").get(moviesController.getTrendingMovies);

  router.route("/genres").get(moviesController.getGenres);

  router.route("/:id").get(moviesController.getMovie);
 // router.route("/:id").get(accountsController.authenticateAccount, moviesController.getMovie);

  router.route("/:id/images").get(moviesController.getMovieImages);

  router.route("/:id/credits").get(moviesController.getMovieCast);

  router.route("/:id/similar").get(moviesController.getSimilarMovies);

  router.route("/:id/recommended").get(moviesController.getRecommendedMovies);

  router.route("/:id/reviews").get(moviesController.getMovieReviews);

  return router;
};
export default createMoviesRouter;
