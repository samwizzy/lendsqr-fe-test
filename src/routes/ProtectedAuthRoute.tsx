import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../store";

const ProtectedAuthRoute = () => {
  const location = useLocation();
  const { data } = useSelector((store: RootState) => store.auth.user);

  console.log(data, "data data");

  if (data) {
    if (location?.state?.from) {
      return <Navigate to={location?.state?.from} replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedAuthRoute;
