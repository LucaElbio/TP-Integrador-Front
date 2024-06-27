import { API } from "../api";
import { Movie } from "./types";

const BASE_URL = "/movies";

export const getMovies = async () => {
  return API.get<Movie[]>(BASE_URL);
};

export const postMovie = async (body: Movie) => {
  return API.post(BASE_URL, body);
};

export const deleteMovie = async (id?: number) => {
  return API.delete(BASE_URL + `/${id}`);
};
