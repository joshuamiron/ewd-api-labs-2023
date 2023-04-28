import Account from '../entities/Account';

export default {
  authenticate: async (email, password, {accountsRepository, authenticator, tokenManager}) => {
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    if (!result) {
        throw new Error('Bad credentials');
    }
    const token = tokenManager.generate({ email: account.email });
//    const token = JSON.stringify({ email: account.email });//JUST Temporary!!! TODO: make it better
    return token;
  },

  registerAccount: async  (firstName, lastName, email, password, {accountsRepository, authenticator}) => {
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },

  updateAccount: async (id, firstName, lastName, email, password, {accountsRepository, authenticator})=>{
    // TODO - you implement the rest
    password = await authenticator.encrypt(password);
    const account = await accountsRepository.get(id);
    account.firstName = firstName;
    account.lastName = lastName;
    account.email = email;
    account.password = password;
    return accountsRepository.merge(account);
   },

  getAccount: (accountId, {accountsRepository}) => {
    return accountsRepository.get(accountId);
  },

  find: ({accountsRepository})=>{
    return accountsRepository.find();
  },

  findByEmail: (email, {accountsRepository})=>{
    return accountsRepository.getByEmail(email);
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

  verifyToken: async (token,{accountsRepository, tokenManager}) => {
    const decoded = await tokenManager.decode(token);
    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
        throw new Error('Bad token');
    }
    return user.email;
  },
};
