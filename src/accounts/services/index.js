import Account from "../entities/Account";

export default {
  createAccount: async ( firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    password = await authenticator.encrypt(password);
    const account = new Account( undefined, firstName, lastName, email, password );
    return accountsRepository.persist(account);
  },

  getAccounts: ({ accountsRepository }) => {
    return accountsRepository.find();
  },

  authenticateAccount: async ( email, password, { accountsRepository, authenticator, tokenManager }) => {
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    if (!result) {
      throw new Error("Bad credentials");
    }
    const token = tokenManager.generate({ email: account.email });
    return token;
  },

  getAccountByEmail: async (email, { accountsRepository }) => {
    console.log("getAccountByEmail in accounts/services called");
    const account = await accountsRepository.getByEmail(email);
    console.log("Services says " + account);
    return account;
  },

  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------

  getAccountById: (accountId, { accountsRepository }) => {
    return accountsRepository.getById(accountId);
  },

  

  // Trying to catch duplicate account creation, which crashes the API
  /*  registerAccount: async (firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    // Check if account already exists
    const existingAccount = await accountsRepository.findByEmail(email);
    if (existingAccount) {
      throw new Error('Account already exists');
    }
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },*/

  getFavourites: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favourites;
  },

  /* addFavourite: async (email, movieId, { accountsRepository }) => {
    const account = await accountsRepository.getByEmail(email);
    if (!account.favourites.includes(movieId)) {
      account.favourites.push(movieId);
      return await accountsRepository.merge(account);
    } else {
      return account;
    }
  },*/

  addFavourite: async (email, movieId, { accountsRepository }) => {
    const account = await accountsRepository.getByEmail(email);
    if (!account.favourites.includes(movieId)) {
      account.favourites.push(movieId);
      console.log("Favourite added to list:", account);
    } 
    else {
      account.favourites = account.favourites.filter((id) => id !== movieId);
      console.log("Favourite removed from list:", account);
    }
    return await accountsRepository.merge(account);
  },

  verifyToken: async (token, { accountsRepository, tokenManager }) => {
    const decoded = await tokenManager.decode(token);
    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
      throw new Error("Bad token");
    }
    return user.email;
  },
};
