import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Hero from "../UI Components/Hero/Hero";
import PricingCard from "../UI Components/Cards/PricingCard/PricingCard";

function Pricing() {
  return (
    <>
      <Hero />
      <section className="bg-white py-24 text-tp-black">
        <div className="mx-auto w-4/5">
          <Tabs aria-label="Options" fullWidth>
            <Tab key="Salaried" title="Salaried">
              <div className="grid grid-cols-3 gap-10 mt-6">
                <PricingCard />
                <PricingCard />
                <PricingCard />
              </div>
            </Tab>

            <Tab
              key="Self Employed/Freelancers"
              title="Self Employed/Freelancers"
            >
              <Card>
                <CardBody>Self</CardBody>
              </Card>
            </Tab>

            <Tab key="NRI" title="NRI">
              <Card>
                <CardBody>NRI</CardBody>
              </Card>
            </Tab>

            <Tab key="F&O Traders" title="F&O Traders">
              <Card>
                <CardBody>F&O Traders</CardBody>
              </Card>
            </Tab>

            <Tab key="Crypto Traders" title="Crypto Traders">
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
