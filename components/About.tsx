import Image from "next/image";
import React from "react";
import removal from "../assets/removal.png";

function About() {
  return (
    <div className="flex items-center mb-[76px]" id="About">
      <Image src={removal} alt="about image" height={300} width={600} />
      <div className="text-[#A0A0A0] text-[28px] mr-[130px]">
        <span className="text-[#1DD300]">TrackUp</span> is a platform that
        allows to track your transportation vehicles, whether it be one or
        multiples, TrackUp takes care of spotting them, displaying them in
        addition to their information, and exclusively giving you the ability to
        live stream them whenever and wherever moreover other functionalities.
      </div>
    </div>
  );
}

export default About;
