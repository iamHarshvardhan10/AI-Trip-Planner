import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { LOGIN } from "../../utils/apis";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data.success == false) {
        toast.error(data.message);
        return;
      }
      if (response.ok) {
        toast.success(data.message);
        dispatch(setToken(data.token));
        localStorage.setItem("token", data.token);
        navigate("/dashboard/my-profile");
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center mt-10 px-2">
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 w-full max-w-6xl">
        <div className="w-full max-w-md p-6 bg-black/10 backdrop-blur-xl rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-4 uppercase">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white text-lg">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-10 w-full border border-black/30 text-white placeholder-white/60 rounded-md px-4"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white text-lg">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="h-10 w-full border border-black/30 text-white placeholder-white/60 rounded-md px-4"
                />
              </div>
            </div>
            <Button className="w-full h-10 bg-black hover:bg-white hover:text-black text-white font-semibold rounded-lg py-3 transition">
              Submit
            </Button>

            {/* Already Have an Account? */}
            <p className="text-center text-black font-bold text-md">
              Do not have account?{" "}
              <Link to={"/register"} className="text-blue-400 hover:underline">
                Register
              </Link>
            </p>

            {/* OR Divider */}
            <div className="flex items-center justify-center my-0">
              <div className="w-full h-px bg-gray-800"></div>
              <p className="px-3 text-black font-bold text-sm">OR</p>
              <div className="w-full h-px bg-gray-800"></div>
            </div>

            {/* Sign in options */}

            <Button className="w-full flex items-center justify-center gap-3 border-2 border-black bg-white text-black font-semibold rounded-lg py-3 transition hover:bg-gray-100">
              <FcGoogle className="text-lg" />
              Sign in with Google
            </Button>
            <Button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold rounded-lg py-3 transition hover:bg-blue-700">
              <FaPhone className="text-lg" />
              Sign in with Phone Number
            </Button>
          </form>
        </div>

        {/* Right Section - Quote */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Goal of life is living in agreement{" "}
            <span className="text-blue-400">with nature</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
