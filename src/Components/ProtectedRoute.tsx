import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";



const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth(); 

  return currentUser ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
