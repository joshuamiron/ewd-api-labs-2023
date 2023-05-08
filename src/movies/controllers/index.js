import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        // Output
        console.log("getMovie in movies/controllers called");
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
        console.log("getGenres in movies/controllers called");
        response.status(200).json(movies);
    };
    const getMovieImages = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieImages(movieId, dependencies);
        // Output
        console.log("getMovieImages in movies/controllers called");
        response.status(200).json(movie);
    };
    const getMovieReviews = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieReviews(movieId, dependencies);
        // Output
        console.log("getMovieReviews in movies/controllers called");
        response.status(200).json(movie);
    };
    const getUpcomingMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getUpcomingMovies(query, dependencies);
        // Output
        console.log("getUpcomingMovies in movies/controllers called");
        response.status(200).json(movies);
    };
    const getMovieCast = async (request, response, next) => {
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieCast(movieId, dependencies);
        // Output
        console.log("getMovieCast in movies/controllers called");
        response.status(200).json(movie);
    };
    const getPopularMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getPopularMovies(query, dependencies);
        // Output
        console.log("getPopularMovies in movies/controllers called");
        response.status(200).json(movies);
    };
    const getTrendingMovies = async (request, response, next) => {
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getTrendingMovies(query, dependencies);
        // Output
        console.log("getTrendingMovies in movies/controllers called");
        response.status(200).json(movies);
    };

    return {
        getMovie,
        getMovies,
        getGenres,
        getMovieImages,
        getMovieReviews,
        getUpcomingMovies,
        getMovieCast,
        getPopularMovies,
        getTrendingMovies,
    };
};
