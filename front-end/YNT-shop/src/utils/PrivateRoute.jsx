import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
}

const useAuth = () => {
  return !!localStorage.getItem("token");
  // Check if the user is authenticated based on the presence of a token in localStorage  
}

export default PrivateRoute;
// Note: The `useAuth` function should be defined in your authentication context or hook.