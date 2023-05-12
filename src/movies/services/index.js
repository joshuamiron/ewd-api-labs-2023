import axios from "axios";

export default {

  getMovies: async (query, page) => {
    console.log("getMovies in movies/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      include_video: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: params
      }
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

  getMovieImages: async (id) => {
    console.log("getMovieImages in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getUpcomingMovies: async (query, page) => {
    console.log("getUpcomingMovies in movies/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      include_video: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: params
      }
    );
    return response.data;
  },

  getPopularMovies: async (query, page) => {
    console.log("getPopularMovies in movies/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      include_video: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: params
      }
    );
    return response.data;
  },

  getTrendingMovies: async (query, page) => {
    console.log("getTrendingMovies in movies/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: params
      }
    );
    return response.data;
  },

  getGenres: async () => {
    console.log("getGenres in movies/services called");
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error("Error in getGenres:", error);
      throw error;
    }
  },

  getMovieCast: async (id) => {
    console.log("getMovieCast in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  
  getSimilarMovies: async (id) => {
    console.log("getSimilarMovies in movies/services called");
    //console.log(response.data);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getRecommendedMovies: async (id) => {
    console.log("getRecommendedMovies in movies/services called");
    //console.log(response.data);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  //----------------------------
  //----------------------------
  //----------------------------

  getMovieReviews: async (id) => {
    console.log(id);
    console.log("getMovieReviews in movies/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  

 

  
 
};
