import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TeamCard(props) {
  return (
    <div className="relative flex items-center justify-center rounded-3xl border-1 min-h-96 transition-all hover:bg-tp-sky-blue hover:duration-1000 hover:ease-in-out">
      <div className="absolute rounded-3xl shadow-lg top-6 bg-white">
        <div>
          <img className="w-80 rounded-t-3xl" src={`images/${props.img}`} />
        </div>

        <div className="p-6 pb-2">
          <p className="text-xl font-medium">{props.name}</p>
          <p className="mt-1 text-tp-blue text-lg fornt-normal">{props.post}</p>

          <div className="mt-4">
            <ul className="flex list-none text-gb-gray-3 mb-4">
              {props.facebook && (
                <li className="mr-4">
                  <Link
                    to="https://www.facebook.com/share/6CoN9xqMXzJUhySN/?mibextid=LQQJ4d"
                    className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
              )}

              {props.instagram && (
                <li className="mr-4">
                  <Link
                    to="https://www.instagram.com/globalbizhq"
                    className="p-2 inline-block border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              )}

              {props.twitter && (
                <li className="mr-4">
                  <Link
                    to="https://x.com/globalbizhq"
                    className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
              )}

              {props.linkedIn && (
                <li className="mr-4">
                  <Link
                    to="https://www.linkedin.com/company/globalbizhq"
                    className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
