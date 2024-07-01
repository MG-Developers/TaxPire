import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <section className="mt-4 lg:py-8 md:py-6 py-4 bg-tp-light-gray text-tp-gray">
      <div className="lg:w-4/5 w-11/12 mx-auto md:mb-20 mb-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:justify-items-center justify-items-start">
          <div className="md:mt-10 mt-8">
            <img
              className="xl:w-32 md:w-28 w-24 mb-4"
              src="images/taxpire-logo.svg"
            />

            <p className="text-sm font-normal transition-all hover:duration-500 hover:ease-in-out hover:scale-105">
              With Ditto, you don't just compare insurance. You understand it.
              Narrow down choices. Avoid pitfalls and make better decisions.
            </p>

            <div className="mt-6">
              <p className="text-sm">For Queries:</p>
              <a target="_blank" href="mailto:INFO@TAXPIRE.COM">
                <div className="flex items-center mt-2 tex-sm text-tp-black">
                  <IoMdMail size="1rem" className="mr-2" />
                  <span className="lowercase underline-offset-4 transition-all hover:underline hover:ease-in-out hover:duration-500">
                    TAXPIRE@FINPIRE.IN
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 font-semibold text-lg text-tp-black">Company</p>
            <ul className="list-none text-tp-gray">
              <li className="mb-2 text-base transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2 text-base transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-2 text-base transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="mb-4 font-semibold text-lg text-tp-black">Support</p>
            <ul className="list-none text-tp-gray">
              <li className="mb-2 text-base transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="mb-2 text-base transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer">
                <Link to="/support">Raise a ticket</Link>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="mb-4 font-semibold text-lg text-tp-black">Social</p>
            <ul className="flex list-none text-gb-gray-3 mb-4">
              <li className="mr-4">
                <Link
                  to="https://www.facebook.com/share/6CoN9xqMXzJUhySN/?mibextid=LQQJ4d"
                  className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-110 cursor-pointer"
                >
                  <FaFacebookF />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://www.instagram.com/globalbizhq"
                  className="p-2 inline-block border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-110 cursor-pointer"
                >
                  <FaInstagram />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://x.com/globalbizhq"
                  className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-110 cursor-pointer"
                >
                  <FaXTwitter />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://www.linkedin.com/company/globalbizhq"
                  className="p-2 inline-block shadow-tp-black border-1 border-tp-black text-tp-black rounded-full transition-all hover:ease-in-out hover:duration-500 hover:scale-110 cursor-pointer"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gb-gray-3" />

      <div className="lg:w-4/5 w-11/12 mx-auto mt-4 md:mt-16 text-tp-black">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="mb-8 md:mb-0">Copyright &copy; 2024 - TaxPire</p>
          <a
            href="#"
            className="bg-tp-sky-blue md:text-base text-sm text-white md:px-6 px-4 md:py-3 py-2 font-medium rounded-full transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500"
          >
            Start your business
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
