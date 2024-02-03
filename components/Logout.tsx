"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  return (
    <span onClick={()=>signOut()}>Logut</span>
  )
}

export default Logout