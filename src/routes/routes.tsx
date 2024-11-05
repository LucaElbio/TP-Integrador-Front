import { Navigate, Route, Routes } from "react-router-dom";
import { Categories, Login, Movies, Platforms } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
