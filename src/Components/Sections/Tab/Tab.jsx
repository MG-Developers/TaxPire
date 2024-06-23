import React, { useState } from "react";

function Tab() {
  const tabGroup = [
    {
      icon: "ruppee-icon.svg",
      title: "Choose Plan & Subscribe",
      description:
        "Strategic money management can help you maximise your savings and financial potential.",
    },

    {
      icon: "dummy-icon-6.svg",
      title: "Upload Documents",
      description:
        "Interactive tools, you'll learn budgeting principles, cost tracking, saving, and wise financial decision-making.",
    },

    {
      icon: "dummy-icon-7.svg",
      title: "Sit Back & Relax",
      description:
        "The face of unanticipated occurrences such as medical emergency, job loss, or urgent house repairs.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-tp-light-gray py-24 text-tp-black">
      <div className="mx-auto w-4/5">
        <div>
          <p className="text-base font-semibold text-tp-black border-1 shadow-lg px-8 py-4 border-tp-black rounded-full max-w-fit">
            The Taxpire Advantage
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              <div>
                <p className="font-bold text-4xl text-tp-navy-blue max-w-lg leading-tight">
                  How it works in 3 simple steps
                </p>
              </div>

              <div className="mt-6">
                <p className="text-lg font-light text-tp-gray max-w-md leading-normal">
                  Minimal charges for premium services, ensuring you get best
                  value for your money. Escape the hassle of DIY filings.
                </p>
              </div>

              <div className="mt-10">
                <div className="flex flex-col gap-y-2">
                  {tabGroup.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setActiveTab(index);
                        }}
                        className={`flex items-center relative p-8 -left-10 cursor-pointer ${
                          index === activeTab
                            ? "rounded-3xl border-1 border-gray-200 -left-15 shadow-lg shadow-gray-200 bg-white max-w-fit"
                            : ""
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center ${
                            index === activeTab ? "bg-tp-blue" : "bg-gray-400"
                          } rounded-3xl p-6 mr-6 min-h-24 min-w-24`}
                        >
                          <img className="w-10" src={`images/${item.icon}`} />
                        </div>

                        <div>
                          <p
                            className={`${
                              index === activeTab
                                ? "text-tp-black"
                                : "text-gray-400"
                            } text-3xl font-bold`}
                          >
                            {item.title}
                          </p>

                          {index === activeTab ? (
                            <p className="mt-2 font-light text-lg text-tp-gray max-w-sm">
                              {item.description}
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-tp-blue p-12 rounded-3xl">
                <img src={`images/tab-img-${activeTab}.png`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tab;
