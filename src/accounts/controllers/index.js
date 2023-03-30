import accountService from "../services";

export default (dependencies) => {

    const createAccount = async (request, response, next) => {
        // Input
        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
        // Output
        response.status(201).json(account);
        console.log("createAccount in controllers called");
    };

    const updateAccount = async (request, response, next) => {
        // Input
        const id = request.params.id;
        const {firstName, lastName, email, password} = request.body;
         // Treatment
         const account = await accountService.updateAccount(id, firstName, lastName, email, password, dependencies);
         // Output
         response.status(200).json(account);
         console.log("updateAccount in contollers called");
    };

    const getAccount = async (request, response, next) => {
        // input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        // Output
        response.status(200).json(account);
        console.log("getAccount in controllers called");
    };
    const listAccounts = async (request, response, next) => {
        // Treatment
        const accounts = await accountService.find(dependencies);
        // Output
        response.status(200).json(accounts);
        console.log("listAccount in controllers called");
    };

    const authenticateAccount = async (request, response, next) => {
        try {
            const { email, password } = request.body;
            const token = await accountService.authenticate(email, password, dependencies);
            response.status(200).json({ token: `BEARER ${token}` });
        } catch (error) {
            response.status(401).json({ message: 'Unauthorised' });
        }
    };

    const addFavourite = async (request, response, next) => {
        try {
            const { movieId } = request.body;
            const id = request.params.id;
            const account = await accountService.addFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };


// ..code as before


    return {
        createAccount,
        updateAccount,
        getAccount,
        listAccounts,
        authenticateAccount,
        addFavourite,
        getFavourites
    };
};
