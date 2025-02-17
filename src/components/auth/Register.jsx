import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    imageUrl: "",
  });

  console.log(formData);
  const [file, setFile] = useState(null);
  console.log(file);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }

    setFormData({ ...formData, imageUrl: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.imageUrl
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  };
  return (
    <div className="flex items-center justify-center px-2">
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 w-full max-w-6xl">
        <div className="w-full max-w-md p-6 bg-green-500/10 backdrop-blur-sm rounded-2xl shadow-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-4 uppercase">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white text-lg">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white text-lg">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white text-lg">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ConfirmPassword" className="text-white text-lg">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="picture" className="text-white text-lg">
                  Picture
                </Label>
                <Input
                  type="file"
                  id="imageUrl"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
            </div>
            <Button className="w-full h-10 bg-black hover:bg-white hover:text-black text-white font-semibold rounded-lg py-3 transition">
              Submit
            </Button>

            {/* Already Have an Account? */}
            <p className="text-center text-white text-lg">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right Section - Quote */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Goal of life is living in agreement{" "}
            <span className="text-blue-400">with nature</span>
          </h1>
          <div className="flex items-center gap-5 mt-10">
            <Button className="w-full flex items-center justify-center gap-3   text-white font-semibold rounded-lg py-5 transition bg-black hover:bg-gray-100 hover:text-black">
              <FcGoogle className="text-lg" />
              Sign in with Google
            </Button>
            <Button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold rounded-lg py-5 transition hover:bg-blue-700">
              <FaPhone className="text-lg" />
              Sign in with Phone Number
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
