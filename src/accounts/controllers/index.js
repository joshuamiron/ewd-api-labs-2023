import accountService from "../services";

export default (dependencies) => {

    const createAccount = async (request, response, next) => {
        // Input
        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
        // Output
        response.status(201).json(account);
        console.log("createAccount in accounts/controllers called");
    };

    const getAccount = async (request, response, next) => {
        // input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        // Output
        response.status(200).json(account);
        console.log("getAccount in accounts/controllers called");
    };

    const listAccounts = async (request, response, next) => {
        // Treatment
        const accounts = await accountService.find(dependencies);
        // Output
        response.status(200).json(accounts);
        console.log("listAccount in accounts/controllers called");
    };

    const updateAccount = async (request, response, next) => {
        // Input
        const id = request.params.id;
        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const account = await accountService.updateAccount(id, firstName, lastName, email, password, dependencies);
        // Output
        response.status(200).json(account);
        console.log("updateAccount in accounts/controllers called");
    };

    const authenticateAccount = async (request, response, next) => {
        try {
            const { email, password } = request.body;
            console.log(request.body);
            const token = await accountService.authenticate(email, password, dependencies);
            response.status(200).json({ token: `BEARER ${token}` });
            console.log("authenticateAccount in accounts/controllers called and succeeded");
        } catch (error) {
            response.status(401).json({ message: 'Unauthorised' });
            console.log("authenticateAccount in accounts/controllers called and failed");
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

    const verify = async (request, response, next) => {
        try {
            // Input
            const authHeader = request.headers.authorization;
            // Treatment
            const accessToken = authHeader.split(" ")[1];
            const user = await accountService.verifyToken(accessToken, dependencies);
            console.log("verify in controllers called and succeeded");
            // Output
            next();
        } catch (err) {
            //Token Verification Failed
            next(new Error(`Verification Failed ${err.message}`));
            console.log("verify in controllers called and failed");
        }
    };

    return {
        createAccount,
        getAccount,
        listAccounts,
        updateAccount,
        authenticateAccount,
        addFavourite,
        getFavourites,
        verify
    };
};
