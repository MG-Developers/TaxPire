export const linksData = [
  {
    name: "File Taxes",
    subMenus: [
      {
        name: "ITR",
        icon: "tax-icon.svg",
        description: "File ITR with expert assistance",
        link: "/itrpricing/salaried",
      },

      {
        name: "GST",
        icon: "gst-icon.svg",
        description: "Error free GST filing",
        link: "/gstpricing/gstregistration",
      },

      {
        name: "TDS",
        icon: "tds-icon.svg",
        description: "e-TDS filing for businesses",
        link: "/tdspricing/tds-on-salary-payments",
      },
    ],
  },

  {
    name: "Business Setup",
    subMenus: [
      {
        name: "Business Registration",
        icon: "business-icon.svg",
        description: "Register your dream startup",
        superSubMenu: [
          {
            name: "Private Limited Company",
            link: "businesspricing/private-limited-company",
          },

          {
            name: "Public Limited Company",
            link: "businesspricing/public-limited-company",
          },

          {
            name: "Limited Liability Partnership",
            link: "businesspricing/limited-liability-partnership-(llp)",
          },

          {
            name: "One Person Company",
            link: "#",
          },

          {
            name: "Sole Proprietorship",
            link: "businesspricing/proprietorship",
          },

          {
            name: "Section 8 Company",
            link: "#",
          },

          {
            name: "Partnership Firm",
            link: "#",
          },
        ],
      },

      {
        name: "Licenses and Registration",
        icon: "license-icon.svg",
        description: "Get necessary licenses online",
        link: "/businesspricing/private-limited-company",
        superSubMenu: [
          {
            name: "Digital Signature Certificate",
            link: "#",
          },

          {
            name: "Udyam Registration",
            link: "#",
          },

          {
            name: "MSME Registration",
            link: "#",
          },

          {
            name: "Trademark Registration",
            link: "#",
          },
        ],
      },

      {
        name: "International Business Setup",
        icon: "international-icon.svg",
        description: "Setup your business abroad",
        link: "/businesspricing/private-limited-company",
        superSubMenu: [
          {
            name: "UAE Company Incorporation",
            link: "#",
          },
        ],
      },

      {
        name: "Web Development",
        icon: "web-icon.svg",
        description: "Web solutions for your business",
        link: "/businesspricing/private-limited-company",
        superSubMenu: [
          {
            name: "Web/E-Commerce Website Development",
            link: "#",
          },
        ],
      },
    ],
  },

  {
    name: "Company",
    subMenus: [
      {
        name: "About Us",
        icon: "about-icon.svg",
        description: "Learn how we’re different and meet our team",
        link: "/about",
      },

      {
        name: "Carrers",
        icon: "carrer-icon.svg",
        description: "We’re hiring! Come join our growing team",
        link: "https://recruit.finpire.in",
      },

      {
        name: "Partner With Us",
        icon: "partner-icon.svg",
        description: "Maximize your revenue and client value",
        link: "https://recruit.finpire.in",
      },
    ],
  },

  {
    name: "Resources",
    subMenus: [
      {
        name: "Blogs",
        icon: "blogs-icon.svg",
        description: "Read latest news, customer success stories",
        link: "/blogs",
      },

      {
        name: "Support",
        icon: "support-icon.svg",
        description: "Raise a query",
        link: "/support",
      },

      {
        name: "Knowledge Center",
        icon: "knowledge-icon.svg",
        description: "Enhance your knowledge with us",
        link: "https://support.taxpire.in/portal/en/kb",
      },
    ],
  },
];
