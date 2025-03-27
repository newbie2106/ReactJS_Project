import { ErrorPage } from "@/pages/error-page";
import { Navigate } from "react-router-dom";


interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
  isLoginPage?: boolean; 
}

const PrivateRoute = ({ children, requiredRoles, isLoginPage }: PrivateRouteProps) => {
  const isAuth = localStorage.getItem("accessToken");
  const role = localStorage.getItem("ROLE_USER");

  if (isAuth && isLoginPage) {
    return <ErrorPage />;
  }

  if (!isAuth && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  if (requiredRoles && role && !requiredRoles.includes(role)) {
    return <ErrorPage />;
  }

  return children;
};

export default PrivateRoute;
