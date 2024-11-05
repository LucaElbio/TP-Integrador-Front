import { Route, Routes } from "react-router-dom";
import { Categories, Movies, Platforms } from "../pages";
import { CATEGORIES, FAVORITES, MOVIES, PLATFORMS } from "./constants";
import { Favorites } from "../pages/favorites";

export const PublicRoutes = () => (
  <Routes>
    <Route path={MOVIES} element={<Movies />} />
    <Route path={PLATFORMS} element={<Platforms />} />
    <Route path={CATEGORIES} element={<Categories />} />
    <Route path={FAVORITES} element={<Favorites />} />
  </Routes>
);
