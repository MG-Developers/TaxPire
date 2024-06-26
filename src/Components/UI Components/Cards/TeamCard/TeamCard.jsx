import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TeamCard(props) {
  return (
    <div className="flex items-center justify-center p-6 rounded-3xl border-1 transition-all hover:bg-tp-sky-blue hover:duration-1000 hover:ease-in-out">
      <div className="rounded-3xl shadow-lg bg-white">
        <div>
          <img
            className="rounded-t-3xl object-fit w-80 h-80"
            src={`images/${props.img}`}
          />
        </div>

        <div className="p-6 pb-2">
          <p className="text-xl font-medium">{props.name}</p>
          <p className="mt-1 text-tp-blue text-lg fornt-normal">{props.post}</p>

          <div className="mt-4">
            <ul className="flex list-none text-gb-gray-3 mb-4">
              <li className="mr-4">
                <Link
                  to={props.linkedIn}
                  className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                >
                  <FaLinkedinIn />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to={props.twitter}
                  className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                >
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
