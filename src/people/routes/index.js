import express from "express";
import PeopleController from "../controllers";
import AccountsController from "../../accounts/controllers"; //Imports accounts controller

const createPeopleRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const peopleController = PeopleController(dependencies);
  const accountsController = AccountsController(dependencies); //Create accountsController with dependencies

  //router.route('/*').all(accountsController.verify); //ADD THIS: require token for all routes

  router.route("/trending").get(peopleController.getTrendingPeople);

  router.route("/popular").get(peopleController.getPopularPeople);

  router.route("/:id").get(peopleController.getPerson);

  router.route("/:id/images").get(peopleController.getPersonImages);

  router.route("/:id/movie_credits").get(peopleController.getPersonCredits);

  return router;
};
export default createPeopleRouter;
