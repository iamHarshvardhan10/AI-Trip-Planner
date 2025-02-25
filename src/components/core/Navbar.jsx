// import { Menu } from "lucide-react";
import logo from "../../assets/asset 0.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);

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
          {token === null && (
            <Link to={"/register"}>
              <Button className="hidden sm:block">Register</Button>
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <Button variant="secondary" className="hidden sm:block">
                Login
              </Button>
            </Link>
          )}
          {token !== null && (
            <Link to={"/dashboard/my-profile"}>
              <Button>DashBoard</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
