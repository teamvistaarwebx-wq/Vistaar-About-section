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

export const hero = {
  eyebrow: 'Strategy · System · Scale',
  // Rendered as: lead + <accent> (accent shown in brand red)
  headline: { lead: 'From digital practice to', accent: 'multidisciplinary consultancy.' },
  sub: 'Brand, digital, research and technology consultancy from Bhopal, working across India.',
  facts: ['Est. 2019', 'Bhopal', 'Working across India'],
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
  photoHeight: 1319,
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
 * Principles. `image` fills the panel revealed when a card opens. Use a path in
 * /public/assets/about/principles/ (e.g. '/assets/about/principles/01-problems.webp'),
 * or null to show the typographic panel ("Problems / before / services") instead.
 */
export const principles = {
  eyebrow: 'Eight principles',
  title: 'The principles we work by.',
  items: [
    { title: 'Problems before services.', text: 'We do not force every requirement into an existing service category.', image: null },
    { title: 'Research before assumption.', text: 'Decisions should start with evidence wherever evidence can reasonably be gathered.', image: null },
    { title: 'Strategy before execution.', text: 'Activity without direction creates output, not progress.', image: null },
    { title: 'Systems before scale.', text: 'Scaling a weak system usually produces a bigger weak system.', image: null },
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
    { for: 'D2C company', means: 'Building the brand, website and acquisition engine' },
    { for: 'Established business', means: 'Fixing fragmented digital systems' },
    { for: 'Institution', means: 'Research and strategic communication' },
    { for: 'Government programme', means: 'Impact assessment, documentation and public communication' },
    { for: 'Organisation adopting AI', means: 'Designing internal tools and workflows' },
  ],
  sectorsTitle: 'Sectors we work across',
  sectors: [
    {
      name: 'Consumer & Commerce',
      items: ['D2C', 'FMCG', 'Fashion', 'Handloom and craft', 'Food and beverage', 'Beauty', 'Retail'],
    },
    {
      name: 'Industry & Services',
      items: ['Healthcare', 'Industrial', 'Construction', 'Technology', 'Professional services', 'Hospitality'],
    },
    {
      name: 'Development & Public',
      items: ['NGOs', 'CSR', 'Public-sector communication', 'Infrastructure', 'Agriculture', 'Water and irrigation'],
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
