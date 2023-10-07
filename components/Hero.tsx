import React from "react";
import Image from "next/image";
import earth from "../assets/earth.png";

function Hero() {
  return (
    <div className="relative flex items-center pl-14" id="Home">
      <div>
        <div
          className="font-bold
              text-[60px] text-[#FDEBD2] relative custom-font"
        >
          The ultimate Tracking and mapping experience
        </div>
        <div
          className="font-medium text-18
              text-[#1DD300] max-w-lg custom-font"
        >
          {" "}
          Giving you the brand new way to keep your vehicles under supervision
        </div>

        <div>
          <button className="bg-[#FDEBD2] rounded-full w-44 h-[50px] font-medium text-[22px]">
            {" "}
            <a href="#Contactus">Log in</a>
          </button>
          <button className="border-2 border-[#FDEBD2] text-[#FDEBD2] rounded-full w-[362px] h-[50px] m-4 mt-10 text-[20px]">
            <a href="#Contactus">Join the trial system</a>
          </button>
        </div>
      </div>
      <Image
        src={earth}
        alt="home image"
        className="relative"
        height={10}
        width={900}
      />
    </div>
  );
}

export default Hero;
