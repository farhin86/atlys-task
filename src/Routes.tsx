import { ReactNode } from "react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import { LoginPage } from "./pages/Login/login";
import { RegisterPage } from "./pages/Register/register";
import { getIsUseLoggedIn } from "./auth";

function Protected({ children }: { children: ReactNode }) {
  if (!getIsUseLoggedIn()) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

function getProtectedComponent(Component: () => ReactNode) {
  return (
    <Protected>
      <Component />
    </Protected>
  );
}

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={getProtectedComponent(Home)} />
    </RouterRoutes>
  );
}
