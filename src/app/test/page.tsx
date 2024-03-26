import React from 'react'
import axios from 'axios';
import { useState,useEffect } from "react";
import Upload from '../(components)/Upload';

type Props = {}



function page({}: Props) {
  return (
    <div> 
        <Upload/>
    </div>

  )
}

export default page