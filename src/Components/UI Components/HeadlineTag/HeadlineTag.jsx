import React from "react";

function HeadlineTag(props) {
  console.log(props.bg)
  return (
    <div>
      <span
        className={`capitalize ${props.bg} text-${props.text} shadow-xl md:text-base text-sm lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 border-1 rounded-full border-tp-black font-medium`}
      >
        {props.title}
      </span>
    </div>
  );
}

export default HeadlineTag;
