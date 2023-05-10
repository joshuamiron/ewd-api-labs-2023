import axios from "axios";

export default {
  getTVShows: async (query, page) => {
    console.log("getTVShows in tvshows/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&${query}`
    );
    return response.data;
  },

  getTVShow: async (id) => {
    console.log("getTVShow in tvshows/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getTVShowImages: async (id) => {
    console.log("getTVShowImages in tvshows/services called");
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  
};
