import Account from '../entities/Account';

export default {
  registerAccount: async  (firstName, lastName, email, password, {accountsRepository}) => {
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },

  updateAccount: async (id, firstName, lastName, email, password, {accountsRepository})=>{
    // TODO - you implement the rest
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
  }
};
