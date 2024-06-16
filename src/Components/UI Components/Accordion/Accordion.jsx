import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function App({ questions }) {
  const itemClasses = {
    title: "font-bold md:text-xl text-base text-tp-navy-blue py-1",
    content: "text-tp-gray font-medium mb-4 md:text-base text-sm p-0",
    indicator: "text-tp-navy-blue text-xl",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      {questions.map((item, index) => {
        return (
          <AccordionItem
            indicator={({ isOpen }) =>
              isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
            }
            key={index}
            aria-label={`Accordion ${index}`}
            title={item.title}
            disableIndicatorAnimation
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
