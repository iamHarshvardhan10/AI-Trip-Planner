import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/core/Home";
import Navbar from "./components/core/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
      : "bg-white";

  return (
    <div className={`${bg} w-full h-auto`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
