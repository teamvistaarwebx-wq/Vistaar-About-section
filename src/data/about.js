/**
 * About page copy.
 *
 * Every line here comes from "Vistaar WebX Company Profile 2026" (the PDF),
 * lightly tightened. Edit copy here; layout lives in src/components/about/.
 * Do not add stats, names or claims that are not in the profile.
 */

export const seo = {
  title: 'About Vistaar WebX | Brand, Digital, Research & Technology Consultancy, Bhopal',
  description:
    'Vistaar WebX is a Bhopal-based brand, digital, research and technology consultancy, est. 2019. From a founder-led digital practice to a multidisciplinary consultancy working across India.',
  ogImage: '/assets/about/og-about.png',
  ogImageAlt: 'Vistaar WebX: From digital practice to multidisciplinary consultancy.',
};

export const whoWeAre = {
  eyebrow: 'Who we are',
  title: 'More than isolated marketing or technology services.',
  intro:
    'We work with businesses, institutions, development organisations and public-sector teams. We help them see where they stand, decide what needs to change, build the right strategy and systems, and communicate clearly.',
  disciplinesLabel: 'Our work sits where six disciplines meet.',
  cta: { label: 'Start a project', href: '#contact' },
  disciplinesNote: 'They work as one system. Every engagement uses the combination its problem needs.',
  /**
   * Six disciplines, shown as a clickable list beside a changing visual.
   * - covers: what the discipline covers (profile §5 "Six Capability Areas")
   * - image:  optional photo for the visual panel, e.g. '/assets/about/disciplines/01-brand.webp';
   *           null shows the branded typographic panel instead
   */
  disciplines: [
    {
      name: 'Brand',
      covers: ['Brand strategy', 'Positioning', 'Naming', 'Identity', 'Guidelines', 'Packaging', 'Campaign direction'],
      image: null,
    },
    {
      name: 'Digital',
      covers: ['Website strategy', 'UI/UX', 'WordPress', 'Shopify', 'E-commerce', 'Custom web apps', 'Conversion'],
      image: null,
    },
    {
      name: 'Growth',
      covers: ['Meta Ads', 'Google Ads', 'Funnels', 'Creative testing', 'Attribution', 'SEO', 'Growth experiments'],
      image: null,
    },
    {
      name: 'Research',
      covers: ['Field research', 'Impact assessment', 'Programme evaluation', 'Government and CSR consulting', 'Reports'],
      image: null,
    },
    {
      name: 'Communication',
      covers: ['Content strategy', 'Social media', 'Reels and UGC', 'Photography and video', 'Public communication'],
      image: null,
    },
    {
      name: 'Technology',
      covers: ['AI workflows', 'Custom AI tools', 'Knowledge systems', 'Internal copilots', 'Reporting automation'],
      image: null,
    },
  ],
};

export const founder = {
  eyebrow: 'Founder & origin',
  name: 'Sanskaar Singh',
  role: 'Founder & CEO',
  // Cut-out portrait (transparent background), 1000×1319
  photo: '/assets/about/sanskaar-singh.webp',
  photoWidth: 1000,
  photoHeight: 1241,
  story: [
    'Sanskaar founded Vistaar in Bhopal in 2019 as a founder-led digital practice. Businesses needed websites, design and communication. More than that, they needed someone who understood the business behind the requirement. That became the foundation of Vistaar.',
    'Today he leads strategy, creative direction, research-led problem solving, key client engagements and the build-out of new capabilities.',
  ],
  quote:
    'Do not start by asking what service to sell. Start by understanding the problem that needs to be solved.',
  quoteLabel: 'The idea behind Vistaar',
  base: {
    title: 'Based in Bhopal. Working across India.',
    text: 'Building from central India keeps us close to a side of the market often missed by firms working only from the largest metros.',
    markets: [
      'Regional businesses',
      'MSMEs',
      'Family-run enterprises',
      'Traditional industries',
      'Rural and semi-urban markets',
      'Emerging digital consumers',
      'Development programmes',
      'Public-sector systems',
      'Growing D2C businesses',
    ],
  },
};

/**
 * Timeline milestones, in order (rendered by the ScrollTimeline panels).
 * - year:      big year on the panel and the scrubber label
 * - theme:     panel colours: 'light' (surface), 'dark' (ink) or 'brand' (red)
 * - principle: optional guiding line from the profile { label, text }
 * - finale:    marks the "now" milestone; its chips animate in
 */
export const timeline = {
  eyebrow: 'Our journey',
  title: '2019 to 2026.',
  intro: 'Same philosophy, wider scope. Seven steps from a founder-led practice to a multidisciplinary consultancy.',
  milestones: [
    {
      year: '2019',
      theme: 'light',
      phase: 'The Beginning',
      text: 'A founder-led digital practice in Bhopal: websites, digital presence, design and marketing support.',
      principle: { label: 'Principle', text: 'Understand the problem, find a solution, deliver.' },
    },
    {
      year: '2020–21',
      theme: 'dark',
      phase: 'Building the Foundation',
      text: 'Projects grow into a structured team across web, social, design, content and SEO.',
      principle: { label: 'Principle', text: 'Functions should work together, not as disconnected vendors.' },
    },
    {
      year: '2022',
      theme: 'light',
      phase: 'Services to Brand Thinking',
      text: 'Clients start asking what their brand should stand for. We move upstream into positioning, identity and strategy.',
    },
    {
      year: '2023',
      theme: 'dark',
      phase: 'Integrated Capabilities',
      text: 'Brand, technology, social, performance and production start working as one partner.',
    },
    {
      year: '2024',
      theme: 'light',
      phase: 'Business Outcomes',
      text: 'Focus shifts from activity to revenue, acquisition, conversion and measurement.',
      principle: { label: 'The question', text: 'What problem are we actually trying to solve?' },
    },
    {
      year: '2025',
      theme: 'dark',
      phase: 'Systems Over Campaigns',
      text: 'We build one connected operating model: Research, Strategy, Brand, Communication, Technology, Distribution, Measurement, Optimisation.',
      principle: { label: 'Insight', text: 'Most organisations suffer from fragmentation, not a lack of activity.' },
    },
    {
      year: '2026',
      theme: 'brand',
      phase: 'Multidisciplinary Consultancy',
      text: 'Five capability areas join the brand and growth practice built since 2019.',
      principle: {
        label: 'Same philosophy, wider scope',
        text: 'Understand complex problems first, then build the right system around them.',
      },
      finale: true,
      badge: 'Now',
      chips: [
        'Research & Analysis',
        'Impact Assessment',
        'Government & Institutional Consulting',
        'Public Communication',
        'AI Tools & Workflows',
      ],
    },
  ],
};

export const howWeWork = {
  eyebrow: 'How we work',
  title: 'We do not begin with a service. We begin with the problem.',
  // Heading as shown on the page: lead + <accent in red> + tail
  heading: { lead: 'We begin with', accent: 'the problem', tail: ', not a service.' },
  intro: 'Every engagement moves through six steps, in a loop. What we learn feeds the next decision.',
  loopNote: 'What we learn feeds the next decision.',
  steps: ['Research first', 'Diagnose', 'Design the intervention', 'Execute', 'Measure', 'Improve'],
  problemsTitle: 'What looks like the problem, and what often is.',
  problemsHint: 'Tap or hover a card to flip it.',
  looksLabel: 'Looks like',
  isLabel: 'Often is',
  problems: [
    { looks: 'The advertising', is: 'The positioning' },
    { looks: 'The website', is: 'The customer journey' },
    { looks: 'Communication', is: 'A lack of reliable evidence' },
    { looks: 'Not enough data', is: 'Data exists, but nobody has turned it into insight' },
    { looks: 'The programme itself', is: 'Good outcomes, poorly communicated' },
    { looks: 'Not enough people', is: 'The team needs a better workflow' },
  ],
};

/**
 * Case studies (snapshot after How we work).
 * Sources: Mommy's Chicken and Jam2gather from the client case-study slide supplied by the team;
 * HART Cosmetics from the 2026 profile (Case Study 01). Only reported numbers are charted:
 * - chart.type 'growth': before → after values (₹ lakh)
 * - chart.type 'roas':   return on ad spend, a single value or a [min, max] range, against 1× break-even
 */
/**
 * Case studies, laid out like the printed case-study spreads: a headline, challenge → work → result,
 * a before/after bar chart (grey before, red after, on a labelled axis) and the headline figure.
 * Figures come from the case-study brochure and the company profile only.
 * chart.bars: { label, value, upto? } where `upto` adds a lighter band for the top of a range.
 * chart.format: how a value is printed ({v} is the number).
 */
export const caseStudies = {
  eyebrow: 'Case studies',
  title: 'Challenge, work, result.',
  intro: 'A snapshot of what changed for four brands when strategy, content and performance worked as one system.',
  items: [
    {
      client: 'Atulya Karigari',
      logo: null,
      sector: 'Heritage Craft · Gifting',
      headline: 'The commercial shift.',
      challenge: 'Helping shoppers move from craft discovery to confident purchase.',
      work: 'UX specification, a phased roadmap and individual, corporate and custom gifting flows, with growth work supported by commerce UX and creative.',
      result: '₹0.6L to ₹4L monthly revenue in 1.4 months.',
      tags: ['UX specification', 'Gifting flows', 'Growth'],
      chart: {
        caption: 'Monthly revenue before and after the engagement',
        axis: '₹ lakh / month',
        max: 4.5,
        step: 0.5,
        decimals: 1,
        format: '₹{v}L',
        bars: [
          { label: 'Before', value: 0.6 },
          { label: 'After', value: 4 },
        ],
      },
      stat: { value: '6.67×', label: 'monthly revenue', lines: ['+₹3.4L per month', 'In 1.4 months'] },
      note: 'Founder-confirmed engagement result. Not an isolated attribution test.',
    },
    {
      client: "Mommy's Chicken",
      logo: { src: '/assets/about/clients/mommys-chicken.png', width: 128, height: 58 },
      sector: 'Fresh Meat · Food',
      headline: 'Built in month one. Scaled in month two.',
      challenge: 'Selling across Blinkit, Zomato and Instamart, but with a weak website and no direct online sales.',
      work: 'Fixed the website and built e-commerce, managed quick commerce across platforms, and ran content and ads together.',
      result: '₹15L to ₹33L monthly revenue by month two.',
      tags: ['E-commerce', 'Quick commerce', 'Content & ads'],
      chart: {
        caption: 'Monthly revenue before and after the engagement',
        axis: 'Monthly revenue / ₹ lakh',
        max: 35,
        step: 5,
        decimals: 0,
        format: '₹{v}L',
        bars: [
          { label: 'Before', value: 15 },
          { label: 'After', value: 33 },
        ],
      },
      phases: [{ label: 'Month 01 / Build', text: 'Website, commerce journeys and the production foundation.' }],
      stat: { kicker: 'Month 02 / Growth', value: '₹33L', unit: '/ month', lines: ['2.2× baseline · +120%'] },
      note: 'Timeline and monthly revenue confirmed by Vistaar.',
    },
    {
      client: 'Jam2gather',
      logo: { src: '/assets/about/clients/jam2gather.png', width: 202, height: 32 },
      sector: 'Live Music · Events',
      headline: 'Every event, its own campaign.',
      challenge: 'Selling tickets for live jamming events, one city and one date at a time.',
      work: 'Ran Meta ads with copy and creative for every event, rebuilt campaigns around sales, and built a funnel for a new wedding vertical.',
      result: '10–14X return on ad spend on ticket sales.',
      tags: ['Meta Ads', 'Creative', 'Copy', 'Funnels'],
      chart: {
        caption: 'Ticket sales returned for every ₹1 of ad spend',
        axis: '₹ per ₹1 spent',
        max: 15,
        step: 5,
        decimals: 0,
        format: '₹{v}',
        bars: [
          { label: 'Spend', value: 1 },
          { label: 'Return', value: 10, upto: 14 },
        ],
      },
      stat: { value: '10–14×', label: 'ROAS on ticket sales' },
    },
    {
      client: 'HART Cosmetics',
      logo: null,
      sector: 'Skincare · D2C',
      headline: 'One journey in a crowded category.',
      challenge: 'Standing out in one of the most crowded beauty categories online, with one consistent journey across social, content, UGC, ads and e-commerce.',
      work: 'Ran social media for the brand and the founder, built a UGC pipeline of about 10 videos a month, and kept performance marketing running with fresh creative angles.',
      result: 'Up to 3X return on ad spend from performance marketing.',
      tags: ['Social media', 'UGC', 'Performance marketing'],
      chart: {
        caption: 'Revenue returned for every ₹1 of ad spend',
        axis: '₹ per ₹1 spent',
        max: 4,
        step: 1,
        decimals: 0,
        format: '₹{v}',
        bars: [
          { label: 'Spend', value: 1 },
          { label: 'Return', value: 3, prefix: 'Up to ' },
        ],
      },
      stat: { prefix: 'Up to', value: '3×', label: 'ROAS from performance marketing' },
    },
  ],
};

/**
 * Principles. `image` fills the panel revealed when a card opens. Use a path in
 * /public/assets/about/principles/ (e.g. '/assets/about/principles/01-problems.webp'),
 * or null to show the typographic panel ("Problems / before / services") instead.
 */
export const principles = {
  eyebrow: 'Eight principles',
  title: 'The principles we work by.',
  items: [
    { title: 'Problems before services.', text: 'We do not force every requirement into an existing service category.', image: '/assets/about/principles/01-problems.webp' },
    { title: 'Research before assumption.', text: 'Decisions should start with evidence wherever evidence can reasonably be gathered.', image: '/assets/about/principles/02-research.webp' },
    { title: 'Strategy before execution.', text: 'Activity without direction creates output, not progress.', image: '/assets/about/principles/03-strategy.webp' },
    { title: 'Systems before scale.', text: 'Scaling a weak system usually produces a bigger weak system.', image: '/assets/about/principles/04-systems.webp' },
    { title: 'Communication with context.', text: 'Commercial, institutional and public communication need different approaches.', image: null },
    { title: 'Technology with purpose.', text: 'Technology should reduce friction, improve decisions or create measurable leverage.', image: null },
    { title: 'Data with interpretation.', text: 'Data alone is not insight.', image: null },
    { title: 'Creativity with purpose.', text: 'Good creative should communicate, influence behaviour and serve an objective.', image: null },
  ],
};

export const visionMission = {
  eyebrow: 'Vision & mission',
  visionLabel: 'Vision',
  vision:
    'To build a multidisciplinary Indian consultancy that solves complex problems across business, communication, research and technology.',
  visionDetail:
    'Strategic thinking, research depth, creative execution, technology and ground-level understanding, within one organisation. Built from Bhopal, working across India and beyond.',
  missionLabel: 'Mission',
  mission: 'Help organisations get clear on nine questions, then bring together the capabilities to act on the answers.',
  questions: [
    'What problem they are solving',
    'Who they are solving it for',
    'What evidence exists',
    'What needs more research',
    'What should be communicated',
    'What systems need to be built',
    'Where technology can help',
    'How results should be measured',
    'How learning feeds future decisions',
  ],
};

export const numbers = {
  eyebrow: 'Vistaar in numbers',
  title: 'Six years of practice, in four numbers.',
  items: [
    { value: 6, suffix: '+', label: 'Years of practice' },
    { value: 50, suffix: '+', label: 'Brands and organisations' },
    { value: 100, suffix: '+', label: 'Projects delivered' },
    { value: 12, suffix: '+', label: 'Industries served' },
  ],
};

export const workWith = {
  eyebrow: 'Who we work with',
  title: 'Different organisations. Different problems.',
  tableCaption: 'What working with Vistaar may mean for different organisations',
  colFor: 'For a',
  colMeans: 'It may mean',
  rows: [
    { for: 'D2C company', means: 'Building the brand, website and acquisition engine', icon: 'linear:Shop' },
    { for: 'Established business', means: 'Fixing fragmented digital systems', icon: 'linear:Building' },
    { for: 'Institution', means: 'Research and strategic communication', icon: 'linear:Teacher' },
    { for: 'Government programme', means: 'Impact assessment, documentation and public communication', icon: 'linear:Courthouse' },
    { for: 'Organisation adopting AI', means: 'Designing internal tools and workflows', icon: 'linear:Magicpen' },
  ],
  sectorsTitle: 'Sectors we work across',
  /** Icons are Iconsax keys from src/data/icons.js. */
  sectors: [
    {
      name: 'Consumer & Commerce',
      icon: 'bulk:ShoppingBag',
      items: [
        { name: 'D2C', icon: 'bulk:Shop' },
        { name: 'FMCG', icon: 'bulk:Box' },
        { name: 'Fashion', icon: 'bulk:Bag2' },
        { name: 'Handloom and craft', icon: 'bulk:Brush' },
        { name: 'Food and beverage', icon: 'bulk:Coffee' },
        { name: 'Beauty', icon: 'bulk:MagicStar' },
        { name: 'Retail', icon: 'bulk:ShoppingCart' },
      ],
    },
    {
      name: 'Industry & Services',
      icon: 'bulk:Buildings',
      items: [
        { name: 'Healthcare', icon: 'bulk:Hospital' },
        { name: 'Industrial', icon: 'bulk:Setting2' },
        { name: 'Construction', icon: 'bulk:Building3' },
        { name: 'Technology', icon: 'bulk:Cpu' },
        { name: 'Professional services', icon: 'bulk:Briefcase' },
        { name: 'Hospitality', icon: 'bulk:Reserve' },
      ],
    },
    {
      name: 'Development & Public',
      icon: 'bulk:Global',
      items: [
        { name: 'NGOs', icon: 'bulk:People' },
        { name: 'CSR', icon: 'bulk:Heart' },
        { name: 'Public-sector communication', icon: 'bulk:Messages2' },
        { name: 'Infrastructure', icon: 'bulk:Buildings2' },
        { name: 'Agriculture', icon: 'bulk:Tree' },
        { name: 'Water and irrigation', icon: 'bulk:Drop' },
      ],
    },
  ],
};

/**
 * Team, in the profile's order.
 * photo / photoAlt: files in /public/assets/about/team/. null = placeholder.
 */
const teamPhoto = (slug) => `/assets/about/team/${slug}.webp`;
const teamPhotoAlt = (slug) => `/assets/about/team/${slug}-alt.webp`;

export const team = {
  eyebrow: 'Our team',
  title: 'Under one roof in Bhopal.',
  intro: 'Strategy, design, technology, content and operations, led by founder Sanskaar Singh.',
  members: [
    { name: 'Sanskaar Singh', role: 'Founder & CEO', photo: teamPhoto('sanskaar-singh'), photoAlt: null },
    { name: 'Akshat Jain', role: 'Chief of Staff', photo: teamPhoto('akshat-jain'), photoAlt: teamPhotoAlt('akshat-jain') },
    { name: 'Aditi Singh Chouhan', role: 'HR Manager', photo: teamPhoto('aditi-singh-chouhan'), photoAlt: teamPhotoAlt('aditi-singh-chouhan') },
    { name: 'Shubham Shrivastava', role: 'Production Lead', photo: teamPhoto('shubham-shrivastava'), photoAlt: teamPhotoAlt('shubham-shrivastava') },
    { name: 'Prachi Mishra', role: 'Project Management Executive', photo: teamPhoto('prachi-mishra'), photoAlt: teamPhotoAlt('prachi-mishra') },
    { name: 'Krapansh Sharma', role: 'Graphic Designer', photo: teamPhoto('krapansh-sharma'), photoAlt: teamPhotoAlt('krapansh-sharma') },
    { name: 'Ritu Yadav', role: 'Graphic Designer', photo: teamPhoto('ritu-yadav'), photoAlt: teamPhotoAlt('ritu-yadav') },
    { name: 'Gaurav Sarode', role: 'UX Designer', photo: teamPhoto('gaurav-sarode'), photoAlt: teamPhotoAlt('gaurav-sarode') },
    { name: 'Purvi Jain', role: 'Content Creator & SME', photo: teamPhoto('purvi-jain'), photoAlt: teamPhotoAlt('purvi-jain') },
    { name: 'Lavanya Choudhary', role: 'Social Media Executive', photo: teamPhoto('lavanya-choudhary'), photoAlt: teamPhotoAlt('lavanya-choudhary') },
    { name: 'Reet Kaur', role: 'Founder Associate', photo: teamPhoto('reet-kaur'), photoAlt: teamPhotoAlt('reet-kaur') },
    { name: 'Piyush Yadav', role: 'Video Editor', photo: teamPhoto('piyush-yadav'), photoAlt: teamPhotoAlt('piyush-yadav') },
    { name: 'Harsh Dev Arya', role: 'Full-Stack Developer', photo: null, photoAlt: null },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: "Let's talk about your business.",
  text: 'Tell us what you are trying to solve. We will start by understanding the problem, then suggest what it needs.',
  phone: { label: 'Call', display: '+91 95599 03700', href: 'tel:+919559903700' },
  email: { label: 'Email', display: 'director@vistaarsws.com', href: 'mailto:director@vistaarsws.com' },
  address: {
    label: 'Visit',
    lines: ['C-8, Sahyog Parisar, E-8 Trilanga Main Road,', 'Shahpura, Bhopal, Madhya Pradesh'],
  },
  signoff: 'Vistaar WebX, a brand of Sanskaar Webx Services LLP. Strategy. System. Scale.',
};
