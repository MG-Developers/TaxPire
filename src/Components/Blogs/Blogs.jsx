import React, { useState } from "react";
import BlogCard from "../UI Components/Cards/BlogCard/BlogCard";
import { MdKeyboardArrowRight } from "react-icons/md";

function Blogs() {
  const blogs_arr = [
    {
      img: "blog-img-1.png",
      category: "Finance",
      date: "July 21, 2023",
      title: "Unlocking the Secrets of Achieve Financial Freedom",
      description:
        "The road for a safe & successful future. It's time to discover the secrets and begin your road to financial independence.",
    },

    {
      img: "blog-img-2.png",
      category: "Branding",
      date: "July 21, 2023",
      title: "How Technology is Transform Financial Services",
      description:
        "These new players make use of technology to offer simple, affordable solutions that consumer tastes and demands.",
    },

    {
      img: "blog-img-3.png",
      category: "Marketing",
      date: "July 21, 2023",
      title: "How to Get in Correct Shape on Your Life Financially",
      description:
        "Discover practical solutions and professional advice for improving your financial health with the experienced team.",
    },

    {
      img: "blog-img-2.png",
      category: "Branding",
      date: "July 21, 2023",
      title: "How to Get in Correct Shape on Your Life Financially",
      description:
        "Discover practical solutions and professional advice for improving your financial health with the experienced team.",
    },

    {
      img: "blog-img-3.png",
      category: "Branding",
      date: "July 21, 2023",
      title: "How to Get in Correct Shape on Your Life Financially",
      description:
        "Discover practical solutions and professional advice for improving your financial health with the experienced team.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <>
      <section className="py-6">
        <div className="flex flex-col justify-center items-center w-11/12 bg-tp-blue text-white mx-auto rounded-3xl h-screen">
          <p className="text-6xl font-bold">Latest Articles</p>
          <p className="mt-6 text-lg font-normal max-w-screen-md text-center">
            Explore our newest articles, that offer up-to-date information about
            the financial elements. Keep up to date with our articles.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-2 gap-20">
            <div className="flex justify-center items-center p-10 bg-tp-light-gray border-1 border-tp-light-gray shadow rounded-3xl cursor-pointer">
              <img src={`images/${blogs_arr[0].img}`} />
            </div>

            <div>
              <div className="flex items-center mt-8 cursor-default">
                <p
                  className={`${
                    blogs_arr[0].category === "Finance"
                      ? "bg-tp-lg"
                      : blogs_arr[0].category === "Branding"
                      ? "bg-tp-lp"
                      : blogs_arr[0].category === "Marketing"
                      ? "bg-tp-lo"
                      : "bg-tp-lb"
                  } px-8 py-3 rounded-full text-lg mr-6 cursor-pointer border-1 border-white hover:border-1 hover:border-tp-blue hover:shadow-sm hover:shadow-tp-blue hover:duration-500 transition-all`}
                >
                  {blogs_arr[0].category}
                </p>
                <p className="text-tp-gray texl-lg cursor-text">
                  {blogs_arr[0].date}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-3xl text-tp-black font-semibold hover:text-tp-blue hover:duration-500 hover:ease-in-out transition-all cursor-pointer">
                  {blogs_arr[0].title}
                </p>
              </div>

              <div className="mt-3 cursor-text">
                <p className="text-lg text-tp-gray font-light">
                  {blogs_arr[0].description}
                </p>
              </div>

              <div className="mt-6">
                <span className="flex items-center group text-lg text-tp-black max-w-fit cursor-pointer">
                  Read More
                  <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue group-hover:ml-6 transition-all hover:duration-500 hover:ease-in-out text-white ml-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-4xl text-tp-navy-blue max-w-lg leading-tight">
                  Recent <span className="text-tp-blue">Articles</span>
                </p>
              </div>

              <div className="flex item-center gap-4">
                <button
                  onClick={() => {
                    setActiveCategory("ALL");
                  }}
                  className={`${
                    activeCategory === "ALL"
                      ? "bg-tp-blue border-1 border-tp-blue text-white"
                      : ""
                  } text-tp-gray text-sm py-4 px-6 border-1 border-tp-gray rounded-lg font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500`}
                >
                  All
                </button>

                <button
                  onClick={() => {
                    setActiveCategory("Finance");
                  }}
                  className={`${
                    activeCategory === "Finance"
                      ? "bg-tp-blue border-1 border-tp-blue text-white"
                      : ""
                  } text-tp-gray text-sm py-4 px-6 border-1 border-tp-gray rounded-lg font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500`}
                >
                  Finance
                </button>

                <button
                  onClick={() => {
                    setActiveCategory("Marketing");
                  }}
                  className={`${
                    activeCategory === "Marketing"
                      ? "bg-tp-blue border-1 border-tp-blue text-white"
                      : ""
                  } text-tp-gray text-sm py-4 px-6 border-1 border-tp-gray rounded-lg font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500`}
                >
                  Marketing
                </button>

                <button
                  onClick={() => {
                    setActiveCategory("Branding");
                  }}
                  className={`${
                    activeCategory === "Branding"
                      ? "bg-tp-blue border-1 border-tp-blue text-white"
                      : ""
                  } text-tp-gray text-sm py-4 px-6 border-1 border-tp-gray rounded-lg font-medium transition-all hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500`}
                >
                  Branding
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-3 gap-16">
              {blogs_arr.map((item, index) => {
                return (
                  <BlogCard
                    index={index}
                    img={item.img}
                    category={item.category}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
