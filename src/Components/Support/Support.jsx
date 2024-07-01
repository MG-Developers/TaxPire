import React from "react";
import HeadlineTag from "../../Components/UI Components/HeadlineTag/HeadlineTag";

function Support() {
  const support_arr = [
    {
      img: "telegram-logo.png",
      link: "https://t.me/Taxpire_bot",
    },

    {
      img: "whatsapp-logo.png",
      link: "https://wa.me/919319281199",
    },

    {
      img: "email-logo.png",
      link: "mailto:support@finpirein.zohodesk.in",
    },

    {
      img: "help-desk-logo.png",
      link: "https://support.taxpire.in/portal/en/newticket?departmentId=37918000000940683&layoutId=37918000000950970",
    },
  ];

  return (
    <section className="py-6">
      <div className="w-11/12 bg-white text-tp-black border-1 border-gray-200 shadow-xl mx-auto rounded-3xl">
        <div className="lg:w-4/5 w-11/12 mx-auto flex flex-col justify-center items-center xl:py-16 lg:py-12 md:py-10 py-8">
          <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-bold">
            Swift resolutions to queries within 24 hours
          </p>
          <p className="xl:mt-10 lg:mt-8 md:mt-6 mt-4 lg:text-lg md:text-base text-sm font-normal max-w-screen-md text-center">
            Receive timely responses to your queries, with a commitment to
            address all tickets within a 24-hour timeframe. Raise tickets via
            below platforms.
          </p>

          <div className="lg:mt-12 md:mt-10 mt-8">
            <HeadlineTag bg="bg-tp-black" text="white" title="Get In Touch!" />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:mt-16 lg:mt-12 md:mt-10 mt-8 xl:gap-10 lg:gap-8 md:gap-10 gap-6">
            {support_arr.map((item) => {
              return (
                <div className="flex flex-col items-center border-1 border-gray-200 shadow xl:p-8 p-4 rounded-3xl">
                  <img className="xl:w-20 md:w-16 w-12" src={`images/${item.img}`} />
                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-6 bg-white border-1 border-tp-blue shadow-sm shadow-tp-blue px-4 py-2 rounded-full xl:text-base text-sm text-tp-black transition-all hover:bg-tp-blue hover:text-white hover:border-tp-sky-blue hover:ease-in-out hover:duration-500"
                  >
                    Raise a ticket
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
