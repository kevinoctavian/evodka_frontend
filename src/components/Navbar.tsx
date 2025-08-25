import LogoKpuSVG from "@/assets/logo-kpu";
import {
  Home,
  School,
  Users,
  Vote,
  HelpCircle,
  Menu,
  X,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isBarOpen, setBarOpen] = useState(false);

  const navItems = [
    { name: "Beranda", link: "/", icon: <Home size={18} /> },
    { name: "Sekolah", link: "/schools", icon: <School size={18} /> },
    { name: "Kandidat", link: "/candidates", icon: <Users size={18} /> },
    { name: "Pilih", link: "/votes", icon: <Vote size={18} /> },
    { name: "Bantuan", link: "/help", icon: <HelpCircle size={18} /> },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center gap-2">
          <LogoKpuSVG className="w-8 h-8" />
          Evodka
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-1 transition ${
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-1 rounded-md transition ${
                  isActive
                    ? "bg-yellow-500 text-black font-semibold"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`
              }
            >
              <LogIn size={18} /> Login
            </NavLink>
          </li>
        </ul>

        {/* Menu (mobile) */}
        <button className="md:hidden" onClick={() => setBarOpen(!isBarOpen)}>
          {isBarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isBarOpen && (
        <ul className="md:hidden bg-blue-500 px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-1 transition ${
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-1 rounded-md transition ${
                  isActive
                    ? "bg-yellow-500 text-black font-semibold"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`
              }
            >
              <LogIn size={18} /> Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
