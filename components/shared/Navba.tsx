import React from "react";

function Navbar() {
  return (
    <div className="static " id="Navbar">
      <nav className=" p-8 pl-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#Home" className="text-23 font-bold text-[#1DD300] pl-4">
            TrackUp
          </a>
          <div className="text-[#FDEBD2] flex space-x-4 items-center">
            <ul className="flex space-x-20 font-semibold text-[20px]">
              <li>
                <a href="#Home" className="text-[#FDEBD2]">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-[#FDEBD2]">
                  About
                </a>
              </li>
              <li>
                <a href="#Contactus" className="text-[#FDEBD2] mr-20">
                  Contact us
                </a>
              </li>
            </ul>
            <button className="bg-[#FDEBD2] text-black py-2 px-4 w-32 rounded-full font-semibold text-[18px]">
              <a href="#Contactus">Log in</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
