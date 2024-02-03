import React from "react";

const Intro = () => {
  return (
    <div className="w-full pt-28 md:px-5 py-4 md:py-1 text-black h-auto  md:h-screen px-4 bg-gradient-to-r from-[#DDF6FA] via-[#E4F5FF] to-[#ECF8F8]">
      <div className="w-full px-2  max-w-screen-xl flex-col justify-center items-center md:flex-row mx-auto flex">
        <div className="md:w-3/5 w-full gap-6">
          <p className="md:text-[20px] text-[#07A6FB]">| Welcome to Dr.Reach</p>
          <h1 className="md:text-[50px] text-[40px] font-bold">
            We are Committed To Your Health
          </h1>
          <p className="py-3 text-[17px] text-gray-600">
            It is a established fact that a reader will be distracted by the
            content of a page when looking at this layout.
          </p>
          <button className="bg-blue-500 rounded-full hover:bg-green-600 duration-200 ease-linear mt-5 py-2 px-3 text-white font-bold">
            Appointment
          </button>
        </div>

        <div className="my-5">
          <img
            src="/assets/banner_img.png"
            className="w-[950px]  pt-[20px] h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
