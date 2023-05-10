import axios from 'axios';

export default {
  getMovies: async (query, page) => {
    console.log("getMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&${query}`
    );
    return response.data;
  },

  getMovie: async (id) => {
    console.log("getMovie in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getSimilarMovies: async (id) => {
    console.log("getSimilarMovies in movies/services called");
    console.log(response.data);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getGenres: async (query) => {
    console.log("getGenres in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US${query}`
    );
    return response.data;
  },

  getMovieImages: async (id) => {
    console.log("getMovieImages in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getMovieReviews: async (id, query) => {
    console.log(id);
    console.log(query);
    console.log("getMovieReviews in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}&${query}`
    );
    return response.data;
  },

  getUpcomingMovies: async (query, page) => {
    console.log("getUpcomingMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&${query}`
    );
    return response.data;
  },

  getMovieCast: async (id) => {
    console.log("getMovieCast in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

 

  getPopularMovies: async (query, page) => {
    console.log("getPopluarMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&${query}`
    );
    return response.data;
  },

  getTrendingMovies: async (query, page) => {
    console.log("getTrendingMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}&${query}`

    );
    return response.data;
  },
};