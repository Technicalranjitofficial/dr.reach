import React from "react";
import { GoPlusCircle } from "react-icons/go";

const DoctorsCard = ({
  data,
}: {
  data: {
    name: string;
    speciality: string;
    degree: string;
    image: string;
  };
}) => {
  return (
    <div className="w-full hover:scale-105 ease-linear duration-200 relative flex  rounded-md flex-col h-auto">
      <span className="absolute w-full duration-300 ease-linear h-full hover:bg-teal-500/20"></span>
      <img
        src={data.image}
        className="h-[300px] object-cover rounded-md "
        alt=""
      />
      <div className="w-full flex bg-[#00A6FB] py-3 px-3 justify-between rounded-b-md items-center">
        <div>
          <h1 className="text-[14px] text-white font-bold">{data.name}</h1>
          <p className="text-gray-100">{data.speciality}</p>
          <p className="text-gray-100">{data.degree}</p>
        </div>
        <div className="px-4">
          <GoPlusCircle color="white" size={50} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
