import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

function PricingCard() {
  return (
    <div className="bg-white border-1 border-gray-200 shadow-lg rounded-3xl p-8 transition-all cursor-pointer hover:scale-105 hover:duration-500 hover:ease-in-out">
      <div className="flex items-center justify-center">
        <p className="text-xl font-medium mr-4">Basic Plan</p>
        <p className="bg-tp-blue text-white px-3 py-2 rounded-full">Popular</p>
      </div>

      <div className="mt-6 flex items-center justify-center border-b-1 border-gray-300">
        <p className="text-4xl font-semibold pb-6">$19/mo</p>
      </div>

      <div className="mt-6">
        <p className="text-center text-gray-500 font-light">
          Financial control & pave the way for a secure and prosperous future.
        </p>
      </div>

      <div className="mt-8 bg-tp-sky-blue text-white p-8 rounded-3xl">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center">
            <FaCircleCheck size="1.25rem" className="mr-2" /> Send payments
          </li>

          <li className="flex items-center">
            <FaCircleCheck size="1.25rem" className="mr-2" /> Send payments
          </li>

          <li className="flex items-center">
            <FaCircleCheck size="1.25rem" className="mr-2" /> Send payments
          </li>

          <li className="flex items-center">
            <FaCircleCheck size="1.25rem" className="mr-2" /> Send payments
          </li>

          <li className="flex items-center">
            <FaCircleCheck size="1.25rem" className="mr-2" /> Send payments
          </li>
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
