import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../store";

const ProtectedRoute = () => {
  const { data } = useSelector((store: RootState) => store.auth.user);
  const location = useLocation();

  if (!data) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
