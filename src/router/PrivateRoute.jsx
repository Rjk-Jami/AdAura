import React from "react";
import useAuth from "../Components/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =
    useAuth();
  let location = useLocation();
  if (authLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-orange-600 "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
