import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function SpinLoader() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <CircularProgress size={16} />
    </div>
  );
}

export default SpinLoader;
