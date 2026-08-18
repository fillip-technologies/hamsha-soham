export const navConfig = {
  items: [
    { id: "home", label: "Home", href: "/", hasDropdown: false },
    {
      id: "products",
      label: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownData: {
        title: "Healthcare Products & Platforms",
        subtitle: "Explore our flagship HIMS and AI products.",
        categories: [
          { title: "e_Drishti", description: "Super-Specialty Ophthalmology HIMS", icon: "Eye", link: "/products/e-drishti" },
          { title: "e_Drishti Lite", description: "Ophthalmology Clinic Management", icon: "Eye", link: "/products/e-drishti-lite" },
          { title: "e_Kshitiz", description: "Enterprise Hospital Information System", icon: "Building2", link: "/products/e-kshitiz" },
          { title: "e_Kshitiz Lite", description: "Modular HIMS for Mid-Sized Hospitals", icon: "Building2", link: "/products/e-kshitiz-lite" },
          { title: "HWAI", description: "Healthcare Analytics & AI Platform", icon: "Sparkles", link: "/products/hwai" },
        ],
      },
    },
    { id: "solutions", label: "Solutions", href: "/solutions", hasDropdown: false },
    { id: "about", label: "About", href: "/about", hasDropdown: false },
    { id: "contact", label: "Contact", href: "/contact", hasDropdown: false },
  ],
};

export default navConfig;
