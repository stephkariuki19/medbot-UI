'use client'
import React from "react";
import axios from 'axios';
import { useState } from "react";

type Props = {};

function Chatbody({}: Props) {


    // State to store the selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (e: {
        target: any;
        preventDefault: () => void;
    }) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name.toLowerCase();
            if (fileName.endsWith('.png') || fileName.endsWith('.jpeg')) {
                setSelectedFile(file);
            } else {
                console.error('Invalid file format. Please select a PNG or JPEG file.');
            }
        }
    };

    // Function to handle form submission
    const handleFileSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        try {
            // Read the contents of the selected file
            const fileReader = new FileReader();
            fileReader.onload = async () => {
                if (fileReader.result) {
                    // Serialize the file data (using Base64 in this example)
                    const base64Data = (fileReader.result as string).split(',')[1];
                    // Send the serialized file data to the API endpoint
                    const response = await axios.post('/api/upload', { data: base64Data });
                    console.log('File uploaded successfully:', response.data);
                } else {
                    console.error('Error: Null file reader result');
                }
            };
            fileReader.readAsDataURL(selectedFile);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
 

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
                <div className="navigation flex items-center justify-center space-x-2">
            <input className="w-full bg-light-grey p-4 mb-6 rounded-xl outline-none focus:border-grey-800 focus:outline-none focus:ring-1 focus:ring-grey-800"
                placeholder="Type in your medical question"
                type="text" />

            <svg onClick={handleSubmit} className='relative bottom-3 w-10 h-10 hover:fill-brand-blue' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>send-outline</title>
                <path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" />
            </svg>
    </div>

            </form>
           
            <div className="navigation flex items-center justify-center space-x-5">
      
            <form onSubmit={handleFileSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button className='p-1 rounded-lg bg-white text-brand-blue border border-brand-blue border-2 hover:bg-brand-blue hover:text-white' type="submit">Upload File</button>
                </form>




            </div>

  

      </div>
    </div>
  );
}

export default Chatbody;
