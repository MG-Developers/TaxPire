import React from "react";
import ServiceCard from "../../UI Components/Cards/Services Card/ServiceCard";

function Services() {
  const services_array = [
    {
      title: "Tax",
      description: "ITR filing software for Tax Experts",
      icon: "c-tax-icon.svg",
    },

    {
      title: "Business",
      description: "Setup your business National/International",
      icon: "c-business-icon-2.svg",
    },

    {
      title: "GST",
      description: "GST, E-Invoicing, Max-ITC, E-Way bill & more",
      icon: "c-gst-icon.svg",
    },

    {
      title: "License",
      description: "Licensing, Registration, MSME & more",
      icon: "c-license-icon.svg",
    },
  ];

  return (
    <section className="bg-tp-light-gray py-24 h-screen">
      <div className="mx-auto w-4/5">
        <div>
          <p className="text-center text-tp-navy-blue text-5xl font-bold">
            India’s largest tax and financial services platform
          </p>
          <p className="mt-8 text-2xl text-tp-gray text-center font-semibold">
            Explore our wide range of tax and business solutions
          </p>
        </div>

        <div className="grid grid-cols-4 mt-20">
          {services_array.map((item, index) => {
            return (
              <div key={index} className="p-4">
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
