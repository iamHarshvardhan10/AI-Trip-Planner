import { useSelector } from "react-redux";
import profileImg from "../../../assets/asset 19.jpeg";
import { Link, NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);

  const friendsNumber = 500;
  return (
    <div>
      <img
        src={profileImg}
        alt=""
        className="h-[50vh] w-full bg-cover rounded-b-2xl border border-b-black"
      />
      <div className="relative">
        <img
          src={user?.imageUrl}
          alt=""
          className="absolute rounded-full w-[150px] h-[150px] left-[45%] -top-[90px] border-4 border-white"
        />
        <span className="absolute top-16 text-gray-600 text-lg px-12 ">
          Hey <span className="text-white">{user?.name},</span> You are
          connected with{" "}
          <span className="text-blue-900">
            <NavLink to={"/my-connections"}>
              {friendsNumber} amazing connections
            </NavLink>
          </span>
          . Explore more on the{" "}
          <span className="text-blue-500">
            <Link to={"/dashboard/connect"}>Connect page</Link>
          </span>{" "}
          and make every journey unforgettable!
        </span>
      </div>
    </div>
  );
};

export default MyProfile;
