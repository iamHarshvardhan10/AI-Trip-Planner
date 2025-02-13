import { Menu } from "lucide-react";
import logo from "../../assets/asset 0.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-start justify-between lg:flex lg:items-start lg:justify-between pr-10 pl-10 pt-5 pb-2">
        <Link to={"/"} className="flex items-center gap-4">
          <img src={logo} alt="" />
          <h1 className="text-2xl uppercase font-bold bg-gradient-to-r  from-black to-gray-600 text-transparent bg-clip-text">
            Escape Life
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <Link to={"/register"}>
            <Button className="hidden sm:block">Register</Button>
          </Link>
          <Link to={"/login"}>
            <Button variant="secondary" className="hidden sm:block">
              Login
            </Button>
          </Link>
          <Button
            variant="primary"
            className="border-2 border-black hover:border-none hover:bg-gray-400 "
          >
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
