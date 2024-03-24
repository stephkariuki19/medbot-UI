import React from 'react';
import './animations.css'; // Assuming the CSS file containing the animations is named animations.css
import Image from 'next/image';

type Props = {}

function AboutPage({}: Props) {
  return (
    <div>
        <div className="upper border border-black ">

                <h1 className='font-bold text-center text-5xl text-brand-blue  m-4 '>What is Medbot?</h1>

                <div className='flex justify-center items-center '>
                <div className='border border-black w-3/4'>
                    <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sapiente laborum ad, nostrum ab quasi iste repellendus amet nam inventore suscipit aperiam quo voluptatum pariatur.</p>
                </div>
                </div>

                <div className='flex justify-center'>
                <img src="./Doctor.gif" alt="doctor image" />

                </div>
        </div>

            <div className="lower bg-brand-blue p-3 text-white">
                <h2 className='font-semibold text-4xl'>Quick Guide </h2>

                <div className='flex justify-center items-center space-x-3 sm:flex-col md:flex-col flex-wrap'>
                    <div> 
                        <h4>Step 1</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, fugit!</p>
                    </div>
                    
                    <div> 
                        <h4>Step 2</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, fugit!</p>
                    </div>
                    
                    <div> 
                        <h4>Step 3</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, fugit!</p>
                    </div>
                </div>

            </div>
 
    </div>

  );
}

export default AboutPage;
