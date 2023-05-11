import axios from "axios";

export default {
  getTVShows: async (query, page) => {
    console.log("getTVShows in tv/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      include_video: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: params
      }
    );
    return response.data;
  },

  getTVShow: async (id) => {
    console.log("getTVShow in tv/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getTVShowImages: async (id) => {
    console.log("getTVShowImages in tv/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  
};
