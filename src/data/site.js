/**
 * Site-wide navigation and company details shared by header and footer.
 * Paths other than /about are assumed; point them at the live routes.
 * Public Research and Portfolio are intentionally not linked.
 */

export const company = {
  name: 'Vistaar WebX',
  legalName: 'Sanskaar Webx Services LLP',
  tagline: 'Strategy · System · Scale',
  summary: 'A brand, digital, research and technology consultancy.',
  phone: { display: '+91 95599 03700', href: 'tel:+919559903700' },
  email: { display: 'director@vistaarsws.com', href: 'mailto:director@vistaarsws.com' },
  address: 'C-8, Sahyog Parisar, E-8 Trilanga Main Road, Shahpura, Bhopal, Madhya Pradesh',
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Our services', href: '/services' },
  { label: 'Flowbit', href: '/flowbit', highlight: true },
];

export const headerCta = { label: 'Book a consult', href: '/about#contact' };

export const footerNav = [
  {
    title: 'Practice',
    links: [
      { label: 'What we do', href: '/services' },
      { label: 'Growth & Demand', href: '/services#growth' },
      { label: 'Digital & Commerce', href: '/services#digital' },
    ],
  },
  {
    title: 'Firm',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Career', href: '/careers' },
      { label: 'Flowbit', href: '/flowbit' },
    ],
  },
];
