import React from "react";
import { MdOutlineMail } from "react-icons/md";

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
        <div className="flex flex-col justify-center items-center py-16">
          <p className="text-5xl font-bold">
            Swift resolutions to queries within 24 hours
          </p>
          <p className="mt-10 text-lg font-normal max-w-screen-md text-center">
            Receive timely responses to your queries, with a commitment to
            address all tickets within a 24-hour timeframe. Raise tickets via
            below platforms.
          </p>

          <div className="flex mt-12">
            <p className="bg-tp-black text-white shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium">
              Get in touch!
            </p>
          </div>

          <div className="grid grid-cols-4 mt-16 gap-10">
            {support_arr.map((item) => {
              return (
                <div className="flex flex-col items-center border-1 border-gray-200 shadow p-10 rounded-3xl">
                  <img className="w-20" src={`images/${item.img}`} />
                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-6 bg-white border-1 border-tp-blue shadow-sm shadow-tp-blue px-4 py-2 rounded-full text-base text-tp-black transition-all hover:bg-tp-blue hover:text-white hover:border-tp-sky-blue hover:ease-in-out hover:duration-500"
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
