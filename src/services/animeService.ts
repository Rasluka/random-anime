import axios from "axios";


const animeService = {
  baseEndpoint: "https://api.jikan.moe/v4",
};

export function getTopAnimes(query: string, limit: number){

    const favoriteEndpoint = `${animeService.baseEndpoint}/anime?filter=${query}&limit=${limit}`

    return axios(favoriteEndpoint, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
}