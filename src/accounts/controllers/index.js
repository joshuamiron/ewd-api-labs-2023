import accountService from "../services";

export default (dependencies) => {
  const createAccount = async (request, response, next) => {
    try {
      // Input
      const { firstName, lastName, email, password } = request.body;
      // Treatment
      const account = await accountService.createAccount( firstName, lastName, email, password, dependencies );
      // Output
      response.status(201).json(account);
      console.log("createAccount in accounts/controllers called and succeeded");
    } catch (error) {
      response.status(409).json({ message: "Account already exists." });
      console.log("createAccount in accounts/controllers called and failed");
    }
  };

  const getAccounts = async (request, response, next) => {
    try {
      // Treatment
      const accounts = await accountService.getAccounts(dependencies);
      // Output
      response.status(200).json(accounts);
      console.log("getAccounts in accounts/controllers called");
    } catch (error) {
      response.status(400).json({message: "Failed to get accounts list"});
    }
  };

  const authenticateAccount = async (request, response, next) => {
    try {
      // Treatment
      const { email, password } = request.body;
      console.log(request.body);
      const token = await accountService.authenticateAccount( email.toLowerCase(), password, dependencies );
      // Output
      response.status(200).json({ token: `BEARER ${token}` });
      console.log( "authenticateAccount in accounts/controllers called and succeeded" );
    } catch (error) {
      response.status(401).json({ message: "Unauthorised" });
      console.log( "authenticateAccount in accounts/controllers called and failed" );
    }
  };

  const getAccountByEmail = async (request, response, next) => {
    console.log("getAccountByEmail in accounts/controllers called");
    try {
      // Input
      const email = request.params.email;
      // Treatment
      const account = await accountService.getAccountByEmail(email, dependencies);
      console.log(account);
      // Output
      response.status(200).json(account);
    } catch (error) {
      response.status(400).json({ message: "Failed to get account"});
    }
  };

  const updateFavourites = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      // Input
      const email = request.params.email;
      // Treatment
      const { movieId } = request.body;
      const account = await accountService.updateFavourites( email, movieId, dependencies );
      console.log("Favourite movies updated successfully:", account);
      // Output
      response.status(201).json(account);
    } catch (err) {
      console.log("Error adding to favourite movies:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const updatePlaylist = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      // Input
      const email = request.params.email;
      const { movieId } = request.body;
      // Treatment
      const account = await accountService.updatePlaylist( email, movieId, dependencies );
      console.log("Playlist updated successfully:", account);
      // Output
      response.status(201).json(account);
    } catch (err) {
      console.log("Error adding to playlist:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const updateFavouritePeople = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      // Input
      const email = request.params.email;
      const { person } = request.body;
      // Treatment
      const account = await accountService.updateFavouritePeople( email, person, dependencies );
      console.log("Favourite people updated successfully:", account);
      // Output
      response.status(201).json(account);
    } catch (err) {
      console.log("Error adding to favourite people:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

  const addMadeUpMovie = async (request, response, next) => {
    console.log("Controller - Request body:", request.body);
    try {
      // Input
      const email = request.params.email;
      const madeupMovieData = request.body;
      // Treatment
      const account = await accountService.addMadeUpMovie(email, madeupMovieData, dependencies);
      console.log("Made-up movies updated successfully:", account);
      const addedMovie = account.madeupmovies[account.madeupmovies.length - 1];
      // Output
      response.status(201).json(addedMovie);
    } catch (err) {
      console.log("Error adding to made-up movies:", err.message);
      next(new Error(`Invalid Data ${err.message}`));
    }
  };

   const deleteMadeUpMovie = async (request, response, next) => {
    console.log("Request body:", request.body);
    try {
      // Input
      const { email, movieid } = request.params;
      console.log("Controllers - deleteMadeUpMovie:", email, movieid);
      console.log("Controllers request.params:", request.params);
      // Treatment
      const account = await accountService.deleteMadeUpMovie( email, movieid, dependencies );
      console.log("Made-up movies deleted successfully:", account);
      // Output
      response.status(201).json(account);
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
    authenticateAccount,
    updateFavourites,
    updatePlaylist,
    updateFavouritePeople,
    addMadeUpMovie,
    deleteMadeUpMovie,
    //getAccountById,
    //updateAccount,
    //verify,
  };
};
