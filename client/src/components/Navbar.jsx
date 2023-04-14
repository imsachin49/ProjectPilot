import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Navbar = ({ pathname }) => {
  return (
    <div className="bg-[#010203] h-[70px] relative px-24 py-4">
      <div className="flex justify-between items-center h-full">
        <div>
          {/* <img
            className="max-w-[70px]"
            src="https://e7.pngegg.com/pngimages/74/922/png-clipart-business-self-help-group-logo-project-business-service-people.png"
            alt=""
          /> */}
        </div>
        <ul className="flex items-center">
          <li
            className={`text-white  text-lg mx-4 ${
              pathname === "/" && "underline decoration-[#EE2A7B]"
            } underline-offset-4`}
          >
            <Link to="/">Home</Link>
          </li>
          {/* <li
            className={`text-slate-100 ${
              pathname.includes("resources") && "underline decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/resources">Resources</Link>
          </li> */}
          <li
            className={`text-slate-100 ${
              pathname.includes("projects") && "underline decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li className="text-slate-100  text-lg mx-4">
            <Link to="/">Blogs</Link>
          </li> */}
          <li className="text-slate-100  text-lg mx-4">
            <Link to="/">About</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
          <p className="text-white mx-2">Gyan</p>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;