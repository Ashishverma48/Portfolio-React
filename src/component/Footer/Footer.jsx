import React from "react";
import { SOCAILICON } from "../../constant/index";
function Footer() {
  return (
    <footer className="">
      <div className="flex md:justify-between justify-center items-center md:px-16 px-5 flex-wrap py-6 ">
        <div className=" py-5 ">
          <p>©All rights reserverd. Ashish Verma</p>
        </div>
        <div className="flex gap-3">
          {SOCAILICON?.map((item, i) => (
            <div key={`${i}${item}`}>
              <a href={item.link} target="_blank">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[25px] object-contain hover:scale-125 duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
