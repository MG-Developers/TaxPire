import React, { useEffect, useState } from "react";
import Pricing from "../Sections/Pricing/Pricing";
import { useLocation } from "react-router-dom";

function TDSPricing() {
  const tds_pricing_details = [
    {
      category: "TDS on Salary Payments",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "7,999",
          //   title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "TDS on Salary payments",
              isAvailable: true,
            },

            {
              name: "TDS payment due date reminder",
              isAvailable: true,
            },

            {
              name: "Form 24Q filing",
              isAvailable: true,
            },

            {
              name: "Data Preparation",
              isAvailable: true,
            },

            {
              name: "FUV file generation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "TDS on Other Payments",
      plans: [
        {
          type: "Gold",
          name: "Gold Plan",
          price: "9,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "TDS on other payments",
              isAvailable: true,
            },

            {
              name: "TDS payment due date reminder",
              isAvailable: true,
            },

            {
              name: "Form 26Q filing",
              isAvailable: true,
            },

            {
              name: "Data Preparation",
              isAvailable: true,
            },

            {
              name: "FUV file generation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "TDS on Salary & Other Payments",
      plans: [
        {
          type: "Gold",
          name: "Gold Plan",
          price: "14,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "TDS on all payments",
              isAvailable: true,
            },

            {
              name: "TDS payment due date reminder",
              isAvailable: true,
            },

            {
              name: "Form 24Q & 26Q filing",
              isAvailable: true,
            },

            {
              name: "Data Preparation",
              isAvailable: true,
            },

            {
              name: "FUV file generation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },
          ],
        },
      ],
    },
  ];

  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const pathname = location.pathname;
    const segments = pathname.split("/");
    const acitvePath = segments[segments.length - 1];
    setActive(acitvePath);
  }, [location.pathname]);

  return <Pricing activeKey={active} pricing_details={tds_pricing_details} />;
}

export default TDSPricing;
