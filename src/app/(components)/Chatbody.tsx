'use client'
import React from "react";

type Props = {};

function Chatbody({}: Props) {
 

const handleSubmit = async (e :{preventDefault:()=>void}) => {
  e.preventDefault()
  console.log("submitted")
}

const handleUpload = async (e :{preventDefault:()=>void}) => {
  e.preventDefault()
  console.log("uploaded")
}

  return (
    
    <div className="parent-div  p-6">
    

      <div className="top-part  mb-16 ">
        <div className="user-query  mb-9">
          <div className="user-id flex items-center mb-6 font-bold ">
            <div className="chat-icon  mr-3 w-10 h-10 bg-chat-icon rounded-full"></div>
            <h3>You</h3>
          </div>

          <div className="user-query font-semibold">
            <p>What are some of the bacteria that cause pneumonia?</p>
          </div>
        </div>

        <div className="chat-response  mb-9">
          <div className="bot-id flex items-center mb-4">
            <div className="chat-icon  mr-3 w-10 h-10 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full"></div>
            <h3 className="font-bold text-brand-blue">MedBot</h3>
          </div>
          <div className="bot-response text-white font-semibold bg-brand-blue p-5 rounded-xl">
            <p>Streptococcus pneumoniae, and Haemophilus influenzae </p>
          </div>
        </div>
      </div>

      <div className="bottom-part   ">

            <form action="" onSubmit={handleSubmit}>
            <input className=" w-full  bg-light-grey p-4  mb-6 rounded-xl outline-none  focus:border-grey-800 focus:outline-none focus:ring-1 focus:ring-grey-800"
           placeholder="type in  your medical question"
           type="text" />

<div className="navigation flex items-center justify-center space-x-5">
<button  onClick={handleUpload}  className="p-2   rounded-lg bg-white text-brand-blue border border-brand-blue border-2 hover:bg-brand-blue hover:text-white">
              Upload Picture
            </button>

            <button  onClick = {handleSubmit} className="p-2    rounded-lg bg-white text-brand-blue border border-brand-blue border-2 hover:bg-brand-blue hover:text-white">
              Send Chat
            </button>
          </div>

            </form>
           


  

      </div>
    </div>
  );
}

export default Chatbody;
