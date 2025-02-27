// import { Menu } from "lucide-react";
import logo from "../../assets/asset 0.svg";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowRight, User } from "lucide-react";
import { setToken } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/profileSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  // console.log("Its user", user);

  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    navigate("/");
  };
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
            <div className="pr-10">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="border border-black shadow-2xl w-18 h-12">
                    <AvatarImage src={`${user.imageUrl}`} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-40 h-auto">
                  <DropdownMenuLabel>
                    <Link
                      to={"/dashboard/my-profile"}
                      className="flex items-start justify-center gap-2"
                    >
                      My Profile <User />
                    </Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel
                    className="flex items-start justify-center gap-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout <ArrowRight />
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
