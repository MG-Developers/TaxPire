import React, { useEffect, useState } from "react";
import Pricing from "../Sections/Pricing/Pricing";
import { useLocation } from "react-router-dom";

function ITRPricing() {
  const itr_pricing_details = [
    {
      category: "Salaried",
      plans: [
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
      ],
    },

    {
      category: "Professionals Freelancers",
      plans: [
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
      ],
    },

    {
      category: "Self-Employed Proprietor",
      plans: [
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
      ],
    },

    {
      category: "GST Annual Returns",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "2,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "GSTR 9 Filing",
              isAvailable: true,
            },

            {
              name: "Dedicated Expert",
              isAvailable: true,
            },

            {
              name: "Phone, Chat & Email Support",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "F&O CryptoTraders",
      plans: [
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

  return <Pricing activeKey={active} pricing_details={itr_pricing_details} />;
}

export default ITRPricing;
