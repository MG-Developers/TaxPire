import React from "react";
import Hero from "../UI Components/Hero/Hero";
import Services from "../Sections/Services/Services";
import FAQs from "../Sections/FAQs/FAQs";

import { TbNotes } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { PiIdentificationBadge } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { MdOutlinePercent } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

function Home() {
  const questions = [
    {
      title: "What services do you offer?",
      content:
        "We offer a range of services including tax optimization, business setup assistance, and investment guidance tailored for high-net-worth individuals. Read more about it here.",
    },

    {
      title: "What is your refund policy?",
      content:
        "We offer a full refund within 30 days of purchase if you are not satisfied with our services. Please contact our support team for assistance.",
    },

    {
      title: "How do I update my account information?",
      content:
        "You can update your account information by logging into your account on our website and navigating to the 'Account Settings' section.",
    },

    {
      title: " How do I get started with Enterprise Formation?",
      content:
        "To get started, simply contact us for a consultation. We will guide you through every step of establishing your new business.",
    },

    {
      title: "What is Capital Navigation?",
      content:
        "Capital Navigation offers strategic guidance to help you navigate and maximize investment opportunities.",
    },

    {
      title: "What is Elite Taxation?",
      content:
        "Elite Taxation involves tailored tax strategies designed specifically for high-net-worth individuals to minimize their tax liabilities.",
    },

    {
      title: "What does Corporate Concierge service include?",
      content:
        "Our Corporate Concierge service provides dedicated assistance for all your corporate needs, from administrative tasks to complex business solutions.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="flex items-center border-1 px-8 py-4 border-tp-gray rounded-full max-w-fit">
            <p className="text-base font-semibold">It’s Easier As Ever!</p>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-end">
              <div>
                <p className="font-bold text-4xl text-tp-navy-blue max-w-lg leading-tight">
                  Effortlessly streamline and control your financial activities
                  with simplicity
                </p>
              </div>

              <div>
                <button className="text-tp-gray shadow-sm shadow-tp-sky-blue text-base px-8 py-4 border-2 border-tp-sky-blue rounded-full font-medium transition-all hover:shadow-sm hover:shadow-tp-blue hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500">
                  See All
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-3 gap-x-10">
              <div>
                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl p-8">
                  <img src="images/dummy-img-3.jpg" />
                  <p className="text-2xl text-tp-black font-semibold mt-6">
                    Simplify, Filter, and Share Your Income
                  </p>
                  <p className="text-lg text-tp-gray font-normal mt-2">
                    With effective filtering, seamless sharing options, you can
                    easily simplify and manage your money.
                  </p>
                </div>

                <div className="bg-tp-yellow border-1 border-tp-yellow shadow shadow-tp-yellow rounded-3xl p-10 mt-8">
                  <p className="text-2xl text-tp-black font-semibold mt-6">
                    Tap into Your Personal Finances Instantly
                  </p>
                  <p className="text-lg text-tp-black font-normal mt-2">
                    Instantly access and manage your personal finances with a
                    simple tap.
                  </p>

                  <div className="bg-white grid grid-cols-2 gap-2 p-6 rounded-3xl mt-4">
                    <p className="flex items-center">
                      {" "}
                      <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue text-white mr-2" />{" "}
                      Saving
                    </p>
                    <p className="flex items-center">
                      {" "}
                      <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue text-white mr-2" />{" "}
                      Payments
                    </p>
                    <p className="flex items-center">
                      {" "}
                      <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue text-white mr-2" />{" "}
                      Investing
                    </p>
                    <p className="flex items-center">
                      {" "}
                      <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue text-white mr-2" />{" "}
                      Scheduling
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-tp-yellow border-1 border-tp-yellow shadow shadow-tp-yellow rounded-3xl p-10">
                  <p className="text-2xl text-tp-black font-semibold mt-6">
                    Tap into Your Personal Finances Instantly
                  </p>
                  <p className="text-lg text-tp-black font-normal mt-2">
                    Instantly access and manage your personal finances with a
                    simple tap.
                  </p>
                </div>

                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl p-8 mt-8">
                  <p className="text-2xl text-tp-black font-semibold">
                    Discover the Power of a Versatile Tool for Managing Your
                    Money Flow
                  </p>

                  <img src="images/dummy-img-4.jpg" className="mt-6" />

                  <p className="flex items-center mt-4">
                    {" "}
                    Learn More
                    <MdKeyboardArrowRight className="rounded-full bg-tp-orange text-white ml-2" />{" "}
                  </p>
                </div>
              </div>

              <div>
                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl p-8">
                  <p className="text-2xl text-tp-black font-semibold">
                    Manage and Monitor Your Money Anytime on Your Smartphone.
                  </p>
                  <p className="text-lg text-tp-gray font-normal mt-2">
                    Using your smartphone, you can easily monitor & manage at
                    any time and from any location.
                  </p>

                  <img src="images/dummy-img-5.jpg" className="mt-6" />
                </div>

                <div className="mt-10">
                  <button className="text-tp-gray w-full text-center shadow-sm shadow-tp-sky-blue text-base px-8 py-4 border-2 border-tp-sky-blue rounded-full font-medium transition-all hover:shadow-sm hover:shadow-tp-blue hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto w-4/5">
          <div>
            <p className="text-center text-4xl font-bold">
              One-stop solution for busy founders
            </p>
            <p className="mt-8 text-2xl text-tp-gray text-center font-semibold"></p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-0 gap-x-0 gap-y-8 lg:mt-14 md:mt-12 mt-8">
            <div className="relative">
              <img src="images/dummy-img.jpg" className="rounded-2xl" />
            </div>

            <div className="flex flex-col justify-center lg:gap-y-4 gap-y-2">
              <div>
                <p className="lg:text-3xl text-2xl font-semibold">
                  Kickstart your business
                </p>
                <p className="md:text-base text-base lg:mt-4 mt-2 leading-relaxed font-normal">
                  From the formation of your company to BOI Reporting, we’re by
                  your side every step, ensuring your business remains 100%
                  compliant.
                </p>
              </div>

              <div className="mt-4 text-base max-w-lg">
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <TbNotes className="mr-2" size={"1.25rem"} />
                    Formation
                  </span>

                  <span className="flex items-center bg-tp-lo rounded-lg px-3 py-2">
                    <IoLocationOutline className="mr-2" size={"1.25rem"} />
                    Registered Agent
                  </span>

                  <span className="flex items-center bg-tp-lb rounded-lg px-3 py-2">
                    <PiIdentificationBadge className="mr-2" size={"1.25rem"} />
                    EIN
                  </span>

                  <span className="flex items-center bg-tp-lp rounded-lg px-3 py-2">
                    <HiOutlineClipboardDocumentList
                      className="mr-2"
                      size={"1.25rem"}
                    />
                    Annual State Filings
                  </span>

                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <MdOutlineVerified className="mr-2" size={"1.25rem"} />
                    Operation Agreement
                  </span>

                  <span className="flex items-center bg-tp-lo rounded-lg px-3 py-2">
                    <LuUsers className="mr-2" size={"1.25rem"} />
                    BOI Reporting
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="flex items-center bg-tp-sky-blue text-base text-white px-6 py-3 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                  <span className="mr-2">Get Started</span>
                  <MdKeyboardArrowRight size={"1.25rem"} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-0 gap-x-0 gap-y-8 lg:mt-14 md:mt-12 mt-8">
            <div className="flex flex-col justify-center lg:gap-y-4 gap-y-2">
              <div>
                <p className="lg:text-3xl text-2xl font-semibold">
                  Grow your company
                </p>
                <p className="md:text-base text-base lg:mt-4 mt-2 leading-relaxed font-normal">
                  We offer essential tools for seamless global business
                  operations, including international money transfers and tax
                  support.
                </p>
              </div>

              <div className="mt-4 text-base max-w-lg">
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center bg-tp-lg-2 rounded-lg px-3 py-2">
                    <IoWalletOutline size={"1.25rem"} className="mr-2" />
                    Money
                  </span>

                  <span className="flex items-center bg-tp-lg-2 rounded-lg px-3 py-2">
                    <SlNotebook size={"1.25rem"} className="mr-2" />
                    Bookkeeping
                  </span>

                  <span className="flex items-center bg-tp-lg-2 rounded-lg px-3 py-2">
                    <MdOutlinePercent size={"1.25rem"} className="mr-2" />
                    Taxes
                  </span>

                  <span className="flex items-center bg-tp-lg-2 rounded-lg px-3 py-2">
                    <IoVideocamOutline size={"1.25rem"} className="mr-2" />
                    CPA Consultation
                  </span>

                  <span className="flex items-center bg-tp-lg-2 rounded-lg px-3 py-2">
                    <FiUser size={"1.25rem"} className="mr-2" />
                    Dedicated Account Manager
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="flex items-center bg-tp-sky-blue text-base text-white px-6 py-3 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                  <span className="mr-2">Get Started</span>
                  <MdKeyboardArrowRight size={"1.25rem"} />
                </button>
              </div>
            </div>

            <div className="relative">
              <img src="images/dummy-img-2.jpg" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <FAQs questions={questions} />
    </>
  );
}

export default Home;
