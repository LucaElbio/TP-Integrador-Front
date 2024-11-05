import { API } from "../api";
import { Favorite } from "./types";

const BASE_URL = "/favorites";

export const getFavorites = async () => {
  return API.get<Favorite[]>(BASE_URL);
};

export const postFavorite = async (body: Favorite) => {
  return API.post(BASE_URL, body);
};

export const deleteFavorite = async (id?: number) => {
  return API.delete(BASE_URL + `/${id}`);
};
