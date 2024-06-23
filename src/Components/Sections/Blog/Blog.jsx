import React from "react";
import BlogCard from "../../UI Components/Cards/BlogCard/BlogCard";

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

  return (
    <section className="bg-white py-24 text-tp-black">
      <div className="mx-auto w-4/5">
        <div className="flex items-center border-1 px-8 py-4 border-tp-gray rounded-full max-w-fit">
          <p className="text-base font-semibold">Blog</p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-4xl text-tp-navy-blue max-w-lg leading-tight">
                Latest Articles
              </p>

              <p className="mt-4 text-lg text-tp-gray font-normal max-w-md">
                Explore our newest articles, that offer up-to-date information.
                Keep up to date with our articles.
              </p>
            </div>

            <div>
              <button className="text-tp-gray shadow-sm shadow-tp-sky-blue text-base px-8 py-4 border-2 border-tp-sky-blue rounded-full font-medium transition-all hover:shadow-sm hover:shadow-tp-blue hover:bg-tp-blue hover:text-white hover:border-tp-blue hover:ease-in-out hover:duration-500">
                Read All Blogs
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-3 gap-10">
            {blogs_arr.slice(0, 3).map((item, index) => {
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
  );
}

export default Blogs;
