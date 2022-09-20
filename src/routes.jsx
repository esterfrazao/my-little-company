import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
