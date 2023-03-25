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
        // TODO - You implement the rest
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


    return {
        createAccount,
        updateAccount,
        getAccount,
        listAccounts
    };
};
