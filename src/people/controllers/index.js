import peopleService from "../services";

export default (dependencies) => {

    const getTrendingPeople = async (request, response, next) => {
        console.log("getTrendingPeople in people/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const people = await peopleService.getTrendingPeople(query, dependencies);
        // Output
        response.status(200).json(people);

    };
    const getPopularPeople = async (request, response, next) => {
        console.log("getPopularPeople in people/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const people = await peopleService.getPopularPeople(query, dependencies);
        // Output
        response.status(200).json(people);
    };
    
     const getPerson = async (request, response, next) => {
        console.log("getPerson in people/controllers called");
        // Input
        const personId = request.params.id;
        // Treatment
        const person = await peopleService.getPerson(personId, dependencies);
        // Output
        response.status(200).json(person);
    };
    const getPersonImages = async (request, response, next) => {
        console.log("getPersonImages in people/controllers called");
        // Input
        const personId = request.params.id;
        // Treatment
        const person = await peopleService.getPersonImages(personId, dependencies);
        // Output
        response.status(200).json(person);
    };
     const getPersonCredits = async (request, response, next) => {
        console.log("getPersonCredits in people/controllers called");
        // Input
        const personId = request.params.id;
        // Treatment
        const person = await peopleService.getPersonCredits(personId, dependencies);
        // Output
        response.status(200).json(person);
    };
    
    return {
        getTrendingPeople,
        getPopularPeople,
        getPerson,
        getPersonImages,
        getPersonCredits,
    };
};
