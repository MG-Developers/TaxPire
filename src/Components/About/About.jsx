import React from "react";
import TeamCard from "../UI Components/Cards/TeamCard/TeamCard";

function About() {
  const benefits_array = [
    {
      icon: "dummy-value-img-1.svg",
      bgColor: "#fec901",
      title: "Innovation",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },

    {
      icon: "dummy-value-img-2.svg",
      bgColor: "#daadfd",
      title: "Deposit Funds​",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },

    {
      icon: "dummy-value-img-3.svg",
      bgColor: "#09cd3f",
      title: "Teamwork",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },

    {
      icon: "dummy-value-img-1.svg",
      bgColor: "#fec901",
      title: "Innovation",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },

    {
      icon: "dummy-value-img-2.svg",
      bgColor: "#daadfd",
      title: "Deposit Funds​",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },

    {
      icon: "dummy-value-img-3.svg",
      bgColor: "#09cd3f",
      title: "Teamwork",
      description:
        "MoneyCo team, driving us to create cutting-edge solutions and revolutionise the financial sector.",
    },
  ];

  const team_array = [
    {
      img: "dummy-team-img.jpg",
      name: "Alex Bailey",
      post: "Finance Agent",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
      twitter: "https://twitter.com/",
    },

    {
      img: "dummy-team-img-2.jpg",
      name: "Alex Tailor",
      post: "Manager",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
    },

    {
      img: "dummy-team-img-3.jpg",
      name: "Jamie Morgan",
      post: "Marketing Head",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
    },

    {
      img: "dummy-team-img-2.jpg",
      name: "Alex Bailey",
      post: "Finance Agent",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
    },

    {
      img: "dummy-team-img-3.jpg",
      name: "John Toe",
      post: "Finance Agent",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
    },

    {
      img: "dummy-team-img.jpg",
      name: "Jamie Morgan",
      post: "Finance Agent",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://linkedIn.com/",
      twitter: "https://twitter.com/",
    },
  ];

  return (
    <>
      <section className="text-tp-black">
        <div className="bg-white border-1 border-gray-200 shadow-lg shadow-gray-200 mx-4 rounded-3xl">
          <div className="mx-auto w-4/5 py-24">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div>
                <span className="bg-tp-black text-white shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium">
                  Get To Know Us!
                </span>

                <p className="text-6xl font-bold mt-10">About Us</p>
                <p className="mt-6 text-base font-normal">
                  MoneyCo, you receive access to a variety of tools, resources,
                  and professional advice to help you confidently understand and
                  manage your money.
                </p>
              </div>
              <div>
                <img src="images/dummy-about-img.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <img src="images/dummy-about-img-2.png" />
            </div>
            <div>
              <span className="bg-tp-black text-white shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium">
                Our Office
              </span>

              <p className="text-4xl font-bold mt-10">
                Connecting The Dots Of{" "}
                <span className="text-tp-blue leading-normal">Finance</span>
              </p>
              <p className="mt-4 text-lg font-light text-gray-500">
                Connecting the links properly will help you achieve financial
                success. Discover the crucial links and tactics that lead to
                financial success and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-tp-black">
        <div className="mx-auto w-4/5">
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="bg-tp-black text-white shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium">
                Our Vision
              </span>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center">
              <p className="text-5xl font-semibold">
                Convenient and easy
                <span className="text-tp-blue leading-normal"> personal </span>
                finances
              </p>
              <p className="text-center p-4 max-w-screen-lg text-lg font-light text-gray-500">
                Appreciate the greatest convenience of easily managing your own
                funds. Easily streamline your financial responsibilities &
                simple money management experience.
              </p>
            </div>

            <div className="mt-10">
              <img className="rounded-3xl" src="images/dummy-about-img-3.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tp-light-gray py-24">
        <div className="flex flex-col items-center mx-auto w-4/5">
          <div>
            <p className="text-base font-semibold border-1 px-8 py-4 border-tp-black rounded-full">
              Values
            </p>
          </div>

          <div className="mt-8">
            <p className="leading-tight text-4xl text-center font-bold max-w-lg">
              Every best decision in{" "}
              <span className="text-tp-blue">MoneyCo</span> team
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 mt-10">
            {benefits_array.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start p-10 rounded-3xl bg-white shadow-lg shadow-gray-100 hover:duration-500 hover:shadow-gray-300 hover:ease-in-out transition-all"
                >
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="flex items-center justify-center rounded-3xl mr-6 min-w-28 min-h-28"
                  >
                    <img className="w-16" src={`images/${item.icon}`} />
                  </div>

                  <div>
                    <p className="text-3xl font-bold">{item.title}</p>
                    <p className="mt-2 font-light text-lg text-tp-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 bg-white py-24 text-tp-black mb-20">
        <div className="mx-auto w-4/5">
          <div>
            <span className="bg-tp-black text-white shadow-xl text-base px-8 py-4 border-1 rounded-full border-tp-black font-medium">
              Our Team
            </span>
          </div>

          <div className="mt-12">
            <p className="text-4xl font-semibold">
              Our Taxpire <span className="text-tp-blue">Experts</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-40 mt-20">
            {team_array.map((item) => {
              return (
                <TeamCard
                  img={item.img}
                  name={item.name}
                  post={item.post}
                  facebook={item.facebook}
                  instagram={item.instagram}
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
