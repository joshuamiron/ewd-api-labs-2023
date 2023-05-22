import express from "express";
import AccountsController from "../controllers";
import ValidationController from "../controllers/ValidationController";

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  const accountsController = AccountsController(dependencies);
  const validationController = ValidationController(dependencies);

  /**
   * @swagger
   * /api/accounts:
   *   post:
   *     summary: Create a new account
   *     description: Creates a new user account.
   *     parameters:
   *       - name: firstName
   *         in: body
   *         description: First name of the user
   *         required: true
   *         type: string
   *       - name: lastName
   *         in: body
   *         description: Last name of the user
   *         required: true
   *         type: string
   *       - name: email
   *         in: body
   *         description: Email address of the user
   *         required: true
   *         type: string
   *       - name: password
   *         in: body
   *         description: Password of the user
   *         required: true
   *         type: string
   *     responses:
   *       201:
   *         description: Account created successfully
   *       409:
   *         description: Account already exists
   */
  router.route("/").post(validationController.validateAccount, accountsController.createAccount);

/**
   * @swagger
   * /api/accounts:
   *   get:
   *     summary: Get a list of accounts
   *     description: Gets a list of all details of all accounts
   *     responses:
   *       200:
   *         description: A list of accounts retrieved succesfully
   */
  router.route("/").get(accountsController.getAccounts);

  // ---- Authenticate the user who is trying to log in
 router.route("/security/token").post(accountsController.authenticateAccount);

  // ---- Get all an account's details, including favourites and playlists, via their email address
   /**
   * @swagger
   * /api/accounts/getaccount/email:
   *   get:
   *     summary: Get a specific account by email address
   *     description: Gets a all details of a specific account
   *     responses:
   *       200:
   *         description: The requested account successfully retrieved
   */
   router.route("/getaccount/:email").get(accountsController.getAccountByEmail);

  // ---- Add or remove favourite movies
  router.route("/updatefavourites/:email").put(accountsController.updateFavourites);

  // ---- Add or remove movies to playlist
  router.route("/updateplaylist/:email").put(accountsController.updatePlaylist);

  // ---- Add or remove favourite people
  router.route("/updatefavouritepeople/:email").put(accountsController.updateFavouritePeople);

  // ---- Add or remove made-up movies
  router.route("/addmadeupmovie/:email").put(accountsController.addMadeUpMovie);
  router.route("/deletemadeupmovie/:email/:movieid").delete(accountsController.deleteMadeUpMovie);
  
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  // router.route("/getaccount/:id").get(accountsController.getAccountById);

  // router.route("/updateaccount:id").put(accountsController.updateAccount);

  // router.route("/favourites/:id").get(accountsController.getFavourites);

  return router;
};
export default createRouter;
