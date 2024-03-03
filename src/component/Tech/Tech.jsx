import { TECHNOLOGIES } from "../../constant/index.jsx";

import React from "react";
import TiltComponent from "../Tilt/TiltComponent.jsx";

function Tech() {
  return (
    <div className="flex flex-wrap gap-12 md:px-10 w-full md:mt-16 mt-16 justify-center">
      {TECHNOLOGIES?.map((item) => (
        <TiltComponent style={{ width: 90, height: 90 }} keys={item.name}>
          <div key={item.name} className="w-24 h-24 ">
            <img src={item.icon} alt={item.name} className="w-[70px] mx-auto" />
            <h6 className="text-center">{item.name}</h6>
          </div>
        </TiltComponent>
      ))}
    </div>
  );
}

export default Tech;
