import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to={"/dashboard/my-profile"}>My Profile</Link>
      <Link to={"/dashboard/chats"}>My Chat</Link>
      <Link to={"/dashboard/my-friends"}>My Friends</Link>
    </div>
  );
};

export default Sidebar;
