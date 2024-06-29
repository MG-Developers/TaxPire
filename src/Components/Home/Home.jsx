import React from "react";
import Hero from "../UI Components/Hero/Hero";
import Services from "../Sections/Services/Services";
import Tab from "../Sections/Tab/Tab";
import FAQs from "../Sections/FAQs/FAQs";
import Blog from "../Sections/Blog/Blog";

import { TbNotes } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiIdentificationBadge } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { MdOutlinePercent } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import Marquee from "../UI Components/Marquee/Marquee";

function Home() {
  const benefits_array = [
    {
      icon: "premium-icon.svg",
      title: "Premium Quality Experience",
      description:
        "Careful decision-making, effectively manage and distribute your spending cash.",
    },

    {
      icon: "expert-icon.svg",
      title: "Expert Guidance",
      description:
        "Seamlessly shift your cash with secure and efficient transfers.",
    },

    {
      icon: "mislead-icon.svg",
      title: "No misleading practices",
      description: "Transfer payments with ease using secure bank transfers.",
    },

    {
      icon: "secure-icon.svg",
      title: "Secure and Reliable",
      description:
        "Grow your wealth through strategic investment of your funds.",
    },
  ];

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

      <section className="bg-white lg:py-24 md:py-16 py-10 text-tp-black">
        <div className="mx-auto lg:w-4/5 w-11/12">
          <div className="flex items-center border-1 2xl:px-8 md:px-6 px-4 2xl:py-4 md:py-3 py-2 border-tp-gray rounded-full max-w-fit">
            <p className="text-base font-semibold">It’s Easier As Ever!</p>
          </div>

          <div className="md:mt-10 mt-6">
            <div className="flex md:flex-row flex-col justify-between items-end">
              <div>
                <p className="font-bold 2xl:text-4xl md:text-3xl text-2xl text-tp-navy-blue max-w-lg leading-tight">
                  Effortless ITR Filing in less than 5 minutes.
                </p>
              </div>

              <div>
                <button className="md:mt-0 mt-4 text-tp-gray shadow-sm shadow-tp-sky-blue text-base 2xl:px-8 lg:px-6 px-4 2xl:py-4 lg:py-3 py-2 border-2 border-tp-sky-blue rounded-full font-medium transition-all hover:shadow-sm hover:shadow-tp-blue hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500">
                  See All
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              <div className="order-1">
                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl 2xl:p-10 lg:p-6 p-4">
                  <img src="images/dummy-img-3.jpg" />
                  <p className="2xl:text-2xl text-xl text-tp-black font-semibold mt-6">
                    Validation of all your income by experts
                  </p>
                  <p className="2xl:text-lg text-base text-tp-gray font-normal mt-2">
                    With effective filtering, seamless sharing options, you can
                    easily simplify and manage your money.
                  </p>
                </div>

                <div className="bg-tp-yellow border-1 border-tp-yellow shadow shadow-tp-yellow rounded-3xl 2xl:p-10 lg:p-6 p-4 mt-8">
                  <p className="2xl:text-2xl text-xl text-tp-black font-semibold 2xl:mt-6 mt-2">
                    Crypto and F&O gains covered
                  </p>
                  <p className="2xl:text-lg text-base text-tp-black font-normal mt-2">
                    Instantly access and manage your personal finances with a
                    simple tap.
                  </p>

                  <div className="text-base bg-white grid grid-cols-2 gap-2 2xl:p-6 lg:p-4 p-3 rounded-3xl mt-4">
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

              <div className="xl:order-2 lg:order-3 order-2">
                <div className="bg-tp-yellow border-1 border-tp-yellow shadow shadow-tp-yellow rounded-3xl 2xl:p-10 lg:p-6 p-4">
                  <p className="2xl:text-2xl text-xl text-tp-black font-semibold 2xl:mt-6 mt-2">
                    No hidden charges
                  </p>
                  <p className="2xl:text-lg text-base text-tp-black font-normal mt-2">
                    Instantly access and manage your personal finances with a
                    simple tap.
                  </p>
                </div>

                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl 2xl:p-10 lg:p-6 p-4 mt-8">
                  <p className="2xl:text-2xl text-xl text-tp-black font-semibold">
                    Avoid tax notice or penalty
                  </p>

                  <img src="images/dummy-img-4.jpg" className="mt-6" />

                  <p className="flex items-center mt-4">
                    {" "}
                    Learn More
                    <MdKeyboardArrowRight className="rounded-full bg-tp-orange text-white ml-2" />{" "}
                  </p>
                </div>
              </div>

              <div className="xl:order-3 lg:order-2 order-3">
                <div className="border-1 border-light-gray shadow shadow-gray-300 rounded-3xl 2xl:p-10 lg:p-6 p-4">
                  <p className="2xl:text-2xl text-xl text-tp-black font-semibold">
                    Maximum tax refund
                  </p>
                  <p className="2xl:text-lg text-base text-tp-gray font-normal mt-2">
                    Using your smartphone, you can easily monitor & manage at
                    any time and from any location.
                  </p>

                  <img src="images/dummy-img-5.jpg" className="mt-6" />
                </div>

                <div className="mt-10">
                  <button className="text-tp-gray w-full text-center shadow-sm shadow-tp-sky-blue text-base 2xl:px-8 px-6 2xl:py-4 py-3 border-2 border-tp-sky-blue rounded-full font-medium transition-all hover:shadow-sm hover:shadow-tp-blue hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="bg-white lg:py-24 md:py-16 py-10 text-tp-black">
        <div className="mx-auto lg:w-4/5 w-11/12">
          <div>
            <p className="text-center lg:text-4xl md:text-3xl text-2xl font-bold xl:mb-20 lg:mb-16 md:mb-12 mb-8">
              Unified solution for visionary entrepreneurs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 lg:mt-24 md:mt-16 mt-8">
            <div className="relative lg:block flex justify-center">
              <img
                src="images/dummy-img.jpg"
                className="rounded-2xl xl:w-4/5 w-full"
              />
            </div>

            <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center lg:gap-y-4 gap-y-2">
              <div>
                <p className="md:text-3xl text-2xl font-semibold">
                  Setup your dream business
                </p>
                <p className="text-base md:mt-4 mt-2 leading-relaxed font-normal">
                  We provide comprehensive support from the inception of your
                  company to its expansion, guaranteeing 100% compliance
                  throughout your business journey.
                </p>
              </div>

              <div className="mt-4 text-base lg:max-w-lg">
                <div className="flex md:justify-start justify-center flex-wrap gap-3">
                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <TbNotes className="mr-2" size={"1.25rem"} />
                    Incorporation
                  </span>

                  <span className="flex items-center bg-tp-lo rounded-lg px-3 py-2">
                    <MdOutlineManageAccounts
                      className="mr-2"
                      size={"1.25rem"}
                    />
                    Dedicated CA
                  </span>

                  <span className="flex items-center bg-tp-lb rounded-lg px-3 py-2">
                    <PiIdentificationBadge className="mr-2" size={"1.25rem"} />
                    CIN
                  </span>

                  <span className="flex items-center bg-tp-lp rounded-lg px-3 py-2">
                    <HiOutlineClipboardDocumentList
                      className="mr-2"
                      size={"1.25rem"}
                    />
                    Annual Filings
                  </span>

                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <MdOutlineVerified className="mr-2" size={"1.25rem"} />
                    Shareholder Agreement
                  </span>

                  <span className="flex items-center bg-tp-lo rounded-lg px-3 py-2">
                    <TbReportSearch className="mr-2" size={"1.25rem"} />
                    MOA & AOA Drafting
                  </span>
                </div>
              </div>

              <div className="md:mt-6 mt-4">
                <button className="flex items-center bg-tp-sky-blue text-base text-white px-6 py-3 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                  <span className="mr-2">Get Started</span>
                  <MdKeyboardArrowRight size={"1.25rem"} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 lg:mt-24 md:mt-16 mt-8">
            <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center lg:gap-y-4 gap-y-2 lg:order-1 order-2">
              <div>
                <p className="md:text-3xl text-2xl font-semibold">
                  Stay Compliant
                </p>
                <p className="text-base md:mt-4 mt-2 leading-relaxed font-normal">
                  Our premium compliance services facilitate smooth business
                  operations, encompassing online bookkeeping, tax support, GST
                  services, TDS management & more.
                </p>
              </div>

              <div className="mt-4 text-base lg:max-w-lg">
                <div className="flex md:justify-start justify-center flex-wrap gap-3">
                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <IoWalletOutline size={"1.25rem"} className="mr-2" />
                    GST
                  </span>

                  <span className="flex items-center bg-tp-lp rounded-lg px-3 py-2">
                    <SlNotebook size={"1.25rem"} className="mr-2" />
                    Bookkeeping
                  </span>

                  <span className="flex items-center bg-tp-lb rounded-lg px-3 py-2">
                    <MdOutlinePercent size={"1.25rem"} className="mr-2" />
                    Income Tax
                  </span>

                  <span className="flex items-center bg-tp-lo rounded-lg px-3 py-2">
                    <IoVideocamOutline size={"1.25rem"} className="mr-2" />
                    CA Consultation
                  </span>

                  <span className="flex items-center bg-tp-lg rounded-lg px-3 py-2">
                    <FaRegFileAlt size={"1.25rem"} className="mr-2" />
                    MCA Filings
                  </span>
                </div>
              </div>

              <div className="md:mt-6 mt-4">
                <button className="flex items-center bg-tp-sky-blue text-base text-white px-6 py-3 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500">
                  <span className="mr-2">Get Started</span>
                  <MdKeyboardArrowRight size={"1.25rem"} />
                </button>
              </div>
            </div>

            <div className="relative flex lg:justify-end justify-center lg:order-2 order-1">
              <img
                src="images/dummy-img-2.jpg"
                className="rounded-2xl xl:w-4/5 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tp-light-gray lg:py-24 md:py-16 py-10">
        <div className="flex flex-col items-center mx-auto lg:w-4/5 w-11/12">
          <div>
            <p className="text-base font-semibold text-tp-back border-1 2xl:px-8 md:px-6 px-4 2xl:py-4 md:py-3 py-2 border-tp-black rounded-full">
              Why Taxpire ?
            </p>
          </div>

          <div className="md:mt-8 mt-6">
            <p className="leading-tight capitalize lg:text-4xl md:text-3xl text-2xl text-tp-navy-blue text-center font-bold max-w-lg">
              Everything in Compliance Just Becomes so Easy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {benefits_array.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid md:grid-flow-col grid-flow-row md:auto-cols-fit auto-rows-fit gap-6 p-4 rounded-3xl bg-white shadow-lg shadow-gray-100 hover:duration-500 hover:shadow-gray-300 hover:ease-in-out transition-all"
                >
                  <div className="flex items-center justify-center bg-tp-light-gray rounded-3xl p-4 min-h-fit min-w-fit">
                    <img className="xl:w-24 w-20" src={`images/icons/${item.icon}`} />
                  </div>

                  <div>
                    <p className="text-tp-sky-blue md:text-2xl text-xl font-normal">
                      {item.title}
                    </p>
                    <p className="mt-2 font-light md:text-lg text-base text-tp-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Tab />

      {/* <Marquee /> */}

      <FAQs questions={questions} />

      <Blog />
    </>
  );
}

export default Home;
