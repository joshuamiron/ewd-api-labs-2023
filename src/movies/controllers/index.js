import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        // Output
        console.log("getMovie in movies/controllers called");
        console.log(response);
        response.status(200).json(movie);
    };
    const getMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getMovies(query, dependencies);
        // Output
        console.log("getMovies in movies/controllers called");
        response.status(200).json(movies);

    };
    const getGenres = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getGenres(query, dependencies);
        // Output
        response.status(200).json(movies);
        console.log("getGenres in movies/controllers called");
    };
    const getUpcomingMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getUpcomingMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
        console.log("getUpcomingMovies in movies/controllers called");
    };

    return {
        getMovie,
        getMovies,
        getGenres,
        getUpcomingMovies,
    };
};
