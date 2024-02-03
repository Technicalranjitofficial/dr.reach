"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (

   
<div className="h-screen w-screen bg-gray-400 text-black">
  {/* modal */}
  <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
    <div className="relative container m-auto px-6">
      <div className="m-auto md:w-7/12">
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
          <div className="p-8">
            <div className="space-y-4">
              <img
                src="https://www.svgrepo.com/show/475643/dribbble-color.svg"
                loading="lazy"
                className="w-10"
              />
              <h2 className="mb-8 text-2xl text-black dark:text-white font-bold">
                Log in to continue <br />
                dr.reach
              </h2>
            </div>
            <div className="mt-10 grid space-y-4">
              <button onClick={()=>{
                signIn('google',{callbackUrl:"/"})
              }} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="absolute left-0 w-5"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-black-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>
            
            </div>
            <div className="mt-14 space-y-4 py-3 text-black text-center">
              <p className="text-xs">
                By proceeding, you agree to our
                <a href="/privacy-policy/" className="underline">
                  Terms of Use
                </a>
                and confirm you have read our
                <a href="/privacy-policy/" className="underline">
                  Privacy and Cookie Statement
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  
  )
}

export default Login