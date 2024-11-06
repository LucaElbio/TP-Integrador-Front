import { API } from "../api";
import { Favorite } from "./types";

const BASE_URL = "/favorites";

export const getFavorites = async () => {
  return API.get<Favorite[]>(BASE_URL);
};

export const postFavorite = async (userId: number, movieId: number) => {
  return API.post(BASE_URL, { userId, movieId });
};

export const deleteFavorite = async (userId: number, movieId: number) => {
  return API.delete(BASE_URL, { data: { userId, movieId } });
};