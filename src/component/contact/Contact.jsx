import React from "react";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { TypeAnimation } from "react-type-animation";

function ContactUs() {
  return (
    <section className="">
      <div className=" bg-cover md:px-12 px-5 relative bg-center w-full  mt-10   ">
        <h1 className="md:text-[45px]  text-3xl  mb-3   text-black font-bold  dark:text-white">
          Contact <span className="text-fuchsia-700 ">Us</span>
        </h1>

        <div>
          <TypeAnimation
            sequence={[
              1000,
              "Let's get in touch and build something together 💻",
              4000,
              "",
            ]}
            wrapper="span"
            // cursor={true}
            repeat={Infinity}
            speed={10}
            className="text-xl font-semibold"
            style={{ display: "inline-block" }}
          />
        </div>
        <div className=" w-full mt-4 h-full md:py-10 flex flex-col md:flex-row gap-10 md:px-12 px-4 ">
          <div className="grid md:grid-cols-2 gap-7 w-full  ">
            <div
              className=" p-4  bg-slate-800 rounded-md bg-opacity-20 shadow-black/80 backdrop-blur-xl drop-shadow-xl  shadow-lg hover:shadow-sm duration-200
            dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 dark:hover:shadow-xl dark:shadow-white/10 "
            >
              <div className="flex gap-2  text-blue-900 dark:text-white">
                <LocationOnIcon />
                <p className="uppercase font-semibold mb-3 ">Location </p>
              </div>

              <div className="text-[14px] mt-1">
                <p className="font-semibold">Noida Utter Pradesh</p>
              </div>
            </div>
            <div
              className=" p-4  bg-slate-800 rounded-md bg-opacity-20 backdrop-blur-xl drop-shadow-xl  shadow-lg hover:shadow-sm duration-200
              shadow-black/80
            dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 dark:hover:shadow-xl dark:shadow-white/10"
            >
              <div className="flex gap-3 font-semibold  text-blue-900 dark:text-white">
                <ForwardToInboxIcon />
                <p>E-MAIL</p>
              </div>
              <p className="mt-3">ashishkv845@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
