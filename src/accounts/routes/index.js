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

  // ---- Authenticate the user who is trying to log in
  router.route("/security/token").post(accountsController.authenticateAccount);

  // ---- Get all an account's details, including favourites and playlists, via their email address
  router.route("/getaccount/:email").get(accountsController.getAccountByEmail);

  // ---- Add or remove favourite movies
  router.route("/updatefavourites/:email").put(accountsController.updateFavourites);
  
  // ---- Add or remove movies to playlist
  router.route("/updateplaylist/:email").put(accountsController.updatePlaylist);

  // ---- Add or remove favourite people
  router.route("/updatefavouritepeople/:email").put(accountsController.updateFavouritePeople);

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  // router.route("/getaccount/:id").get(accountsController.getAccountById);

  // router.route("/updateaccount:id").put(accountsController.updateAccount);

  // router.route("/favourites/:id").get(accountsController.getFavourites);

  return router;
};
export default createRouter;
