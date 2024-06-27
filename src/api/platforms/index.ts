import { API } from "../api";
import { Platform } from "./types";

const BASE_URL = "/platforms";

export const getPlatforms = async () => {
  return API.get<Platform[]>(BASE_URL);
};

export const postPlatform = async (body: Platform) => {
  return API.post(BASE_URL, body);
};

export const deletePlatform = async (id?: number) => {
  return API.delete(BASE_URL + `/${id}`);
};
