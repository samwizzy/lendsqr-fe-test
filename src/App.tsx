import { lazy, Suspense } from "react";
import "./config/axiosConfig";
// import "rsuite/dist/rsuite.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAuthRoute from "./routes/ProtectedAuthRoute";
import SpinLoader from "./components/SpinLoader";
import AppLayout from "./layouts/Layout";
import theme from "./config/themeConfig";

const Login = lazy(() => import("./pages/auth/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserList = lazy(() => import("./pages/users/UserList"));
const UserDetails = lazy(() => import("./pages/users/UserDetails"));

function App() {
  function ProtectedRoutes() {
    return (
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Route>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SpinLoader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />

            {ProtectedRoutes()}

            <Route element={<ProtectedAuthRoute />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
