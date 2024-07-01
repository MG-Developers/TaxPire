import React from "react";
import Accordion from "../../UI Components/Accordion/Accordion";

function FAQs(props) {
  return (
    <section className="bg-white py-4 text-tp-black">
      <div className="mx-auto lg:w-4/5 w-11/12">
        <div className="lg:mt-10 md:mt-4 mt-2 border-b-1 py-8">
          <p className="lg:text-5xl md:text-4xl text-xl font-bold">
            Frequently Asked Questions
          </p>
        </div>

        <div className="flex md:justify-end justify-center mt-4">
          <Accordion questions={props.questions} />
        </div>
      </div>
    </section>
  );
}

export default FAQs;
