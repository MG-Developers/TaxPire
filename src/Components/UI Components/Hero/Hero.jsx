import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-white lg:py-16 md:py-12 py-8 text-tp-navy-blue">
      <div className="mx-auto lg:w-4/5 w-11/12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="flex flex-col lg:items-start items-center">
            <div className="flex md:flex-row flex-col items-center border-1 px-6 py-2 border-tp-gray rounded-full max-w-fit">
              <p className="flex items-center mr-2 xl:text-base text-sm font-semibold">
                5 Star Reviews On{" "}
                <SiTrustpilot
                  size={"1.5rem"}
                  style={{ color: "#0AB67B" }}
                  className="mx-1"
                />{" "}
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  Trustpilot
                </span>
              </p>
              <div className="flex md:mt-0 mt-2">
                <img className="mr-1 2xl:w-6 w-4" src="images/star.svg" />
                <img className="mr-1 2xl:w-6 w-4" src="images/star.svg" />
                <img className="mr-1 2xl:w-6 w-4" src="images/star.svg" />
                <img className="mr-1 2xl:w-6 w-4" src="images/star.svg" />
                <img className="mr-1 2xl:w-6 w-4" src="images/star.svg" />
              </div>
            </div>

            <div className="max-w-lg mt-10">
              <p className="2xl:text-5xl md:text-4xl text-2xl lg:text-left text-center font-semibold leading-snug">
                Tax filing made easy with our Taxperts.
              </p>
            </div>

            <div className="flex md:flex-row flex-col gap-4 mt-8">
              <Link to="/pricing" className="flex items-center shadow-xl bg-tp-sky-blue md:text-base text-sm text-white 2xl:px-8 md:px-6 px-4 2xl:py-4 md:py-3 py-2 font-medium rounded-full transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                Get Started <MdKeyboardArrowRight size={"1.5rem"} />
              </Link>
              <a
                href="https://booknow.finpire.in/#/taxpire"
                className="text-tp-navy-blue shadow-xl md:text-base text-sm 2xl:px-8 md:px-6 px-4 2xl:py-4 md:py-3 py-2 border-1 rounded-full border-tp-black font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-sky-blue hover:ease-in-out hover:duration-500"
              >
                Talk to our CAs
              </a>
            </div>
          </div>

          <div>
            <video loop autoPlay muted>
              <source src="videos/home-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
