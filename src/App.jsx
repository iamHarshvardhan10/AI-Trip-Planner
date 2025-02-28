import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/core/Home";
import Navbar from "./components/core/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import VerifyEmail from "./components/auth/VerifyEmail";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./components/core/Dashboard";
import Chats from "./components/core/Dashboard/Chats";
import MyFriends from "./components/core/Dashboard/MyFriends";
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
      : "bg-[#000814]";

  return (
    <div className={`${bg} w-full h-auto`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* AUTHENTICATION */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* DASHBOARD */}
        <Route element={<Dashboard />}>
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/chats" element={<Chats />} />
          <Route path="/dashboard/my-friends" element={<MyFriends />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
