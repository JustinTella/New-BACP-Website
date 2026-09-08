/**
 * Single source of truth for Blue Angel site copy.
 *
 * Wording is carried over from the live blueangelclinical.com wherever the
 * live site has an equivalent section, so this rebuild reads as the same
 * company rather than a paraphrase of it.
 */

export const site = {
  name: 'Blue Angel Clinical Partners',
  shortName: 'Blue Angel',
  legalName: 'Blue Angel Clinical Partners LLC',
  email: 'info@blueangelclinical.com',
  tagline: 'Empowering physicians, preserving autonomy.',
};

export const navLinks = [
  { path: '/about', label: 'About Blue Angel' },
  { path: '/services', label: 'Services' },
  {
    path: '/resources',
    label: 'Resources',
    children: [
      { path: '/resources/succession-planning', label: 'Succession Planning' },
      { path: '/resources/joining-a-practice', label: 'Joining a Practice' },
      { path: '/resources/careers', label: 'Careers' },
    ],
  },
  { path: '/blog', label: 'Blog' },
];

export const ctaLink = { path: '/be-a-partner', label: 'Be a Partner' };

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceItem = { title: string; body: string };

export const clinicalServices: ServiceItem[] = [
  {
    title: 'Cross-Coverage',
    body: 'Reliable coverage from a trusted network of concierge physicians, so your patients are cared for when you are away.',
  },
  {
    title: 'Ancillary Services',
    body: 'Expand what your practice can offer with supported ancillary services that add real value for patients.',
  },
  {
    title: 'Shared Specialist Networks',
    body: 'Tap into a shared specialist network for seamless referrals and properly coordinated care.',
  },
  {
    title: 'Physician Community',
    body: 'Join a community of like-minded concierge physicians who share your philosophy of relationship-based medicine.',
  },
  {
    title: 'Access to Specialty Education',
    body: 'Continuing education and specialty learning that keeps your practice at the leading edge.',
  },
];

export const administrativeServices: ServiceItem[] = [
  {
    title: 'Accounting, Payroll & Benefits',
    body: 'The whole back office — bookkeeping, payroll runs, and benefits administration — handled by a team that does it every day.',
  },
  {
    title: 'Insurance Coverage',
    body: 'Malpractice and business coverage sourced, renewed, and administered on your behalf.',
  },
  {
    title: 'Recruiting & Hiring',
    body: 'We recruit, screen, and hire the clinical and front-office staff your practice needs to run well.',
  },
  {
    title: 'Vendor Management',
    body: 'Contracts, renewals, and vendor relationships managed centrally, at network pricing rather than single-practice pricing.',
  },
  {
    title: 'Operations & Marketing',
    body: 'Day-to-day operations, patient communications, and marketing support to keep the practice growing.',
  },
];

/* ------------------------------------------------------------------ */
/* Comparison chart                                                    */
/* ------------------------------------------------------------------ */

export const comparisonColumns = [
  'Blue Angel',
  'Health system or PE roll-up',
  'Solo ownership',
] as const;

export type ComparisonRow = {
  label: string;
  values: [boolean, boolean, boolean];
  to: string;
  linkLabel: string;
};

/**
 * A summary of everything the site offers, row by row. Each row links to the
 * page that explains it, so the table doubles as a map of the site.
 */
export const comparisonRows: ComparisonRow[] = [
  {
    label: 'Freedom to make all clinical and business decisions',
    values: [true, false, true],
    to: '/about',
    linkLabel: 'About Blue Angel',
  },
  {
    label: 'Your name, your brand, and your patient relationships stay yours',
    values: [true, false, true],
    to: '/about',
    linkLabel: 'About Blue Angel',
  },
  {
    label: 'Centralized administrative support — accounting, payroll, benefits',
    values: [true, true, false],
    to: '/services',
    linkLabel: 'Administrative services',
  },
  {
    label: 'Recruiting, hiring, and vendor management handled for you',
    values: [true, true, false],
    to: '/services',
    linkLabel: 'Administrative services',
  },
  {
    label: 'Cross-coverage and shared specialist networks',
    values: [true, true, false],
    to: '/services',
    linkLabel: 'Clinical services',
  },
  {
    label: 'Physician community, mentorship, and specialty education',
    values: [true, false, false],
    to: '/services',
    linkLabel: 'Clinical services',
  },
  {
    label: 'Upfront liquidity for the practice you built',
    values: [true, true, false],
    to: '/resources/succession-planning',
    linkLabel: 'Succession planning',
  },
  {
    label: 'A succession plan that keeps your practice open after you leave',
    values: [true, false, false],
    to: '/resources/succession-planning',
    linkLabel: 'Succession planning',
  },
  {
    label: 'A supported path into ownership for early-career physicians',
    values: [true, false, false],
    to: '/resources/joining-a-practice',
    linkLabel: 'Joining a practice',
  },
  {
    label: 'Equity that grows with the practice, not a salaried exit',
    values: [true, false, true],
    to: '/resources/joining-a-practice',
    linkLabel: 'Joining a practice',
  },
];

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

import partnerDaniher from '@/assets/bacp/partner-daniher.jpg';
import partnerSujansky from '@/assets/bacp/partner-sujansky.jpg';

export const partners = [
  {
    name: 'Dr. Amy Daniher',
    credential: 'MD',
    practice: 'Amy Daniher MD',
    location: 'San Mateo, CA',
    href: 'https://www.amydanihermd.com/',
    image: partnerDaniher,
    alt: 'Dr. Amy Daniher attending to a patient',
  },
  {
    name: 'Dr. Rika Sujansky',
    credential: 'MD',
    practice: 'Ulrike Sujansky MD',
    location: 'San Mateo, CA',
    href: 'https://www.sujanskymd.com/',
    image: partnerSujansky,
    alt: 'Dr. Rika Sujansky in consultation with a patient',
  },
];

/* ------------------------------------------------------------------ */
/* Investors and founder background                                    */
/* ------------------------------------------------------------------ */

import invAnovia from '@/assets/bacp/inv-anovia-health.png';
import invMetroVein from '@/assets/bacp/inv-metro-vein-centers.jpg';
import invHarleyStreet from '@/assets/bacp/inv-harley-street-medical.jpg';
import invHealthBridge from '@/assets/bacp/inv-healthbridge.png';
import invCliffRidge from '@/assets/bacp/inv-cliff-ridge.png';
import invFacialAesthetics from '@/assets/bacp/inv-facial-aesthetics.png';
import invVitana from '@/assets/bacp/inv-vitana.png';
import invSkinCenter from '@/assets/bacp/inv-the-skin-center.png';
import invAdditional from '@/assets/bacp/inv-additional-partner.png';

export const investorLogos = [
  { name: 'Anovia Health', src: invAnovia },
  { name: 'Metro Vein Centers', src: invMetroVein },
  { name: 'Harley Street Medical', src: invHarleyStreet },
  { name: 'HealthBridge', src: invHealthBridge },
  { name: 'Cliff Ridge Specialty Partners', src: invCliffRidge },
  { name: 'Facial Aesthetics', src: invFacialAesthetics },
  { name: 'Vitana', src: invVitana },
  { name: 'The Skin Center', src: invSkinCenter },
  { name: 'Additional partner', src: invAdditional },
];

import expGlowbar from '@/assets/bacp/exp-glowbar.png';
import expMonogram from '@/assets/bacp/exp-monogram-capital.png';
import expGuggenheim from '@/assets/bacp/exp-guggenheim.jpg';
import expStanford from '@/assets/bacp/exp-stanford-gsb.jpg';
import expWharton from '@/assets/bacp/exp-wharton.png';

export const founderLogos = [
  { name: 'Stanford Graduate School of Business', src: expStanford },
  { name: 'The Wharton School, University of Pennsylvania', src: expWharton },
  { name: 'Guggenheim', src: expGuggenheim },
  { name: 'Monogram Capital Partners', src: expMonogram },
  { name: 'Glowbar', src: expGlowbar },
];

/* ------------------------------------------------------------------ */
/* Blog / news                                                         */
/* ------------------------------------------------------------------ */

export const newsItems = [
  {
    title:
      'Blue Angel Closes its First Partnership with leading Concierge Physicians Dr. Amy Daniher and Dr. Ulrike Sujansky',
    category: 'News and Press',
    date: 'February 2, 2026',
    href: 'https://blueangelclinical.com/blog',
  },
  {
    title:
      'Blue Angel Clinical Partners Completes Its $15M Fundraise to Accelerate the Growth of Concierge Medicine',
    category: 'News and Press',
    date: 'December 4, 2025',
    href: 'https://blueangelclinical.com/blog',
  },
];
