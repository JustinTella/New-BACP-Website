export const site = {
  name: "Blue Angel Clinical Partners",
  shortName: "Blue Angel",
  email: "info@blueangelclinical.com",
  tagline: "Empowering physicians, preserving autonomy.",
  nav: [
    { label: "About Us", to: "/about" },
    { label: "Why Us", to: "/why-us" },
    { label: "Benefits", to: "/benefits" },
    { label: "Succession Planning", to: "/succession" },
    { label: "Current Partners", to: "/partners" },
    { label: "Blog", to: "/blog" },
  ],
  cta: { label: "Join the Network", to: "/contact" },
};

/**
 * Homepage section summaries.
 * The homepage is a summary of every section of the site; each block below
 * previews one destination rather than duplicating its full content.
 */
export const homeSections = [
  {
    eyebrow: "About Us",
    title: "A partner built by physicians, for physicians",
    body:
      "Blue Angel provides the financial and operational backing independent physicians need to run a modern practice, without asking them to give up control of how they practise medicine.",
    to: "/about",
    linkLabel: "About Blue Angel",
  },
  {
    eyebrow: "Why Us",
    title: "Autonomy first, and the infrastructure to protect it",
    body:
      "Most groups buy a practice and absorb it. We take on the administrative weight and leave the clinical decisions, the patient relationships, and the name on the door exactly where they are.",
    to: "/why-us",
    linkLabel: "Why physicians choose us",
  },
  {
    eyebrow: "Benefits",
    title: "The back office of a large group, at your scale",
    body:
      "Billing, compliance, staffing, technology, and vendor contracts handled by a team that does this every day, so your time goes back to the exam room.",
    to: "/benefits",
    linkLabel: "See the benefits",
  },
  {
    eyebrow: "Succession Planning",
    title: "A next chapter that protects your legacy",
    body:
      "Whether retirement is one year out or ten, we help you realise the value you have built while making sure your patients and staff are cared for after the transition.",
    to: "/succession",
    linkLabel: "Plan your succession",
  },
  {
    eyebrow: "Current Partners",
    title: "The physicians already in the network",
    body:
      "Independent practices that chose partnership over acquisition, and kept their independence in the process.",
    to: "/partners",
    linkLabel: "Meet our partners",
  },
  {
    eyebrow: "Blog",
    title: "Notes from the practice",
    body:
      "Perspective on independent medicine, practice economics, and what is actually changing in the market for physician-owned practices.",
    to: "/blog",
    linkLabel: "Read the blog",
  },
];

/**
 * "Why Us" pillars. Rendered as three distinct colour cut-outs following a
 * summary, per the website direction deck.
 */
export const whyUsPillars = [
  {
    number: "01",
    title: "You keep clinical autonomy",
    body:
      "No corporate protocols, no quotas, no outside party deciding how long an appointment should take. Clinical judgement stays with the physician who earned it.",
    points: [
      "You set your own standard of care",
      "You keep your panel and your schedule",
      "Your name and brand stay on the practice",
    ],
    tone: "navy",
  },
  {
    number: "02",
    title: "We carry the administrative load",
    body:
      "The work that pulls physicians away from patients — billing, credentialing, compliance, HR, vendor management, technology — moves to a team that specialises in it.",
    points: [
      "Revenue cycle and billing handled end to end",
      "Compliance and credentialing kept current",
      "Staffing, payroll, and benefits administration",
    ],
    tone: "teal",
  },
  {
    number: "03",
    title: "You share in what you build",
    body:
      "Partnership means real economic alignment. You participate in the growth of the practice you spent a career building, and you have a defined path to your next chapter.",
    points: [
      "Equity participation, not a salaried exit",
      "Transparent economics with no hidden spread",
      "A succession plan that protects your patients",
    ],
    tone: "gold",
  },
];

/**
 * Comparison of the three realistic paths available to an independent
 * physician. Joseph's note: what a DSO is in dentistry, an MSO is for us.
 */
export const comparison = {
  columns: ["Stay fully independent", "Blue Angel (MSO)", "Sell to a large group"],
  rows: [
    { label: "Clinical autonomy", values: ["Full", "Full", "Limited by group protocol"] },
    { label: "Ownership in the practice", values: ["Full", "Retained, with partnership equity", "Surrendered at close"] },
    { label: "Administrative burden", values: ["Entirely yours", "Handled by Blue Angel", "Handled, with less say"] },
    { label: "Back-office infrastructure", values: ["Built and funded alone", "Shared across the network", "Corporate systems, imposed"] },
    { label: "Access to capital", values: ["Personal or bank debt", "Network capital", "Corporate balance sheet"] },
    { label: "Practice brand and name", values: ["Yours", "Yours", "Usually replaced"] },
    { label: "Succession path", values: ["Must be arranged alone", "Planned in advance with you", "Determined by the acquirer"] },
    { label: "Patient relationships", values: ["Yours", "Yours", "Transferred to the group"] },
  ],
  highlightIndex: 1,
};

export type NavItem = (typeof site.nav)[number];
