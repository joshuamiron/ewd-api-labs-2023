import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
//The import statement's path for AccountRepositoryMongo (above) is wrong in the example code in the lab

const buildDependencies = () => {
  const dependencies = {
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
//    throw new Error('Add Mongo Support');
    dependencies.accountsRepository = new AccountsRepositoryMongo();
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
