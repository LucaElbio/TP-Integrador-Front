import { API } from "../api";
import { Favorite } from "./types";

const BASE_URL = "/favorite-movies";

export const getFavorites = async (userId: number) => {
  return API.get<Favorite[]>(BASE_URL + `/${userId}`);
};

export const postFavorite = async (userId: number, movieId: number) => {
  return API.post(BASE_URL, { userId, movieId });
};

export const deleteFavorite = async (userId: number, movieId: number) => {
  return API.delete(BASE_URL, { data: { userId, movieId } });
};