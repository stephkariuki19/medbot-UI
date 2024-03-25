'use client'
import React from 'react'
import axios from 'axios';
import { useState,useEffect } from "react";

type Props = {}

export default function Upload({}: Props) {


        // State to store the selected file
        const [selectedFile, setSelectedFile] = useState(null);
      
        // Function to handle file selection
        const handleFileChange = (e :{
            target: any;preventDefault:()=>void
}) => {
          setSelectedFile(e.target.files[0]);
        };
      
        // Function to handle form submission
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          
          if (!selectedFile) {
            console.error('No file selected');
            return;
          }
      
          try {
            // Read the contents of the selected file
            const fileReader = new FileReader();
            fileReader.onload = async () => {
                if(fileReader.result){
            // Serialize the file data (using Base64 in this example)
            const base64Data = (fileReader.result as string).split(',')[1];
               // Send the serialized file data to the API endpoint
               const response = await axios.post('/api/upload', { data: base64Data });
               console.log('File uploaded successfully:');

               console.log('File uploaded successfully:', response.data);
                }else{
            console.error('error:null file reader')
                }
             
      

            };
            fileReader.readAsDataURL(selectedFile);
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        };

  return (
    <div>
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button className='border border-black' type="submit">Upload File</button>
      </form>
    </div>

    </div>
  )
}

