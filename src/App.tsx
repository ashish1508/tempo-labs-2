import React, { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

const AuthPage = React.lazy(() => import("./pages/auth"));
const SignupPage = React.lazy(() => import("./pages/signup"));
const LoginPage = React.lazy(() => import("./pages/login"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));
const ProfilePage = React.lazy(() => import("./pages/profile"));
const NotificationsPage = React.lazy(() => import("./pages/notifications"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
