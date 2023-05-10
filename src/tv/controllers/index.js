import tvShowsService from "../services";

export default (dependencies) => {

    const getTVShows = async (request, response, next) => {
        console.log("getTVShows in tvshows/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const tvShows = await tvShowsService.getTVShows(query, dependencies);
        // Output
        response.status(200).json(tvShows);

    };
    const getTVShow = async (request, response, next) => {
        console.log("getTVShow in tvshows/controllers called");
        // Input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvShowsService.getTVShow(tvShowId, dependencies);
        // Output
        response.status(200).json(tvShow);
    };
    const getTVShowImages = async (request, response, next) => {
        console.log("getTVShowImages in movies/controllers called");
        // Input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvShowsService.getTVShowImages(tvShowId, dependencies);
        // Output
        response.status(200).json(tvShow);
    };

    return {
        getTVShows,
        getTVShow,
        getTVShowImages,
    };
};
