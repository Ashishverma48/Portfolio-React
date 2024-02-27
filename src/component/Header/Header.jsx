import React from "react";
import logo from "../../assets/logo.png";

import SwitchComponent from "../Switch/Switch";
function Header() {
  return (
    <header className="shadow-lg bg-slate-300 bg-opacity-15 flex justify-between md:px-10 items-center px-5">
      <div>
        <img src={logo} className="w-20" alt="" />
      </div>
      <div>
        <ul className="flex md:gap-10 gap-2 uppercase font-semibold items-center">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <SwitchComponent />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
