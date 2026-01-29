import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col w-full  h-screen">
      <header className="w-full ">
        <TopBar />
      </header>
      {/* <button
        onClick={handleTogle}
        className="flex flex-col gap-2 w-10 shadow scale-105   lg:hidden fixed right-5 top-25 z-10 bg-blue-700 p-2 hover:bg-blue-600 hover:scale-110
    active:scale-95  rounded-full  transition-all duration-300 ease-in-out "
      >
        <span className="outline-1 outline-white"></span>
        <span className="outline-1 outline-white"></span>
        <span className="outline-1 outline-white"></span>
      </button> */}
      <div className="flex  flex-1 lg:pr-5 lg:pl-5  relative ">
        <nav
          className={`lg:translate-x-0 lg:relative absolute transition-all duration-500 top-1 bg-white`}
        >
          <Sidebar />
        </nav>
        <main className="flex-1  overflow-y-auto shadow bg-[#f3f4f8] rounded-lg lg:p-5 px-2 py-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
