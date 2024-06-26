import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";

function PricingCard(props) {
  return (
    <div className="bg-white border-1 border-gray-200 shadow-lg rounded-3xl p-8 transition-all cursor-pointer hover:scale-105 hover:duration-500 hover:ease-in-out">
      <div className="flex items-center justify-center">
        <p className="text-xl font-medium mr-4">{props.details.name}</p>

        {props.details.tag && (
          <p className="bg-tp-blue text-white px-3 py-2 rounded-full">
            {props.details.tag}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center border-b-1 border-gray-300">
        <p className="text-4xl font-semibold pb-6">
          {" "}
          &#8377; {props.details.price}
        </p>
      </div>

      <div className="mt-6">
        {props.details.title && (
          <p className="text-center capitalize text-lg text-tp-black font-normal">
            {props.details.title}
          </p>
        )}
      </div>

      <div className="mt-8 bg-tp-sky-blue text-white p-8 rounded-3xl">
        <ul className="flex flex-col gap-4">
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

      <div className="mt-6 flex items-center justify-center">
        <button className="flex items-center group text-lg text-tp-black max-w-fit cursor-pointer">
          Buy Now
          <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue group-hover:ml-6 transition-all hover:duration-500 hover:ease-in-out text-white ml-4" />
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
