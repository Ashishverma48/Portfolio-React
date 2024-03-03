import React from "react";
import { PROJECTS } from "../../constant";
import TiltComponent from "../Tilt/TiltComponent";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
          

          <div
              className={` group p-2 shadow-md dark:shadow-sm shadow-black/70 dark:shadow-white h-full w-full	 rounded-md   overflow-hidden  backdrop-blur-xl  bg-cover bg-center    bg-opacity-90 dark:bg-gradient-to-tl dark:from-slate-600 dark:via-slate-800 dark:dark:to-slate-700   relative
              
              `}
              key={item.name}
            >
              {/* <img src={item.image} className="w-[200px] mx-auto" alt="" /> */}
              <h1 className="text-xl font-semibold mt-2">{item.name}</h1>
              <div className="absolute z-30 top-3 -right-full group-hover:right-10 duration-300 ease-out ">
              <a href=""><GitHubIcon className="hover:scale-125  duration-300"/></a>
           <a href=""> <VisibilityIcon className="ml-5 hover:scale-125 duration-300 text-blue-500"/></a>
              </div>
              <img src={item.image} alt="" className="object-contain mt-4 rounded-sm"/>
              <p className="absolute h-full left-0 px-5 py-12 dark:group-hover:bg-opacity-10 dark:group-hover:backdrop-blur-3xl top-full z-10 group-hover:top-0  
              dark:group-hover:bg-slate-900 
              group-hover:bg-gray-100
              group-hover:bg-opacity-95
              group-hover:backdrop-blur-xl      
                      duration-300 ease-out">{item.description}</p>
              <div className="flex gap-5 mt-3 absolute bottom-4">
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
