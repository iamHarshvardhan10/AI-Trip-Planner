import { Outlet } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
