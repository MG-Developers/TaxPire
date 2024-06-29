import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceCard(props) {
  return (
    <div className="grid grid-flow-row auto-rows-fit bg-white border-1 border-white rounded-lg shadow-lg 2xl:p-6 p-4 group cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out tranistion-all">
      <div className="flex items-center gap-4">
        <img
          className="2xl:w-16 lg:w-12 w-10 rounded-lg"
          src={`images/icons/${props.icon}`}
        />
        <p className="font-bold lg:text-2xl text-xl text-tp-black">{props.title}</p>
      </div>
      <p className="mt-6 text-tp-gray font-semibold lg:text-base text-sm leading-relaxed">
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
