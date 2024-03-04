import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/hero.png";
function Hero() {
  return (
    <section className="h-screen w-full">
      <div>
        <TypeAnimation
          sequence={[
            "One", // Types 'One'
            1000, // Waits 1s
            "Two", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Two Three", // Types 'Three' without deleting 'Two'
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
}

export default Hero;
