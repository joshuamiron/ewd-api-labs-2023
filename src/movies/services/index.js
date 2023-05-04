import axios from 'axios';

export default {
  getMovie: async (movieId) => {
    console.log("getMovie called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getMovies: async (query) => {
    console.log("getMovies method called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },

  findUpcoming: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`

    );
    return response.data;
  },
};