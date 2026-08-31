export const navConfig = {
  items: [
    { id: "home", label: "Home", href: "/", hasDropdown: false },
    {
      id: "products",
      label: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownData: {
        title: "Healthcare Products & Solutions",
        subtitle: "Explore our enterprise HIMS, Ophthalmic EMR, and AI platforms.",
        groups: [
          {
            id: "hwai",
            title: "HWAI",
            badge: "Healthcare Management",
            link: "/products/hwai",
            icon: "Sparkles",
            highlights: [
              "Enterprise Multispecialty",
              "NABH and NABL compliant model",
              "ABDM and NHA Integration",
            ],
          },
          {
            id: "e-drishti",
            title: "e_Drishti",
            badge: "Eye Care Specialized",
            link: "/products/e-drishti",
            icon: "Eye",
            highlights: [
              "Enterprise Eye Hospital",
              "Registration to Inventory Management",
              "Comprehensive Eye EMR",
            ],
          },
          {
            id: "lite-products",
            title: "Lite Products",
            badge: "Modular & Clinic",
            isGroup: true,
            icon: "Layers",
            items: [
              {
                title: "e_Kshitiz Lite",
                description: "Workforce & Mid-sized HIMS",
                link: "/products/e-kshitiz-lite",
              },
              {
                title: "e_Drishti Lite",
                description: "Eye Clinic & Optical POS",
                link: "/products/e-drishti-lite",
              },
            ],
          },
          {
            id: "e-kshitiz",
            title: "e_Kshitiz",
            badge: "Workforce / SMB",
            link: "/products/e-kshitiz",
            icon: "Building2",
            highlights: [
              "Workforce / SMB Healthcare",
              "IPD/OPD & Bed Management",
              "Pharmacy, Lab & Billing",
            ],
          },
        ],
        categories: [
          { title: "HWAI", description: "Healthcare Analytics & AI Platform", icon: "Sparkles", link: "/products/hwai" },
          { title: "e_Drishti", description: "Super-Specialty Ophthalmology HIMS", icon: "Eye", link: "/products/e-drishti" },
          { title: "e_Drishti Lite", description: "Ophthalmology Clinic Management", icon: "Eye", link: "/products/e-drishti-lite" },
          { title: "e_Kshitiz", description: "Enterprise Hospital Information System", icon: "Building2", link: "/products/e-kshitiz" },
          { title: "e_Kshitiz Lite", description: "Modular HIMS for Mid-Sized Hospitals", icon: "Building2", link: "/products/e-kshitiz-lite" },
        ],
      },
    },
    { id: "solutions", label: "Solutions", href: "/solutions", hasDropdown: false },
    { id: "integrations", label: "Integrations", href: "/integrations", hasDropdown: false },
    { id: "about", label: "About", href: "/about", hasDropdown: false },
    { id: "contact", label: "Contact", href: "/contact", hasDropdown: false },
  ],
};

export default navConfig;


