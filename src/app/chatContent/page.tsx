import Navbar from "../(components)/Navbar";
import Chatbody from "../(components)/Chatbody";

import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
        <Chatbody/>
    </div>
  )
}

export default page