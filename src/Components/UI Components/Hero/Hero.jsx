import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";

function Hero() {
  return (
    <section className="bg-white py-16 text-tp-navy-blue">
      <div className="mx-auto w-4/5">
        <div className="grid grid-cols-2 gap-x-10 items-center">
          <div>
            <div className="flex items-center border-1 px-6 py-2 border-tp-gray rounded-full max-w-fit">
              <p className="flex items-center mr-2 text-base font-semibold">
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
              <img className="mr-1" src="images/star.svg" />
              <img className="mr-1" src="images/star.svg" />
              <img className="mr-1" src="images/star.svg" />
              <img className="mr-1" src="images/star.svg" />
              <img className="mr-1" src="images/star.svg" />
            </div>

            <div className="max-w-lg mt-10">
              <p className="text-5xl font-semibold leading-snug">
                Tax filing made easy with our Taxperts.
              </p>
            </div>

            <div className="flex mt-8">
              <button className="flex items-center shadow-xl bg-tp-sky-blue text-base text-white px-8 py-4 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                Get Started <MdKeyboardArrowRight size={"1.5rem"} />
              </button>
              <button className="text-tp-navy-blue shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-sky-blue hover:ease-in-out hover:duration-500">
                Talk to our CAs
              </button>
            </div>
          </div>

          <div>
            <video loop autoPlay muted>
              <source src="videos/home.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
