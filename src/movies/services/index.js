import axios from 'axios';

export default {
  getMovie: async (id) => {
    console.log("getMovie in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getMovies: async (query) => {
    console.log("getMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },

  getGenres: async (query) => {
    console.log("getGenres in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${proces.meta.env.VITE_TMDB_KEY}&language=en-US`
    );
    return response.data;
  },

  getUpcomingMovies: async (query) => {
    console.log("getUpcomingMovies in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
};