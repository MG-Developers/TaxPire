import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";

function PricingCard(props) {
  return (
    <div className="bg-white border-1 border-gray-200 shadow-lg rounded-3xl lg:p-8 md:p-6 p-4 transition-all cursor-pointer hover:scale-105 hover:duration-500 hover:ease-in-out">
      <div className="flex items-center justify-center gap-4">
        <p className="lg:text-xl md:text-lg text-base font-medium">{props.details.name}</p>

        {props.details.tag && (
          <p className="bg-tp-blue text-white px-3 py-2 rounded-full">
            {props.details.tag}
          </p>
        )}
      </div>

      <div className="lg:mt-6 md:mt-4 mt-3 flex items-center justify-center border-b-1 border-gray-300">
        <p className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:pb-6 md:pb-4 pb-3">
          {" "}
          &#8377; {props.details.price}
        </p>
      </div>

      <div className="lg:mt-6 md:mt-4 mt-3">
        {props.details.title && (
          <p className="text-center capitalize lg:text-lg md:text-base text-sm text-tp-black font-normal">
            {props.details.title}
          </p>
        )}
      </div>

      <div className="xl:mt-8 lg:mt-6 md:mt-4 mt-3 bg-tp-sky-blue text-white lg:p-8 md:p-6 p-4 rounded-3xl">
        <ul className="flex flex-col gap-4 md:text-base text-sm">
          {props.details.features.map((item, index) => {
            return (
              <li key={index} className="flex capitalize items-center">
                {item.isAvailable ? (
                  <FaCircleCheck
                    size="1.25rem"
                    style={{ backgroundColor: "green" }}
                    className="mr-2 rounded-full"
                  />
                ) : (
                  <RxCross2
                    size="1.25rem"
                    style={{ color: "red" }}
                    className="p-1 mr-2 bg-white rounded-full"
                  />
                )}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:mt-6 md:mt-4 mt-3 flex items-center justify-center">
        <button className="flex items-center group lg:text-lg md:text-base text-sm text-tp-black max-w-fit cursor-pointer">
          Buy Now
          <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue group-hover:ml-6 transition-all hover:duration-500 hover:ease-in-out text-white ml-4" />
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
