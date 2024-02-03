import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Info = () => {
  return (
  
    <>
        <div className="md:flex gap-4 md:w-full lg:w-auto md:justify-center  text-[14px] hidden lg:flex">
          <p className="flex gap-2 items-center   text-white">
            <BsTelephoneFill />
            +91 (700) 230-0035
          </p>

          <p className="flex gap-2 items-center  text-white">
            <MdOutlineEmail />
            support@gmail.com
          </p>

          <p className="flex gap-2 items-center   text-white">
            <MdOutlineLocationOn />
            2767 Patia,Bhubnewshwar,India
          </p>
        </div>

        <div className="md:hidden gap-3 flex  items-center lg:flex">
          <FaFacebookF className=" rounded-full text-white cursor-pointer hover:scale-110 duration-200 hover:text-yellow-800 " />
          <FaTwitter className="rounded-full text-white cursor-pointer hover:scale-110 duration-200 hover:text-yellow-800" />

          <RiInstagramFill className="rounded-full text-white cursor-pointer hover:scale-110 duration-200 hover:text-yellow-800" />
        </div>
      
    </>
  
  );
};

export default Info;
