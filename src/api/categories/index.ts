import { API } from "../api";
import { Category } from "./types";

const BASE_URL = "/categories";

export const getCategories = async () => {
  return {
    data: [
      {
        id: 1,
        name: "Acción",
      },
      {
        id: 2,
        name: "Comedia",
      },
      {
        id: 3,
        name: "Drama",
      },
    ],
  };
  return API.get<Category[]>(BASE_URL);
};
