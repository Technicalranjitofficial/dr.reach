import React from 'react'
import Info from './Info'
import Navbar from '../Navbar'
import Intro from './Intro'

const Header = () => {
  return (
    <div className={`w-full flex flex-col`}>
        <Intro/>
    </div>
  )
}

export default Header