import React from "react";
import Image from "next/image";

type Props = {};

function Homebody({}: Props) {
  return (
    <div className="flex-body lg:flex bg-stone-50 flex w-screen h-screen">
      <div className="text-body flex-4 p-10">
        <h2 className="text-8xl mb-3 text-brand-blue">Medbot</h2>
        <h2 className="text-3xl m-1 mb-2">Easy and accurate diagnosis</h2>
        <h4 className="text-base mb-3">
          A medical chat-bot that  access to health information and 
          assistance in diagnosing respiratory diseases.
        </h4>
        <h5 className="text-sm text-brand-blue mb-3">Quick Guide</h5>

        <button className="w-32 h-19 relative p-1 rounded-lg bg-brand-blue text-white transition-transform transform-gpu hover:translate-y-1">
            Get Started
        </button>

      </div>
      <div className="img-body">
        <img
          src="./lung-redone.png"
          srcSet="./lung-redone.png 640w, ./Lungs-smallest.png 320w"
          alt="landing-icon"
          className=" relative right-4 m-2 h-15 w-15"
        />
      </div>
    </div>
  );
}

export default Homebody;
