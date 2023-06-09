import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        console.log("getMovie in movies/controllers called");
        try {
            // Input
            const movieId = request.params.id;
            // Treatment
            const movie = await moviesService.getMovie(movieId, dependencies);
            // Output
            response.status(200).json(movie);
        } catch (error) {
            response.status(401).json({message: "User not authenticated"});
        }
    };

    const getMovies = async (request, response, next) => {
        console.log("getMovies in movies/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
    };
    const getMovieImages = async (request, response, next) => {
        console.log("getMovieImages in movies/controllers called");
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieImages(movieId, dependencies);
        // Output
        response.status(200).json(movie);
    };
    const getUpcomingMovies = async (request, response, next) => {
        console.log("getUpcomingMovies in movies/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getUpcomingMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
    };
    const getPopularMovies = async (request, response, next) => {
        console.log("getPopularMovies in movies/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getPopularMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
    };
    const getTrendingMovies = async (request, response, next) => {
        console.log("getTrendingMovies in movies/controllers called");
        // Input
        const query = request.query;
        // Treatment
        const movies = await moviesService.getTrendingMovies(query, dependencies);
        // Output
        response.status(200).json(movies);
    };
    const getGenres = async (request, response, next) => {
        console.log("getGenres in movies/controllers called");
        // Input
        //const query = request.query;
        // Treatment
        const genres = await moviesService.getGenres();
        // Output
        response.status(200).json(genres);
    };
    const getMovieCast = async (request, response, next) => {
        console.log("getMovieCast in movies/controllers called");
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieCast(movieId, dependencies);
        // Output
        response.status(200).json(movie);
    };
    const getSimilarMovies = async (request, response, next) => {
        console.log("getSimilarMovies in movies/controllers called");
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getSimilarMovies(movieId, dependencies);
        // Output
        response.status(200).json(movie);
    };
    const getRecommendedMovies = async (request, response, next) => {
        console.log("getRecommendedMovies in movies/controllers called");
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getRecommendedMovies(movieId, dependencies);
        // Output
        response.status(200).json(movie);
    };
    //--------------------Needs update--------------------
    //--------------------Needs update--------------------

    const getMovieReviews = async (request, response, next) => {
        console.log("getMovieReviews in movies/controllers called");
        // Input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovieReviews(movieId, dependencies);
        // Output
        response.status(200).json(movie);
    };
   
    
    
    
    return {
        getMovie,
        getMovies,
        getGenres,
        getMovieImages,
        getUpcomingMovies,
        getMovieCast,
        getPopularMovies,
        getTrendingMovies,
        getSimilarMovies,
        getRecommendedMovies,
        getMovieReviews,
    };
};
