import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 gap-3 flex flex-col">
      <NavLink
        to="/produk"
        className="w-50   p-2 bg-blue-600 hover:bg-blue-500 transition-all duration-500 rounded-md text-center text-white"
      >
        Kategori
      </NavLink>
      <NavLink
        to="/kategori"
        className="w-50   p-2 bg-blue-600 hover:bg-blue-500 transition-all duration-500 rounded-md text-center text-white"
      >
        Produk
      </NavLink>
      <NavLink
        to="/transaksi"
        className="w-50   p-2 bg-blue-600 hover:bg-blue-500 transition-all duration-500 rounded-md text-center text-white"
      >
        Transaksi
      </NavLink>
    </div>
  );
};
export default Sidebar;
