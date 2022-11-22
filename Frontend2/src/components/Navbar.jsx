import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import home from "../assets/home.png";
import bell from "../assets/bell.png";
import calendar from "../assets/calendar.png";
import settings from "../assets/settings.png";
import control from "../assets/control.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  // const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "home", link: "/" },
    { title: "Blog", src: "bell", link: "/blogs" },
    //{ title: "Accounts", src: "User", gap: true },
    { title: "Spaces ", src: "calendar", link: "/spaces" },
    { title: "Profile", src: "settings", link: "/profile" },
    //{ title: "User", src: "user", gap: true },
  ];

  return (
    //className="flex bg-dark-greys"
    <div className="flex h-full">
      {/* h-full flex flex-col items-center px-0 py-[30px] md:py-[30px] md:px-[15px] fixed top-0 */}

      <div
        className={` ${
          props.open ? "w-60 " : "w-20"
        } bg-light-greys h-auto mx-4 my-6 p-5 pt-8 relative duration-300 rounded-xl`}
      >
        {/* h-screen */}
        {/* src="./src/assets/control.png" */}
        <img
          alt=""
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-greys
           border-1 rounded-full  ${!props.open && "rotate-180"}`}
          onClick={() => props.setOpen(!props.open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt=""
            src={logo}
            className={`cursor-pointer duration-500 ${
              props.open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !props.open && "scale-0"
            }`}
          >
            Majnu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-6
              ${Menu.gap ? "mt-9" : "mt-10"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={Menu.link}>
                <img
                  alt=""
                  src={
                    Menu.src === "home"
                      ? home
                      : Menu.src === "bell"
                      ? bell
                      : Menu.src === "calendar"
                      ? calendar
                      : settings
                  }
                />
                <span
                  className={`${
                    !props.open && "hidden"
                  } origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4 items-center absolute bottom-3">
          <img
            alt=""
            src={user}
            className={`cursor-pointer duration-500 h-10 w-10 ${
              props.open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !props.open && "scale-0"
            }`}
          >
            Profile Name
          </h1>
        </div>
      </div>
      {/* <div className="w-60 h-30 flex-1 p-7 border-2 border-red-500">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Navbar;
