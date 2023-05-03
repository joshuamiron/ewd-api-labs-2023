import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);//Add this line Load validation controller with dependencies

    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount);

    router.route('/:id')
        .put(accountsController.updateAccount);

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourites')
        .post(accountsController.addFavourite);
    
    router.route('/:id/favourites')
        .get(accountsController.getFavourites);

    return router;
};
export default createRouter;