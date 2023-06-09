import express from "express";
import TVShowsController from "../controllers";
import AccountsController from "../../accounts/controllers"; //Imports accounts controller

const createTVShowsRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const tvShowsController = TVShowsController(dependencies);
  const accountsController = AccountsController(dependencies); //Create accountsController with dependencies

  //router.route('/*').all(accountsController.verify); //ADD THIS: require token for all routes

  router.route("/shows").get(tvShowsController.getTVShows);

  router.route("/:id").get(tvShowsController.getTVShow);
  // route("/:id").get(accountsController.verify, moviesController.getMovie);

  router.route("/:id/images").get(tvShowsController.getTVShowImages);

  return router;
};
export default createTVShowsRouter;
