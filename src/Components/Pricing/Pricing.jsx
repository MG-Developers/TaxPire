import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Hero from "../UI Components/Hero/Hero";
import PricingCard from "../UI Components/Cards/PricingCard/PricingCard";

function Pricing() {
  const itr_salaried_pricing_details = [
    {
      type: "Silver",
      name: "Silver Plan",
      price: "999",
      title: "Covers total income upto 10 Lacs",
      features: [
        {
          name: "Salary Income",
          isAvailable: true,
        },

        {
          name: "Interest Income",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: false,
        },

        {
          name: "Capital Gain",
          isAvailable: false,
        },
      ],
    },

    {
      type: "Silver",
      name: "Silver Plus Plan",
      tag: "Popular",
      price: "1,499",
      title: "Covers total income upto 10 Lacs",
      features: [
        {
          name: "Salary Income",
          isAvailable: true,
        },

        {
          name: "Interest Income",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },

    {
      type: "Gold",
      name: "Gold Plan",
      price: "1,999",
      title: "Covers total income upto 25 Lacs",
      features: [
        {
          name: "Salary Income",
          isAvailable: true,
        },

        {
          name: "Interest Income",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },

    {
      type: "Diamond",
      name: "Diamond Plan",
      price: "2,999",
      title: "Covers total income upto 50 Lacs",
      features: [
        {
          name: "Salary Income",
          isAvailable: true,
        },

        {
          name: "Interest Income",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },

    {
      type: "Diamond",
      name: "Diamond Plus Plan",
      price: "3,999",
      title: "Income more than 50 Lacs",
      features: [
        {
          name: "Salary Income",
          isAvailable: true,
        },

        {
          name: "Interest Income",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },
  ];

  const itr_professionals_pricing_details = [
    {
      type: "Silver",
      name: "Silver Plan",
      price: "3,999",
      title: "Covers Presumptive Taxation",
      features: [
        {
          name: "Gross receipts under Rs. 50 lakh",
          isAvailable: true,
        },

        {
          name: "Declared income at 50% or above",
          isAvailable: true,
        },

        {
          name: "Interest and Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: false,
        },
      ],
    },

    {
      type: "Gold",
      name: "Gold Plan",
      tag: "Popular",
      price: "4,999",
      title: "Covers Presumptive Taxation",
      features: [
        {
          name: "Gross receipts under Rs. 50 lakh",
          isAvailable: true,
        },

        {
          name: "Declared income at 50% or above",
          isAvailable: true,
        },

        {
          name: "Interest and Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },
  ];

  const itr_selfEmployed_pricing_details = [
    {
      type: "Silver",
      name: "Silver Plan",
      price: "3,999",
      title: "Covers Businesses with presumptive Taxation",
      features: [
        {
          name: "Annual turnover under Rs. 2Cr ",
          isAvailable: true,
        },

        {
          name: "Declared Annual income above 8%",
          isAvailable: true,
        },

        {
          name: "Interest and Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: false,
        },
      ],
    },

    {
      type: "Gold",
      name: "Gold Plan",
      tag: "Popular",
      price: "4,999",
      title: "Covers Businesses with presumptive Taxation",
      features: [
        {
          name: "Annual turnover under Rs. 2Cr ",
          isAvailable: true,
        },

        {
          name: "Declared Annual income above 8%",
          isAvailable: true,
        },

        {
          name: "Interest and Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "Capital Gain",
          isAvailable: true,
        },
      ],
    },
  ];

  const itr_traders_pricing_details = [
    {
      type: "Silver",
      name: "Silver Plan",
      price: "3,999",
      tag: "Popular",
      // title: "Covers trading income upto 10 Lacs",
      features: [
        {
          name: "F&O trading",
          isAvailable: true,
        },

        {
          name: "Crypto Trading",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: false,
        },

        {
          name: "No Audit",
          isAvailable: false,
        },
      ],
    },

    {
      type: "Gold",
      name: "Gold Plan",
      price: "4,999",
      // title: "Covers total income upto 10 Lacs",
      features: [
        {
          name: "F&O trading",
          isAvailable: true,
        },

        {
          name: "Crypto Trading",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "No Audit",
          isAvailable: false,
        },
      ],
    },

    {
      type: "Diamond",
      name: "Diamond Plan",
      price: "14,999",
      // title: "Covers total income upto 10 Lacs",
      features: [
        {
          name: "F&O trading",
          isAvailable: true,
        },

        {
          name: "Crypto Trading",
          isAvailable: true,
        },

        {
          name: "Dividend Income",
          isAvailable: true,
        },

        {
          name: "Rental Income",
          isAvailable: true,
        },

        {
          name: "No Audit",
          isAvailable: true,
        },
      ],
    },
  ];

  return (
    <>
      <Hero />
      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto w-4/5">
          <Tabs
            aria-label="Options"
            fullWidth
            classNames={{
              tabList: "bg-white border-gray-300 rounded-2xl border-2 p-2",
              cursor: "bg-tp-sky-blue rounded-2xl",
              tabContent: "group-data-[selected=true]:text-white font-medium",
            }}
          >
            <Tab key="Salaried" title="Salaried">
              <div className="grid grid-cols-3 gap-10 mt-6">
                {itr_salaried_pricing_details.map((item, index) => {
                  return <PricingCard key={index} details={item} />;
                })}
              </div>
            </Tab>

            <Tab
              key="Professionals/Freelancers"
              title="Professionals/Freelancers"
            >
              <div className="grid grid-flow-col auto-cols-max gap-10 mt-6 justify-center">
                {itr_professionals_pricing_details.map((item, index) => {
                  return <PricingCard key={index} details={item} />;
                })}
              </div>
            </Tab>

            <Tab
              key="Self-Employed/Proprietor"
              title="Self-Employed/Proprietor"
            >
              <div className="grid grid-flow-col auto-cols-max gap-10 mt-6 justify-center">
                {itr_selfEmployed_pricing_details.map((item, index) => {
                  return <PricingCard key={index} details={item} />;
                })}
              </div>
            </Tab>

            <Tab key="F&O/Crypto Traders" title="F&O/Crypto Traders">
              <div className="grid grid-cols-3 auto-cols-max gap-10 mt-6 justify-center">
                {itr_traders_pricing_details.map((item, index) => {
                  return <PricingCard key={index} details={item} />;
                })}
              </div>
            </Tab>

            <Tab key="NRI" title="NRI">
              <Card>
                <CardBody>Crypto</CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Pricing;
