import React, { useEffect, useState } from "react";
import Pricing from "../Sections/Pricing/Pricing";
import { useLocation } from "react-router-dom";

function GSTPricing() {
  const gst_pricing_details = [
    {
      category: "GST Registration",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "1,499",
          //   title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "GST Registration Certificate",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "GST Cancellation",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "2,499",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Expert Assisted GST Cancellation Filing",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "GST Returns",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Upto 25 Monthly Sales Invoices",
              isAvailable: true,
            },

            {
              name: "GSTR-1 Filing",
              isAvailable: true,
            },

            {
              name: "GSTR-3B Filing",
              isAvailable: true,
            },

            {
              name: "Dedicated GST Expert",
              isAvailable: true,
            },

            {
              name: "Input Tax credit Reconciliation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },

            {
              name: "GST Payment Support",
              isAvailable: true,
            },

            {
              name: "Data Compilation",
              isAvailable: true,
            },

            {
              name: "Data Modeling in Excel",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Gold",
          name: "Gold Plan",
          price: "1,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Upto 50 Monthly Sale Invoices",
              isAvailable: true,
            },

            {
              name: "GSTR-1 Filing",
              isAvailable: true,
            },

            {
              name: "GSTR-3B Filing",
              isAvailable: true,
            },

            {
              name: "Dedicated GST Expert",
              isAvailable: true,
            },

            {
              name: "Input Tax credit Reconciliation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },

            {
              name: "GST Payment Support",
              isAvailable: true,
            },

            {
              name: "Data Compilation",
              isAvailable: true,
            },

            {
              name: "Data Modeling in Excel",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Diamond",
          name: "Diamond Plan",
          price: "2,499",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "upto 100 Monthly Sale Invoices,",
              isAvailable: true,
            },

            {
              name: "GSTR-1 Filing",
              isAvailable: true,
            },

            {
              name: "GSTR-3B Filing",
              isAvailable: true,
            },

            {
              name: "Dedicated GST Expert",
              isAvailable: true,
            },

            {
              name: "Input Tax credit Reconciliation",
              isAvailable: true,
            },

            {
              name: "Phone, Whatsapp & Email Support",
              isAvailable: true,
            },

            {
              name: "Data Compilation",
              isAvailable: true,
            },

            {
              name: "Data Modeling in Excel",
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
      category: "GST LUT Filing",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "2,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "GST LUT Filing",
              isAvailable: true,
            },

            {
              name: "Same Day Filing",
              isAvailable: true,
            },

            {
              name: "Dedicated Expert",
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

  return <Pricing activeKey={active} pricing_details={gst_pricing_details} />;
}

export default GSTPricing;
