export const site = {
  name: "Blue Angel Clinical Partners",
  shortName: "Blue Angel",
  email: "info@blueangelclinical.com",
  tagline: "Empowering physicians, preserving autonomy.",
  nav: [
    { label: "About", to: "/about" },
    { label: "Benefits", to: "/benefits" },
    { label: "Succession Planning", to: "/succession" },
    { label: "Joining a Practice", to: "/joining" },
    { label: "Partners", to: "/partners" },
    { label: "Blog", to: "/blog" },
  ],
  cta: { label: "Contact Us", to: "/contact" },
};

export type NavItem = (typeof site.nav)[number];
