import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceCard(props) {
  return (
    <div className="bg-white border-1 border-white rounded-lg shadow-lg p-6 group cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out tranistion-all">
      <div className="flex items-center">
        <img
          className="w-16 mr-4 rounded-lg"
          src={`images/icons/${props.icon}`}
        />
        <p className="font-bold text-2xl text-tp-black">{props.title}</p>
      </div>
      <p className="mt-6 text-tp-gray font-semibold text-base leading-relaxed max-w-52">
        {props.description}
      </p>

      <div className="flex items-center mt-4 text-sm font-bold text-tp-black group-hover:text-tp-sky-blue">
        <p className="mr-4">Know more</p>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default ServiceCard;
