import React from "react";
import ServiceCard from "../../UI Components/Cards/Services Card/ServiceCard";

function Services() {
  const services_array = [
    {
      title: "Tax",
      description: "ITR filing for individuals & businesses",
      icon: "c-tax-icon.svg",
    },

    {
      title: "Business",
      description: "Setup your business National/International",
      icon: "c-business-icon-2.svg",
    },

    {
      title: "GST",
      description: "Monthly and quarterly GST filing services",
      icon: "c-gst-icon.svg",
    },

    {
      title: "License",
      description: "Licensing, Registration, MSME & more",
      icon: "c-license-icon.svg",
    },
  ];

  return (
    <section className="bg-tp-light-gray lg:py-24 md:py-16 py-10 min-h-screen">
      <div className="mx-auto lg:w-4/5 w-11/12">
        <div>
          <p className="text-center text-tp-navy-blue xl:text-4xl md:text-3xl text-xl font-bold">
            India’s largest tax filing & business setup platform
          </p>
          <p className="lg:mt-8 mt-6 xl:text-2xl lg:text-xl md:text-lg text-sm text-tp-gray text-center font-semibold">
            Discover our comprehensive tax and business solutions
          </p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 2xl:mt-20 lg:mt-16 md:mt-12 mt-8">
          {services_array.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
