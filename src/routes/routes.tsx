import { Navigate, Route, Routes } from "react-router-dom";
import { Categories, Login, Movies, Platforms } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { Favorites } from "../pages/favorites";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        }
      />
      <Route
        path="/platforms"
        element={
          <ProtectedRoute>
            <Platforms />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorite-movies"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
