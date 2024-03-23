import React from 'react'
import Navbar from '../Navbar'
import SignupBody from '../SignupBody'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
        <SignupBody/>
    </div>
  )
}

export default page