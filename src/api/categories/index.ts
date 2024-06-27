import { API } from "../api";
import { Category } from "./types";

const BASE_URL = "/categories";

export const getCategories = async () => {
  return API.get<Category[]>(BASE_URL);
};

export const postCategory = async (body: Category) => {
  return API.post(BASE_URL, body);
};

export const deleteCategory = async (id?: number) => {
  return API.delete(BASE_URL + `/${id}`);
};
