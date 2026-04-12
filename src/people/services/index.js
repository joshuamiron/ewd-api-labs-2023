import axios from "axios";

const validatePersonId = (id) => {
  const idAsString = String(id);
  if (!/^[1-9]\d*$/.test(idAsString)) {
    throw new Error("Invalid person id");
  }
  return idAsString;
};

export default {
  getTrendingPeople: async (query, page) => {
    console.log("getTrendingPeople in people/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/person/week`,
      {
        params: params
      }
    );
    return response.data;
  },
  
  getPopularPeople: async (query, page) => {
    console.log("getPopularPeople in people/services called");
    const params = {
      api_key: process.env.TMDB_KEY,
      language: "en-US",
      include_adult: false,
      page: page, // Pass the page parameter to the TMDB API
    };
    Object.assign(params, query); // Merge query parameters into the params object
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular`,
      {
        params: params
      }
    );
    return response.data;
  },

  getPerson: async (id) => {
    console.log("getPerson in people/services called");
    const safeId = validatePersonId(id);
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${safeId}`,
      { params: { api_key: process.env.TMDB_KEY } }
    );
    return response.data;
  },

  getPersonImages: async (id) => {
    console.log("getPersonImages in people/services called");
    const safeId = validatePersonId(id);
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${safeId}/images`,
      { params: { api_key: process.env.TMDB_KEY } }
    );
    return response.data;
  },

  getPersonCredits: async (id) => {
    console.log("getPersonCredits in people/services called");
    try {
      const safeId = validatePersonId(id);
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${safeId}/movie_credits`,
        { params: { api_key: process.env.TMDB_KEY } }
      );
      return response.data;
    } catch (error) {
      console.error("Error in getPersonCredits:", error);
      throw error;
    }
  },
};
