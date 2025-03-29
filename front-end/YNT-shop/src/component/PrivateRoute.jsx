import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
// Note: The `useAuth` function should be defined in your authentication context or hook.