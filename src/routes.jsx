import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { useAuth } from "./providers/clients";

const Router = () => {
  const { token } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (token !== "null" && token !== "undefined" && token !== null) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false)
    }
  }, [token]);
  return (
    <Routes>
      <Route exact path="/" element={<Login authenticated={authenticated} />} />
      <Route
        path="register"
        element={<Register authenticated={authenticated} />}
      />
      <Route
        path="profile"
        element={<Profile authenticated={authenticated} />}
      />
      <Route
        path="dashboard"
        element={<Dashboard authenticated={authenticated} />}
      />
    </Routes>
  );
};

export default Router;
