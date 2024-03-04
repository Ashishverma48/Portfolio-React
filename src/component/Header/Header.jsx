import React from "react";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SwitchComponent from "../Switch/Switch";
function Header() {
  return (
    <header className="shadow-lg z-40 relative bg-slate-300 bg-opacity-85 backdrop-blur-sm flex  dark:bg-slate-800 dakr:bg-opacity-15 dark:backdrop-blur-[.1px] justify-between md:px-10 items-center px-6">
      <div>
        <img src={logo} className="w-20" alt="" />
      </div>
      {/* <div className=" md:block hidden">
        <ul className="flex md:gap-10 gap-2 uppercase font-semibold   items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">project</a>
          </li>
          <li>
            <a href="#github">Github</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li></li>
        </ul>
      </div> */}
      <div className="">
        {" "}
        <SwitchComponent />
      </div>
      <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-4">
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
