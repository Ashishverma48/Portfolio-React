import React from "react";
import TiltComponent from "../Tilt/TiltComponent";
import front from "../../assets/front.png";
import back from "../../assets/back.png";

import Tech from "../Tech/Tech";
function About() {
  return (
    <section className="py-6  " id="about">
      <h2 className="font-semibold text-2xl ">INTRODUCTION</h2>
      <h1 className="font-bold md:text-[70px] text-[50px] mt-1  text-fuchsia-700 dark:text-white">
        Overview.
      </h1>
      <p className=" md:w-3/4 ">
        I'm a skilled website developer with experience in Javascript and
        Python, and expertise in frameworks like React, Node.js, Django, Express
        Js, and MongoDb. I'm a quick learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!
      </p>
      {/* <div className=" gap-7 mt-10 grid md:grid-cols-2 grid-cols-1 items-center justify-between">
        <div className="mx-auto">
          <TiltComponent>
            <div className=" p-2 shadow-md dark:shadow-sm shadow-black/70 dark:shadow-white h-full w-full	 rounded-md    backdrop-blur-xl  bg-violet-900   bg-opacity-30 dark:bg-indigo-500 dark:bg-opacity-35">
              <div className="w-full">
                <img
                  src={front}
                  className="md:w-[250px] w-[200px] mx-auto"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-center text-rose-800 dark:text-rose-300 mt-3 text-2xl italic">
                Frontend developer
              </h3>
            </div>
          </TiltComponent>
        </div>

        <div className="mx-auto ">
          <TiltComponent>
            <div className="p-2 shadow-md dark:shadow-sm  shadow-black/70 dark:shadow-white h-full w-full	 rounded-md    backdrop-blur-xl  bg-violet-900   bg-opacity-30 dark:bg-indigo-500 dark:bg-opacity-35">
              <div className="w-full ">
                <img
                  src={back}
                  className="md:w-[250px] w-[200px] mx-auto"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-center mt-2 text-rose-800 italic dark:text-rose-300 text-2xl">
                Backend developer
              </h3>
            </div>
          </TiltComponent>
        </div>
      </div> */}
      <div>
        <Tech />
      </div>
    </section>
  );
}

export default About;
