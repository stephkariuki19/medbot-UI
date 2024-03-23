import React from "react";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" mb-1 w-full shadow-md ring-1 ring-black ring-opacity-5">
      <div className="ctas flex items-center  justify-between ">
        <div>
          <img
            src="./front-icon.webp"
            alt="medbot-icon"
            className="w-10 h-10 m-2"
          />
        </div>

        <div className=" normal-div font-semibold flex items-center space-x-6 p-4 text-sm md:text-sm lg:text-lg">
        <h5 className="hover:border-b-2 border-brand-blue">What is Medbot?</h5>

        <h5 className="hover:border-b-2 border-brand-blue">Login</h5>
        <button className="p-1 rounded-lg bg-white text-brand-blue border border-brand-blue border-2 hover:bg-brand-blue hover:text-white">
          Get Started
        </button>

        </div>

     

      </div>
     

    </div>
  );
}

export default Navbar;
