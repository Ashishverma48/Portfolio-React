import React from "react";
import { PROJECTS } from "../../constant";
import TiltComponent from "../Tilt/TiltComponent";
function Project() {
  return (
    <section className="py-6" id="project">
      <h1 className="font-bold md:text-[55px] text-[50px]  text-fuchsia-700 dark:text-white">
        Projects.
      </h1>
      <p className=" md:w-3/4 mt-3 ">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="w-full flex flex-wrap gap-8 md:gap-16  justify-center mt-10">
        {PROJECTS?.map((item) => (
          <TiltComponent style={{ width: 320, height: 290 }}>
            {console.log(item.name)}
            <div
              className=" p-2 shadow-md dark:shadow-sm shadow-black/70 dark:shadow-white h-full w-full	 rounded-md    backdrop-blur-xl  bg-violet-900    bg-opacity-30 dark:bg-indigo-500 dark:bg-opacity-35  relative"
              key={item.name}
            >
              {/* <img src={item.image} className="w-[200px] mx-auto" alt="" /> */}
              <h1 className="text-xl font-semibold mt-2">{item.name}</h1>
              <div className="absolute top-0 right-0">
                <p>dad</p>
              </div>
              <p className="mt-4">{item.description}</p>
              <div className="flex gap-5">
                {item?.tags?.map((tag) => (
                  <p className={`${tag.color}`}>#{tag.name}</p>
                ))}
              </div>
            </div>
          </TiltComponent>
        ))}
      </div>
    </section>
  );
}

export default Project;
