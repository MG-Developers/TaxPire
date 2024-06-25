import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="bg-white py-16 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-lg uppercase font-bold">
                <span className="border-b-3 border-tp-sky-blue">Reach</span> out
                to us
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-relaxed">
                Headquartered in <br />
                Dubai, UAE
              </h1>

              <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
                <span className="border-b-3 border-tp-sky-blue">Visit</span> Us
              </p>
              <p className="mt-4">
                One Central 8th and 9th Floor, Trade Centre, Trade Centre 2,
                Dubai - UAE
              </p>

              <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
                <span className="border-b-3 border-tp-sky-blue">Email</span> Us
              </p>

              <div className="mt-4">
                <a
                  href="mailto:INFO@GLOBALBIZHQ.com"
                  target="_blank"
                  className="font-bold text-tp-black"
                >
                  <span className="text-tp-sky-blue lowercase decoration-tp-black underline-offset-4 hover:underline hover:ease-in-out hover:duration-500">
                    TAXPIRE@FINPIRE.IN
                  </span>
                </a>
              </div>

              <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
                <span className="border-b-3 border-tp-sky-blue mt-4">
                  Follow
                </span>{" "}
                Us
              </p>

              <ul className="flex list-none text-gb-gray-3 mt-6">
                <li className="mr-4">
                  <Link
                    to="https://www.facebook.com/share/6CoN9xqMXzJUhySN/?mibextid=LQQJ4d"
                    className="p-2 inline-block border-1 border-tp-sky-blue shadow shadow-tp-sky-blue rounded-full hover:ease-in-out hover:duration-500 hover:text-tp-sky-blue cursor-pointer "
                  >
                    <FaFacebookF />
                  </Link>
                </li>

                <li className="mr-4">
                  <Link
                    to="https://www.instagram.com/globalbizhq"
                    className="p-2 inline-block border-1 border-tp-sky-blue shadow shadow-tp-sky-blue rounded-full hover:ease-in-out hover:duration-500 hover:text-tp-sky-blue cursor-pointer "
                  >
                    <FaInstagram />
                  </Link>
                </li>

                <li className="mr-4">
                  <Link
                    to="https://x.com/globalbizhq"
                    className="p-2 inline-block border-1 border-tp-sky-blue shadow shadow-tp-sky-blue rounded-full hover:ease-in-out hover:duration-500 hover:text-tp-sky-blue cursor-pointer "
                  >
                    <FaXTwitter />
                  </Link>
                </li>

                <li className="mr-4">
                  <Link
                    to="https://www.linkedin.com/company/globalbizhq"
                    className="p-2 inline-block border-1 border-tp-sky-blue shadow shadow-tp-sky-blue rounded-full hover:ease-in-out hover:duration-500 hover:text-tp-sky-blue cursor-pointer "
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              {/* Map Box */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20347.527427137786!2d55.28610121815047!3d25.22155291595918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432d6a37d4bf%3A0x315c77c169e5a12d!2sWeWork%20-%20Office%20Space%20%26%20Coworking!5e0!3m2!1sen!2sin!4v1718302044243!5m2!1sen!2sin"
                className="w-full h-full"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
