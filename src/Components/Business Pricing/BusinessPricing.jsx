import React, { useEffect, useState } from "react";
import Pricing from "../Sections/Pricing/Pricing";
import { useLocation } from "react-router-dom";

function BusinessPricing() {
  const business_pricing_details = [
    {
      category: "Private Limited Company",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "10,999",
          //   title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Preparation of MOA & AOA",
              isAvailable: true,
            },

            {
              name: "Drafting of all legal documents",
              isAvailable: true,
            },

            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "PAN Number allotment",
              isAvailable: true,
            },

            {
              name: "TAN Number allotment",
              isAvailable: true,
            },

            {
              name: "Payment of Govt Stamp Duty",
              isAvailable: true,
            },

            {
              name: "2 DIN allotment",
              isAvailable: true,
            },

            {
              name: "2 Digital Signature Certificates",
              isAvailable: true,
            },

            {
              name: "Company Registration Certificate",
              isAvailable: true,
            },

            {
              name: "PF & ESI Registration",
              isAvailable: true,
            },

            {
              name: "Authorised Capital upto 1 Lacs",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Gold",
          name: "Gold Plan",
          price: "14,999",
          //   title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "All Services of Silver Plan, plus",
              isAvailable: true,
            },

            {
              name: "INC-20A (Commencement of Business)",
              isAvailable: true,
            },

            {
              name: "Appointment of Auditor (ADT-1)",
              isAvailable: true,
            },

            {
              name: "1st Board Resolution Drafting",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Diamond",
          name: "Diamond Plan",
          price: "24,999",
          //   title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "All Services of Gold Plan, plus",
              isAvailable: true,
            },

            {
              name: "1st Year Annual Compliances",
              isAvailable: true,
            },

            {
              name: "GST Filing for 1 Year",
              isAvailable: true,
            },

            {
              name: "TDS Filing for 1 Year",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "Public Limited Company",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "19,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Preparation of MOA & AOA",
              isAvailable: true,
            },

            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "PAN & TAN Allotment",
              isAvailable: true,
            },

            {
              name: "3 DIN Allotment",
              isAvailable: true,
            },

            {
              name: "3 Digital Signature Certificate",
              isAvailable: true,
            },

            {
              name: "Company Registration Certificate",
              isAvailable: true,
            },

            {
              name: "Drafting of all legal documents",
              isAvailable: true,
            },

            {
              name: "PF & ESI Registration",
              isAvailable: true,
            },

            {
              name: "Authorised Capital of Rs. 5 Lacs",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Gold",
          name: "Gold Plan",
          price: "24,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Preparation of MOA & AOA",
              isAvailable: true,
            },

            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "PAN & TAN Allotment",
              isAvailable: true,
            },

            {
              name: "3 DIN Allotment",
              isAvailable: true,
            },

            {
              name: "3 Digital Signature Certificate",
              isAvailable: true,
            },

            {
              name: "Company Registration Certificate",
              isAvailable: true,
            },

            {
              name: "Drafting of all legal documents",
              isAvailable: true,
            },

            {
              name: "PF & ESI Registration",
              isAvailable: true,
            },

            {
              name: "Authorised Capital of Rs. 5 Lacs",
              isAvailable: true,
            },

            {
              name: "INC-20A (Commencement of business)",
              isAvailable: true,
            },

            {
              name: "Appointment of Auditor (ADT-1)",
              isAvailable: true,
            },

            {
              name: "1st Board Resolution Drafting",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Diamond",
          name: "Diamond Plan",
          price: "39,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Preparation of MOA & AOA",
              isAvailable: true,
            },

            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "PAN & TAN Allotment",
              isAvailable: true,
            },

            {
              name: "3 DIN Allotment",
              isAvailable: true,
            },

            {
              name: "3 Digital Signature Certificate",
              isAvailable: true,
            },

            {
              name: "Company Registration Certificate",
              isAvailable: true,
            },

            {
              name: "Drafting of all legal documents",
              isAvailable: true,
            },

            {
              name: "PF & ESI Registration",
              isAvailable: true,
            },

            {
              name: "Authorised Capital of Rs. 5 Lacs",
              isAvailable: true,
            },

            {
              name: "1st Year Annual Compliances",
              isAvailable: true,
            },

            {
              name: "GST Filing for 1 year",
              isAvailable: true,
            },

            {
              name: "TDS Filing for 1 year",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "Limited Liability Partnership (LLP)",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "7,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "Preparation of Partnership Deed",
              isAvailable: true,
            },

            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "PAN & TAN Allotment",
              isAvailable: true,
            },

            {
              name: "2 DIN Allotment",
              isAvailable: true,
            },

            {
              name: "2 Digital Signature Certificate",
              isAvailable: true,
            },

            {
              name: "LLP Registration Certificate",
              isAvailable: true,
            },

            {
              name: "Drafting of all legal documents",
              isAvailable: true,
            },

            {
              name: "Filing of Partnership Deed",
              isAvailable: true,
            },

            {
              name: "Partner Contribution of upto Rs. 1 Lac",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Gold",
          name: "Gold Plan",
          price: "10,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "All Services of Silver Plan, plus",
              isAvailable: true,
            },

            {
              name: "1st Year Annual Compliances",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Diamond",
          name: "Diamond Plan",
          price: "19,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "All Services of Gold Plan, plus",
              isAvailable: true,
            },

            {
              name: "GST Filing for 1 year",
              isAvailable: true,
            },

            {
              name: "TDS filing for 1 year",
              isAvailable: true,
            },
          ],
        },
      ],
    },

    {
      category: "Proprietorship",
      plans: [
        {
          type: "Silver",
          name: "Silver Plan",
          price: "2,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "Udyam Registration",
              isAvailable: true,
            },

            {
              name: "GST return filing for 3 months",
              isAvailable: true,
            },
          ],
        },

        {
          type: "Gold",
          name: "Gold Plan",
          price: "7,999",
          title: "Covers total income upto 10 Lacs",
          features: [
            {
              name: "GST Registration",
              isAvailable: true,
            },

            {
              name: "Udyam Registration",
              isAvailable: true,
            },

            {
              name: "GST return filing for 1 year",
              isAvailable: true,
            },

            {
              name: "Upto 25 invoices monthly",
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

  return (
    <Pricing activeKey={active} pricing_details={business_pricing_details} />
  );
}

export default BusinessPricing;
