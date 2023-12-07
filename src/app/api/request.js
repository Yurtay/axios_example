import axios from "axios";

const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getEpisodes = async (page) =>
  request
    .get("/episode", {
      params: { page },
    })
    .then(({ data }) => data);
