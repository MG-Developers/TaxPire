import React from "react";
import TeamCard from "../UI Components/Cards/TeamCard/TeamCard";
import LocationCard from "../UI Components/Cards/LocationCard/LocationCard";
import HeadlineTag from "../UI Components/HeadlineTag/HeadlineTag";

function About() {
  const benefits_array = [
    {
      icon: "simplicity-icon.svg",
      bgColor: "#ff5fef",
      title: "Simplicity",
      description:
        "We believe in making tax filing and compliance straightforward and accessible for everyone.",
    },

    {
      icon: "transparency-icon.svg",
      bgColor: "#2f84ff",
      title: "Transparency",
      description:
        "Our commitment to transparency ensures clarity and trust in all our interactions and services.",
    },

    {
      icon: "excellence-icon.svg",
      bgColor: "#ff5e90",
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery, from customer support to technological innovation.",
    },

    {
      icon: "integrity-icon.svg",
      bgColor: "#09cd3f",
      title: "Integrity",
      description:
        "Upholding the highest standards of integrity ensures we consistently meet our clients' expectations and regulatory requirements.",
    },

    {
      icon: "expert-icon.svg",
      bgColor: "#fec901",
      title: "Innovation",
      description:
        "Embracing technology and continuous improvement to provide cutting-edge solutions that redefine the tax services industry.",
    },

    {
      icon: "client-icon.svg",
      bgColor: "#daadfd",
      title: "Client-Centricity",
      description:
        "Putting our clients first drives us to deliver personalized, responsive service that exceeds expectations and fosters long-term partnerships.",
    },
  ];

  const team_array = [
    {
      img: "sanyam-team-img.jpeg",
      name: "Sanyam Vaish",
      post: "Chief Executive Officer",
      linkedIn: "https://www.linkedin.com/in/sanyam-vaish-37bb84120",
      twitter: "https://x.com/SanyamvaishCFO",
    },

    {
      img: "rahul-team-img.jpeg",
      name: "Rahul Taneja",
      post: "Chief Financial Officer",
      linkedIn: "https://in.linkedin.com/in/rahultanejacfo",
      twitter: "https://x.com/rahultanejacfo",
    },

    {
      img: "dummy-team-img-3.jpg",
      name: "Sanskar Vij",
      post: "Chief Marketing Officer",
      linkedIn: "https://www.linkedin.com/in/sanskar-vij-a116b620a",
      twitter: "https://x.com/sanskaaarr",
    },

    {
      img: "dummy-team-img-2.jpg",
      name: "Mohit Jain",
      post: "Chief Technology Officer",
      linkedIn: "https://www.linkedin.com/in/mohit-jain-3a0aa420a/",
      twitter: "https://x.com/sanskaaarr",
    },

    {
      img: "dummy-team-img-3.jpg",
      name: "Ritik Sivach",
      post: "Chief Information Head",
      linkedIn: "https://linkedIn.com/",
      twitter: "https://x.com/sanskaaarr",
    },
  ];

  return (
    <>
      <section className="text-tp-black">
        <div className="bg-white border-1 border-gray-200 shadow-lg shadow-gray-200 mx-4 rounded-3xl">
          <div className="lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
              <div className="flex flex-col md:items-start items-center">
                <HeadlineTag
                  bg="bg-tp-black"
                  text="white"
                  title="Get To Know Us!"
                />
                <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl capitalize font-bold lg:mt-10 md:mt-8 mt-6">
                  About Us
                </p>
                <p className="lg:mt-6 md:mt-4 mt-3 md:text-base text-sm md:text-left text-center font-normal">
                  Taxpire simplifies taxes with expert guidance and tailored
                  solutions, ensuring ease and confidence. With a global
                  presence in <span className="text-tp-blue">India</span>,{" "}
                  <span className="text-tp-blue">Canada</span>, and{" "}
                  <span className="text-tp-blue">UAE</span>, we offer
                  comprehensive tax services across borders.
                </p>
              </div>
              <div>
                <img src="images/dummy-about-img.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-tp-black">
        <div className="lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
          <div className="flex justify-center">
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl capitalize font-bold">
              Our <span className="text-tp-blue">Expertise</span>
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-center lg:p-4 md:p-3 p-2 lg:text-lg md:text-base text-sm max-w-screen-lg font-light text-gray-500">
              At Taxpire, we are committed to pushing the boundaries of what's
              possible.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-4 lg:mt-16 md:mt-12 mt-10">
            <div className="border-t border-tp-blue lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                2017
              </p>
              <p className="md:mt-8 mt-4 xl:text-lg md:text-base text-sm text-tp-blue">
                Year Founded
              </p>
            </div>

            <div className="border-t border-tp-blue lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                8+
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-tp-blue">
                Years of experience
              </p>
            </div>

            <div className="border-t border-tp-blue lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                20+
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-tp-blue">
                Chartered Accountants
              </p>
            </div>

            <div className="border-t border-tp-blue lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                50+
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-tp-blue">
                Professional Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-tp-black">
        <div className="lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl capitalize font-bold">
                We Operate
                <span className="text-tp-blue leading-normal"> Globally</span>
              </p>
              <p className="text-center lg:p-4 md:p-3 p-2 lg:text-lg md:text-base text-sm max-w-screen-lg font-light text-gray-500">
                With offices in India, Canada, and the UAE, we provide
                comprehensive tax services to clients across the globe,
                leveraging our local expertise to navigate international tax
                complexities.
              </p>
            </div>

            <div className="xl:mt-12 lg:mt-10 md:mt-8 mt-6">
              <div className="grid grid-flow-row auto-rows-min xl:gap-20 lg:gap-16 md:gap-12 gap-10">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                    <img
                      className="xl:w-12 lg:w-10 w-8"
                      src="images/icons/india-flag.svg"
                    />
                    <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                      INDIA
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-8 gap-6 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                    <LocationCard
                      city="Noida"
                      address="The Iconic Corenthum, Sector 62, Noida, Uttar Pradesh
                          201301, India"
                    />

                    <LocationCard
                      city="Gurugram"
                      address="BlueOne Square, Udyog Vihar Phase 4 Rd, Gurugram,
                          Haryana 122016, India"
                    />

                    <LocationCard
                      city="New Delhi"
                      address="Eldeco Centre, Block A, Shivalik Colony, Malviya
                          Nagar, Delhi, New Delhi 110017, India"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <HeadlineTag
                    bg="bg-white"
                    text="tp-black"
                    title="Our Global Presence"
                  />
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                      <img
                        className="xl:w-12 lg:w-10 w-8"
                        src="images/icons/canada-flag.svg"
                      />
                      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                        CANADA
                      </p>
                    </div>

                    <div className="grid grid-cols-1 xl:gap-10 lg:gap-8 gap-6 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                      <LocationCard
                        city="Toronto"
                        address="240 Richmond St W, Toronto, ON M5V 1V6, Canada"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                      <img
                        className="xl:w-12 lg:w-10 w-8"
                        src="images/icons/uae-flag.svg"
                      />
                      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                        UAE
                      </p>
                    </div>

                    <div className="grid grid-cols-1 xl:gap-10 lg:gap-8 md:gap-6 gap-4 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                      <LocationCard
                        city="Dubai"
                        address="One Central 8th and 9th Floor, Trade Centre 2, Dubai"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-tp-black">
        <div className="lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <HeadlineTag bg="bg-tp-black" text="white" title="Our Vision" />

            <div className="xl:mt-16 lg:mt-12 md:mt-10 mt-8 flex flex-col items-center justify-center">
              <p className="xl:text-5xl lg:text-4xl md:text-3xl text-center text-2xl capitalize font-bold">
                Effortless Tax Filing Made
                <span className="text-tp-blue leading-normal"> Easy </span>
                with Taxpire
              </p>
              <p className="text-center lg:p-4 md:p-3 p-2 lg:text-lg md:text-base text-sm max-w-screen-lg font-light text-gray-500">
                At Taxpire, we envision a future where tax filing and compliance
                are seamless experiences for individuals and businesses alike.
                Our commitment lies in delivering premium services that
                prioritize simplicity, transparency, and accuracy.
              </p>
            </div>

            <div className="xl:mt-10 lg:mt-8 md:mt-6 mt-4">
              <img className="rounded-3xl" src="images/dummy-about-img-3.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tp-light-gray">
        <div className="flex flex-col items-center lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
          <HeadlineTag bg="bg-tp-black" text="white" title="Values" />

          <div className="xl:mt-10 lg:mt-8 md:mt-6 mt-4">
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center capitalize font-bold">
              Every best decision in{" "}
              <span className="text-tp-blue">Taxpire</span> team
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-12 md:gap-10 gap-8 xl:mt-16 lg:mt-12 md:mt-10 mt-8">
            {benefits_array.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:items-start items-center xl:p-10 lg:p-8 p-6 rounded-3xl bg-white shadow-lg shadow-gray-100 hover:duration-500 hover:shadow-gray-300 hover:ease-in-out transition-all"
                >
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="flex items-center justify-center rounded-3xl lg:p-6 md:p-4 p-3 md:mr-6 mr-0 min-w-fit min-h-fit"
                  >
                    <img
                      className="xl:w-16 md:w-12 w-10"
                      src={`images/icons/${item.icon}`}
                    />
                  </div>

                  <div className="md:text-left text-center">
                    <p className="xl:text-3xl md:text-2xl text-xl md:mt-0 mt-4 font-bold">
                      {item.title}
                    </p>
                    <p className="mt-2 font-light lg:text-lg md:text-base text-sm md:mt-0 mt-2 text-tp-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white text-tp-black xl:mb-20 lg:mb-16 md:mb-12 mb-8">
        <div className="flex flex-col md:items-start items-center lg:w-4/5 w-11/12 xl:py-16 lg:py-12 md:py-10 py-8 mx-auto">
          <HeadlineTag bg="bg-tp-black" text="white" title="Our Team" />

          <div className="xl:mt-16 lg:mt-12 md:mt-10 mt-8">
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-center text-2xl capitalize font-bold">
              Our Taxpire <span className="text-tp-blue">Experts</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-10 md:gap-x-8 gap-x-6 xl:gap-y-20 lg:gap-y-16 md:gap-y-12 gap-y-10 xl:mt-16 lg:mt-12 md:mt-10 mt-8">
            {team_array.map((item) => {
              return (
                <TeamCard
                  img={item.img}
                  name={item.name}
                  post={item.post}
                  linkedIn={item.linkedIn}
                  twitter={item.twitter}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
