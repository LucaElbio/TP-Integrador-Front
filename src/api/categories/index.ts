import { API } from "../api";
import { Category } from "./types";

const BASE_URL = "/categories";

export const getCategories = async () => {
  return {
    data: [
      {
        id: 1,
        nombre: "Acción",
      },
      {
        id: 2,
        nombre: "Comedia",
      },
      {
        id: 3,
        nombre: "Drama",
      },
    ],
  };
  return API.get<Category[]>(BASE_URL);
};
