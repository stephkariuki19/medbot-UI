import React from 'react'

type Props = {}

function Chatbody({}: Props) {
  return (
    <div className='parent-div border border-black flex flex-col space-x-6 p-4'>
        <div className="top border border-red">

            <div className="user-query border border-red-300 mb-9">
                
                <div className="user-id flex items-center mb-6 font-bold  border border-green-800">
                    <div className="chat-icon  mr-3 w-10 h-10 bg-chat-icon rounded-full"></div>
                    <h3>You</h3>
                </div>

                <div className="user-query font-semibold">
                    <p>What are some of the bacteria that cause pneumonia?</p>
                </div>

            </div>

            <div className="chat-response border border-red-300 mb-9">

                <div className="bot-id flex">
                <div className="chat-icon  mr-3 w-10 h-10 bg-chat-icon rounded-full"></div>
                    <h3 className='font-bold'>MedBot</h3>
                </div>
                <div className="bot-response text-white font-semibold bg-brand-blue">
                    <p>Streptococcus pneumoniae,  and Haemophilus influenzae </p>
                </div>
            </div>

        </div>
        <div className="bottom border border-blue"></div>

    </div>
  )
}

export default Chatbody