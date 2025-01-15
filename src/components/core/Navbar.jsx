import { Menu } from "lucide-react";
import logo from "../../assets/asset 0.svg";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="flex items-start justify-between lg:flex lg:items-start lg:justify-between pr-10 pl-10 pt-5 pb-2">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" />
          <h1 className="text-2xl uppercase font-bold bg-gradient-to-r  from-black to-gray-600 text-transparent bg-clip-text">
            Escape Life
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button className="hidden sm:block">Register</Button>
          <Button variant="secondary" className="hidden sm:block">
            Login
          </Button>
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
