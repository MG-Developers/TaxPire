import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@nextui-org/react";
import Hero from "../../UI Components/Hero/Hero";
import PricingCard from "../../UI Components/Cards/PricingCard/PricingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./index.css";

function Pricing(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyChange = (key) => {
    const newPathname = `${location.pathname
      .split("/")
      .slice(0, -1)
      .join("/")}/${key}`;
    navigate(newPathname);
  };

  return (
    <>
      <Hero />
      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto lg:w-4/5 w-11/12">
          <Tabs
            aria-label="Options"
            fullWidth
            selectedKey={props.activeKey}
            onSelectionChange={(e) => handleKeyChange(e)}
            classNames={{
              tabList: "bg-white border-gray-300 rounded-2xl border-2 p-2",
              cursor: "bg-tp-sky-blue rounded-2xl",
              tabContent: "group-data-[selected=true]:text-white font-medium",
            }}
          >
            {props.pricing_details.map((item) => {
              return (
                <Tab
                  key={item.category.toLowerCase().replace(/\s+/g, "-")}
                  title={item.category}
                >
                  <Swiper
                    slidesPerView={3.25}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1.25,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2.25,
                        spaceBetween: 40,
                      },

                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    spaceBetween={40}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {item.plans.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <PricingCard key={index} details={item} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Pricing;
