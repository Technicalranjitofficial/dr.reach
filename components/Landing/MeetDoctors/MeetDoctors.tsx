import React from "react";
import DoctorsCard from "./DoctorsCard";

const data = [
  {
    name: "Dr. John Doe",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-1.jpg",
  },
  {
    name: "Dr. Raman Sharma",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-2.jpg",
  },
  {
    name: "Dr. Peaky Blinder",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-3.jpg",
  },
  {
    name: "Dr. John Doe",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-1.jpg",
  },
];

const MeetDoctors = () => {
  return (
    <div className="w-full px-1.5 my-[100px] ">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#07A6FB] text-[20px] font-bold">
          | Meet Our Doctors
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#07A6FB] text-[40px] font-bold">Our Specialist</h1>
      </div>
      <div className="w-full max-w-screen-xl mt-5  mx-auto grid gap-5  grid-flow-row lg:grid-cols-4 md:grid-cols-2">
        {data.map((d, i) => {
          return <DoctorsCard key={i} data={d} />;
        })}
      </div>
    </div>
  );
};

export default MeetDoctors;
