import React from 'react'
import Navbar from '../(components)/Navbar'
import AboutPage from '../(components)/AboutPage'
type Props = {}

function page({}: Props) {
  return (
   <div>
    <Navbar/>
    <AboutPage/>
   </div>
  )
}

export default page