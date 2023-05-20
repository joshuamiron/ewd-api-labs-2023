import accountService from "../services";

export default (dependencies) => {
  const createAccount = async (request, response, next) => {
    try {
      // Input
      const { firstName, lastName, email, password } = request.body;
      // Treatment
      const account = await accountService.createAccount(
        firstName,
        lastName,
        email.toLowerCase(),
        password,
        dependencies
      );
      // Output
      response.status(201).json(account);
      console.log("createAccount in accounts/controllers called and succeeded");
    } catch (error) {
      //response.status(409).json({ message: error.message });
      response.status(409).json({ message: "Account already exists." });
      console.log("createAccount in accounts/controllers called and failed");
    }
  };

  const getAccounts = async (request, response, next) => {
    // Treatment
    const accounts = await accountService.getAccounts(dependencies);
    // Output
    response.status(200).json(accounts);
    console.log("getAccounts in accounts/controllers called");
  };

  const authenticateAccount = async (request, response, next) => {
    try {
      const { email, password } = request.body;
      console.log(request.body);
      const token = await accountService.authenticateAccount(
        email,
        password,
        dependencies
      );
      response.status(200).json({ token: `BEARER ${token}` });
      console.log(
        "authenticateAccount in accounts/controllers called and succeeded"
      );
    } catch (error) {
      response.status(401).json({ message: "Unauthorised" });
      console.log(
        "authenticateAccount in accounts/controllers called and failed"
      );
    }
  };

  const getAccountByEmail = async (request, response, next) => {
    console.log("getAccountByEmail in accounts/controllers called");
    // Input
    const email = request.params.email;
    // Treatment
    const account = await accountService.getAccountByEmail(email, dependencies);
    console.log(account);
    // Output
    response.status(200).json(account);
  };

  const updateFavourites = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      const email = request.params.email;
      const { movieId } = request.body;
      const account = await accountService.updateFavourites(
        email,
        movieId,
        dependencies
      );
      console.log("Favourite movies updated successfully:", account);
      response.status(200).json(account);
    } catch (err) {
      console.log("Error adding to favourite movies:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const updatePlaylist = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      const email = request.params.email;
      const { movieId } = request.body;
      const account = await accountService.updatePlaylist(
        email,
        movieId,
        dependencies
      );
      console.log("Playlist updated successfully:", account);
      response.status(200).json(account);
    } catch (err) {
      console.log("Error adding to playlist:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const updateFavouritePeople = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      const email = request.params.email;
      const { person } = request.body;
      const account = await accountService.updateFavouritePeople(
        email,
        person,
        dependencies
      );
      console.log("Favourite people updated successfully:", account);
      response.status(200).json(account);
    } catch (err) {
      console.log("Error adding to favourite people:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const addMadeUpMovie = async (request, response, next) => {
    try {
      const email = request.params.email;
      const madeupMovieData = request.body;
      const account = await accountService.addMadeUpMovie(
        email,
        madeupMovieData,
        dependencies
      );
      const addedMovie = account.madeupmovies[account.madeupmovies.length - 1];
      response.status(200).json({account, addedMovie});
    } catch (err) {
      console.log("Error adding to made-up movies:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const deleteMadeUpMovie = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      const movieId = request.params.movieId;
      //const madeupMovieData = request.body;
      const account = await accountService.deleteMadeUpMovie( movieId, dependencies );
      console.log("Made-up movies deleted successfully:", account);
      response.status(200).json(account);
    } catch (err) {
      console.log("Error deleting from made-up movies:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  /* const getAccountById = async (request, response, next) => {
    // input
    const accountId = request.params.id;
    // Treatment
    const account = await accountService.getAccountById(
      accountId,
      dependencies
    );
    // Output
    response.status(200).json(account);
    console.log("getAccountById in accounts/controllers called");
  };

  const updateAccount = async (request, response, next) => {
    // Input
    const id = request.params.id;
    const { firstName, lastName, email, password } = request.body;
    // Treatment
    const account = await accountService.updateAccount(
      id,
      firstName,
      lastName,
      email,
      password,
      dependencies
    );
    // Output
    response.status(200).json(account);
    console.log("updateAccount in accounts/controllers called");
  };

  const verify = async (request, response, next) => {
    try {
      // Input
      const authHeader = request.headers.authorization;
      // Treatment
      const accessToken = authHeader.split(" ")[1];
      const user = await accountService.verifyToken(accessToken, dependencies);
      console.log("verify in accounts/controllers called and succeeded");
      // Output
      next();
    } catch (err) {
      //Token Verification Failed
      next(new Error(`Verification Failed ${err.message}`));
      console.log("verify in accounts/controllers called and failed");
    }
  };*/

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  return {
    createAccount,
    getAccounts,
    getAccountByEmail,
    //getAccountById,
    //updateAccount,
    authenticateAccount,
    updateFavourites,
    updatePlaylist,
    updateFavouritePeople,
    addMadeUpMovie,
    deleteMadeUpMovie,
    //getFavourites,
    //verify,
  };
};
