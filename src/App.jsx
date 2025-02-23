import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/core/Home";
import Navbar from "./components/core/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import VerifyEmail from "./components/auth/VerifyEmail";
const App = () => {
  const location = useLocation();
  console.log(location);

  const bg =
    location.pathname === "/"
      ? "bg-gray-200"
      : location.pathname === "/register"
      ? "h-[100vh] backgroundImageRegister"
      : location.pathname === "/login"
      ? "h-[100vh] backgroundImageLogin"
      : location.pathname === "/verify-email"
      ? "h-[100vh] backgroundImageVerifyEmail"
      : "bg-white";

  return (
    <div className={`${bg} w-full h-auto`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* AUTHENTICATION */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
};

export default App;
