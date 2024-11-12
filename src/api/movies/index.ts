import { API } from "../api";
import { Movie } from "./types";

const BASE_URL = "/movies";

export const getMovies = async (userId: number, movieId?: number) => {
  let url = BASE_URL + `/${userId}`
  if(movieId)
    url += `/${movieId}`
  return API.get<Movie[]>(url);
};

export const postMovie = async (body: Movie) => {
  return API.post(BASE_URL, body);
};

export const deleteMovie = async (id?: number) => {
  return API.delete(BASE_URL + `/${id}`);
};
