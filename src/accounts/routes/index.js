import express from "express";
import AccountsController from "../controllers";
import ValidationController from "../controllers/ValidationController"; //add to import statements at top of file

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  const accountsController = AccountsController(dependencies);
  const validationController = ValidationController(dependencies); //Add this line Load validation controller with dependencies

  router.route("/").post(validationController.validateAccount, accountsController.createAccount);

  router.route("/").get(accountsController.getAccounts);

  router.route("/security/token").post(accountsController.authenticateAccount);

  router.route("/getaccount/:email").get(accountsController.getAccount);

  router.route("/users/:email").get(accountsController.getAccountByEmail);

  //router.route("/:id").post(accountsController.getAccountById);



  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

 // router.route("/:id").put(accountsController.updateAccount);

  //router.route("/:id/favourites").post(accountsController.addFavourite);

 // router.route("/:id/favourites").get(accountsController.getFavourites);
//  router.route("/:id/favourites").post(accountsController.addFavourite);


  return router;
};
export default createRouter;
