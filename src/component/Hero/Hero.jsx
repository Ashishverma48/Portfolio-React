import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/hero.svg";
import Hello from "../../assets/Hello.gif";
import { SOCAILICON } from "../../constant/index.jsx";
function Hero() {
  return (
    <section className=" w-full backdrop-blur-[.1px]  grid md:grid-cols-2 md:p-10 py-16 ">
      <div className="p-5">
        <h2 className=" text-[20px] inline-flex gap-2">
          Hello <img src={Hello} alt="" className="w-[25px] object-contain" />{" "}
          I'm
        </h2>
        <h1 className="font-bold md:text-[65px] text-[50px] mt-4">
          Ashish Verma
        </h1>
        <div className="">
          <TypeAnimation
            sequence={[
              "Frontend Developer", // Types 'One'
              2000, // Waits 1s
              "Backend Developer", // Deletes 'One' and types 'Two'
              4000, // Waits 2s
              "Full Stack Developer ",
              6000, // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={10}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </div>
        <div className="mt-5 py-2 bg-blue-100 hover:bg-blue-200 px-10 w-max dark:bg-slate-500 dark:hover:bg-slate-600 rounded ">
          Download CV
        </div>
        <div className="w-full   mt-10 flex gap-5">
          {SOCAILICON?.map((item, i) => (
            <div key={`${i}${item}`}>
              <a href={item.link} target="_blank">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[35px] object-contain hover:scale-125 duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:px-10">
        <img
          src={hero}
          alt=""
          className="w-full sm:block hidden object-contain "
        />
      </div>
    </section>
  );
}

export default Hero;
