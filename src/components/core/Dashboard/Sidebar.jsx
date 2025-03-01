import { matchPath, NavLink } from "react-router-dom";
import { siderbarlinks } from "../../../utils/dashboard-sidelinks";
import { useSelector } from "react-redux";
// import * as Icons from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { Button } from "../../../components/ui/button";
const Sidebar = () => {
  const { user } = useSelector((state) => state.profile);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  console.log(user);
  return (
    <div className="flex h-[calc(100vh - 3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-white bg-[#000814] py-10">
      <div className={"flex flex-col"}>
        {siderbarlinks.map((link) => {
          const Icon = link.icon;
          if (link.type && user?.role !== link.type) return null;
          return (
            <div
              key={link.id}
              className={`relative px-8 py-4 text-lg font-sm ${
                matchRoute(link.path)
                  ? "bg-green-800 text-green-400"
                  : "bg-opacity-0 text-gray-400"
              } transition-all duration-200`}
            >
              {/* <Link to={link.path}>{link.name}</Link> */}
              <NavLink to={link.path}>
                <span
                  className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
                    matchRoute(link.path) ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
                <div className="flex items-center gap-x-2">
                  <Icon className="text-lg" />
                  {link.name}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-2 mb-4 h-[1px] w-full bg-white" />
      <div
        className={`relative px-8 py-4 text-lg font-sm ${
          matchRoute("/dashboard/settings")
            ? "bg-green-800 text-green-400"
            : "bg-opacity-0 text-gray-400"
        } transition-all duration-200`}
      >
        <NavLink to={"/dashboard/settings"}>
          <span
            className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
              matchRoute("/dashboard/settings") ? "opacity-100" : "opacity-0"
            }`}
          ></span>
          <div className="flex items-center gap-x-2">
            <CiSettings />
            Settings
          </div>
        </NavLink>

        <Button variant={"secondary"} className="mt-10 w-full">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
