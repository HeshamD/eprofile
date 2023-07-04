import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: ".is()" },
    { path: "/projects", label: ".Projects()" },
    { path: "/work_Experience", label: ".WorkExperience()" },
    { path: "/education", label: ".Education()" },
    { path: "/contacts", label: ".Contact()" },
    { path: "/articles", label: ".Articles()" }
  ];
  const location = useLocation(); // Get the current location

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src="/logo.png" alt="my logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              location.pathname === nav.path ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link to={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>

      {/* small devices  */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        {/* drop down menu */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  location.pathname === nav.path
                    ? "text-white"
                    : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link to={nav.path}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
