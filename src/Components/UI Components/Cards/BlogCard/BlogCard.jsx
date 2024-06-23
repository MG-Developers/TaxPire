import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function BlogCard(props) {
  return (
    <div key={props.index} className="cursor-pointer">
      <div>
        <div className="flex justify-center items-center p-10 bg-tp-light-gray border-1 border-tp-light-gray shadow rounded-3xl w-96 h-80">
          <img src={`images/${props.img}`} />
        </div>

        <div className="flex items-center mt-8 cursor-default">
          <p
            className={`${
              props.category === "Finance"
                ? "bg-tp-lg"
                : props.category === "Branding"
                ? "bg-tp-lp"
                : props.category === "Marketing"
                ? "bg-tp-lo"
                : "bg-tp-lb"
            } px-8 py-3 rounded-full text-lg mr-6 cursor-pointer border-1 border-white hover:border-1 hover:border-tp-blue hover:shadow-sm hover:shadow-tp-blue hover:duration-500 transition-all`}
          >
            {props.category}
          </p>
          <p className="text-tp-gray texl-lg cursor-text">{props.date}</p>
        </div>

        <div className="mt-4">
          <p className="text-2xl text-tp-black font-semibold hover:text-tp-blue hover:duration-500 hover:ease-in-out transition-all">
            {props.title}
          </p>
        </div>

        <div className="mt-3 cursor-text">
          <p className="text-lg text-tp-gray font-light">{props.description}</p>
        </div>

        <div className="mt-4">
          <span className="flex items-center group text-lg text-tp-black max-w-fit">
            Read More
            <MdKeyboardArrowRight className="rounded-full bg-tp-sky-blue group-hover:ml-6 transition-all hover:duration-500 hover:ease-in-out text-white ml-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
