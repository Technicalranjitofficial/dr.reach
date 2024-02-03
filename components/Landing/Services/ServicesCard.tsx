import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}) => {
  return (
    <div className="h-auto  p-3 rounded-md">
      <div className="my-6 flex justify-center">
        <img
          alt={`review-image-user`}
          src={`${data.image}`}
          className="w-full max-h-[300px]  shadow-lg dark:shadow-black/30"
        />
      </div>

      <h5 className="mb-4 text-xl  md:text-2xl font-semibold">{data.title}</h5>

      <p className="mb-4 text-[14px]">{data.description}</p>

      <button className="flex items-center gap-3 px-1 hover:text-green-600">
        Read More <FaArrowRightLong />
      </button>
    </div>
  );
};

export default ServiceCard;
