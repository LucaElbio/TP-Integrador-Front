import { Route, Routes } from "react-router-dom";
import { Categories, Movies, Platforms } from "../pages";
import { CATEGORIES, MOVIES, PLATFORMS } from "./constants";

export const PublicRoutes = () => (
  <Routes>
    <Route path={MOVIES} element={<Movies />} />
    <Route path={PLATFORMS} element={<Platforms />} />
    <Route path={CATEGORIES} element={<Categories />} />
  </Routes>
);
