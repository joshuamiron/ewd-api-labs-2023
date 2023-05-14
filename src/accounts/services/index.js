import Account from '../entities/Account';

export default {
  createAccount: async (firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },
  
  getAccounts: ({ accountsRepository }) => {
    return accountsRepository.find();
  },

  authenticateAccount: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    if (!result) {
      throw new Error('Bad credentials');
    }
    const token = tokenManager.generate({ email: account.email });
    return token;
  },

  getAccount: async (email, { accountsRepository, authenticator }) => {
    console.log("getAccount in accounts/services called");
    const account = await accountsRepository.getByEmail(email);
    console.log(email);
    console.log(account);
    return account;
  },

  updateAccount: async (id, firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    password = await authenticator.encrypt(password);
    const account = await accountsRepository.get(id);
    account.firstName = firstName;
    account.lastName = lastName;
    account.email = email;
    account.password = password;
    return accountsRepository.merge(account);
  },

  getAccountById: (accountId, { accountsRepository }) => {
    return accountsRepository.getById(accountId);
  },

  getAccountByEmail: (email, { accountsRepository }) => {
    return accountsRepository.getByEmail(email);.0
  },

  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------

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

  updateAccount: async (id, firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    password = await authenticator.encrypt(password);
    const account = await accountsRepository.get(id);
    account.firstName = firstName;
    account.lastName = lastName;
    account.email = email;
    account.password = password;
    return accountsRepository.merge(account);
  },



  
  

  getFavourites: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favourites;
  },

  addFavourite: async (accountId, movieId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    if (!account.favourites.includes(movieId)) {
      account.favourites.push(movieId);
      return await accountsRepository.merge(account);
    } else {
      return account;
    }
  },

  /*addFavourite: async (movieId, { accountsRepository, authenticator }) => {
    const authenticatedUser = authenticator.getAuthenticatedUser();
    const accountId = authenticatedUser.accountId;
    console.log(accountId);
    const account = await accountsRepository.get(accountId);
    if (!account.favourites.includes(movieId)) {
      account.favourites.push(movieId);
      return await accountsRepository.merge(account);
    } else {
      return account;
    }
  },*/

  verifyToken: async (token, { accountsRepository, tokenManager }) => {
    const decoded = await tokenManager.decode(token);
    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
      throw new Error('Bad token');
    }
    return user.email;
  },
};
