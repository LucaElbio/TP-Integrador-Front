import { API } from "../api";
import { Movie } from "./types";

const BASE_URL = "/movies";

export const getMovies = async () => {
  return {
    data: [
      {
        id: 1,
        idCategoria: 1,
        idPlataforma: 1,
        titulo: "Mad Max: Fury Road",
        duracion: 120,
        edadMinima: 16,
      },
      {
        id: 2,
        idCategoria: 2,
        idPlataforma: 2,
        titulo: "The Big Sick",
        duracion: 120,
        edadMinima: 13,
      },
      {
        id: 3,
        idCategoria: 3,
        idPlataforma: 3,
        titulo: "The Godfather",
        duracion: 175,
        edadMinima: 18,
      },
    ],
  };
  return API.get<Movie[]>(BASE_URL);
};
