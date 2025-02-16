import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center px-2">
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 w-full max-w-6xl">
        <div className="w-full max-w-md p-6 bg-white-900/90 backdrop-blur-lg rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-4 uppercase">
            Register
          </h2>
          <form className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white text-lg">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
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
                  className="h-10 w-full border border-white/30 text-white placeholder-white/60 rounded-md px-4 bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="picture" className="text-white text-lg">
                  Picture
                </Label>
                <Input
                  type="file"
                  id="picture"
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

            {/* OR Divider */}
            {/* <div className="flex items-center justify-center my-2">
              <div className="w-full h-px bg-gray-400"></div>
              <p className="px-3 text-white text-sm">OR</p>
              <div className="w-full h-px bg-gray-400"></div>
            </div> */}

            {/* Sign in options */}
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
