import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        // Output
        response.status(200).json(movie);
        console.log("getMovie in movies/controllers called");
    };
    const getMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
        console.log("getMovies in movies/controllers called");
    };
    const getUpcomingMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.findUpcoming(query, dependencies);
        // Output
        response.status(200).json(movies);
    };

    return {
        getMovie,
        getMovies,
        getUpcomingMovies,
    };
};
