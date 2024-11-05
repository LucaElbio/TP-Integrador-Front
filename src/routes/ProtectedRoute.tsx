import { Navigate } from "react-router-dom";
import { useUser } from "../pages/context/UserContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
