import { BiSearch, BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import img from "./profile/images/default-avatar.png";
import { useEffect, useState } from "react";

const Navbar = ({ pathname }) => {
  const [user, setUser] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const profile = async () => {
      const loginData = JSON.parse(localStorage.getItem("loginData"));
      setUser(loginData.other.name);
    };
    profile();
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="bg-gradient-to-tl from-zinc-800 via-zinc-900 to-zinc-950 shadow-md sticky h-[70px] top-0 z-50 px-24 py-4">
      <div className="flex justify-between items-center h-full">
        <div>
          <Link to="/">
            <h1 className="text-lg md:text-2xl font-medium font-title">
              Project Pilot
            </h1>
          </Link>
        </div>
        <ul className="flex items-center">
          <li
            className={`text-slate-300 text-lg mx-4 ${
              pathname === "/home" && "font-medium text-white"
            }`}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={`text-slate-300 ${
              pathname.includes("projects") && "font-medium text-white"
            } text-lg mx-4 `}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={`text-slate-300 ${
              pathname.includes("profile") && "font-medium text-white"
            } text-lg mx-4`}
          >
            <Link to={`/profile`}>Profile</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center bg-zinc-800 border border-zinc-800 rounded-md px-2">
          <input type="text" placeholder="Search Projects" className="bg-inherit p-2 outline-none" />
          <BiSearch className="text-slate-400 font-extrabold text-2xl" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full">
            <img
              className="w-6 h-6 object-cover rounded-full"
              src={img}
              alt=""
            />
          </div>
          <p className="text-white mx-2 font-sans text-lg">{user}</p>
          <p className="ml-2 flex items-center space-x-1 cursor-pointer font-light p-2 bg-zinc-700 rounded-md hover:opacity-90">
            <BiLogOut />
            <button onClick={()=>{
              localStorage.removeItem('loginData');
              navigate("/");
            }}>
            Log out
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
