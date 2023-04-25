import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
//The import statement's path for AccountRepositoryMongo (above) is wrong in the example code in the lab
import AccountValidators from '../accounts/validators';
//import Authenticator from '../accounts/security/simple';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from './../accounts/security/JWTToken';


const buildDependencies = () => {
  const dependencies = {
    validators: AccountValidators,
    authenticator: new Authenticator()
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
    dependencies.tokenManager = new TokenManager();

  } else if (process.env.DATABASE_DIALECT === "mongo") {
//    throw new Error('Add Mongo Support');
    dependencies.accountsRepository = new AccountsRepositoryMongo();
    dependencies.tokenManager = new TokenManager();

  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
