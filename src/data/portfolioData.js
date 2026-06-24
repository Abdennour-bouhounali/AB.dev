export const developerInfo = {
  name: "Abdennour Bouhounali",
  title: "Full Stack Developer",
  location: "France",
  city: "Vélizy-Villacoublay",
  tagline: "I build high-performance web systems that turn visitors into paying clients.",
  subtitle: "Freelance Full-Stack Developer specializing in bespoke React frontends, robust Laravel backends, and conversion-focused architectures that drive business results.",
  email: "abdennour.bouhounali@gmail.com",
  targetClients: "Small Businesses, Restaurants, Local Shops, Artisans, Coaches & Startups",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const services = [
  {
    id: "webapp",
    title: "Bespoke React Web Applications",
    icon: "LayoutTemplate",
    description: "Dynamic, lightning-fast user interfaces designed to provide smooth experiences on mobile and desktop alike. Perfect for client dashboards, custom interactive tools, and SaaS MVPs.",
    features: [
      "Component-driven architecture",
      "State-of-the-art responsiveness",
      "Instant page transitions"
    ],
    value: "Keeps users engaged longer, reducing client drop-offs."
  },
  {
    id: "ecommerce",
    title: "Full-Stack Laravel & PHP E-Commerce",
    icon: "ShoppingBag",
    description: "Custom-built online storefronts and backend systems that don't rely on restrictive, slow template builders. Gives you absolute control over inventory, checkouts, and transactional data.",
    features: [
      "Seamless Laravel & MySQL integration",
      "Optimized database query handling",
      "High-performance product catalog structures"
    ],
    value: "Lower cart abandonment rates and frictionless shopping experiences."
  },
  {
    id: "api",
    title: "REST APIs & Custom Automations",
    icon: "Cpu",
    description: "Connect your core platform with CRM systems, payment gateways, invoice tools, or legacy databases. Automate repetitive business workflows and save human resources.",
    features: [
      "Secure authentication integrations",
      "Real-time webhook synchronizations",
      "Documented, clean API architectures"
    ],
    value: "Eliminates manual data entry and reduces operational overhead."
  }
];

export const skills = [
  { name: "React", category: "Frontend", level: "react" },
  { name: "TailwindCSS", category: "Styling", level: "tailwind" },
  { name: "Laravel", category: "Backend", level: "laravel" },
  { name: "PHP", category: "Backend", level: "laravel" },
  { name: "JavaScript", category: "Core", level: "react" },
  { name: "HTML", category: "Core", level: "standard" },
  { name: "CSS", category: "Core", level: "standard" },
  { name: "MySQL", category: "Database", level: "db" }
];

export const projects = [
  {
    id: "tagemi",
    domain: "tagemi-foundation.org",
    title: "Global Foundation Platform",
    summary: "A highly optimized, accessible web platform built to showcase initiatives and secure support. Engineered using modern frontend performance techniques to load instantly even on limited cellular networks.",
    tech: ["React", "TailwindCSS", "REST APIs"],
    metrics: [
      { num: "100%", label: "Accessible Markup" },
      { num: "<1.2s", label: "Interactive Load" }
    ],
    url: "https://tagemi-foundation.org",
    type: "foundation",
    images: ["/images/tagemi-1.png", "/images/tagemi-2.png"]
  },
  {
    id: "fisora",
    domain: "fisora.shop",
    title: "Conversion-Driven E-Commerce",
    summary: "A custom storefront backed by a fast transactional system. Eliminates standard checkout bottlenecks, allowing customers to easily filter products, add to cart, and check out securely in a few clicks.",
    tech: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
    metrics: [
      { num: "35%", label: "Faster Checkout Flow" },
      { num: "Zero", label: "Third-party Fee Bloat" }
    ],
    url: "https://fisora.shop",
    type: "shop",
    images: ["/images/fisora-1.png", "/images/fisora-2.png", "/images/fisora-3.png"]
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We start with a details call to define your business objectives, target audience, and product requirements. We establish clear success metrics and prepare a project specification document."
  },
  {
    num: "02",
    title: "Architecture & Design",
    description: "I map out the user flows, database structures, and interactive layouts. This ensures the tech stack aligns perfectly with your goals and avoids expensive adjustments later in the build."
  },
  {
    num: "03",
    title: "Development & Refinement",
    description: "Writing clean, production-grade code. You receive a staging link to view live progress. I run thorough performance and unit testing to ensure compatibility across major browsers."
  },
  {
    num: "04",
    title: "Launch & Handover",
    description: "Deploying your application to optimized cloud servers. I configure SSL security, perform final speed checks, and supply customized training videos to show you how to manage your content effortlessly."
  }
];

export const testimonials = [
  {
    name: "Mathieu R.",
    role: "Founder, Local Artisan Collective",
    quote: "Abdennour built our application from scratch. He was responsive, understood our commercial workflow instantly, and delivered a React dashboard that our staff uses daily without training. Load times dropped significantly compared to our old system."
  },
  {
    name: "Sarah D.",
    role: "Operations Manager, Fisora E-commerce",
    quote: "Unlike developers who talk only in terms of frameworks, Abdennour talked about conversions, checkout times, and customer retention. The Laravel store he engineered for us loads instantly and has eliminated our previous checkout friction."
  },
  {
    name: "Jean-Marc L.",
    role: "Technical Lead, Tagemi Foundation Project",
    quote: "Collaborating with Abdennour on our NGO platform was a fantastic experience. He streamlined our volunteer registration API flow and organized our hosting, saving us thousands in yearly license fees compared to ready-made platforms."
  }
];

export const faqs = [
  {
    question: "Why build a custom website instead of using template builders?",
    answer: "Template builders like WordPress, Wix, or Shopify are great for quick prototypes, but they often come with bloated, slow code, costly monthly subscriptions, and rigid layouts. A bespoke React & Laravel platform is built exclusively for your business rules, loads in a fraction of a second (boosting SEO ranking), and can scale indefinitely as your business requirements grow without additional software constraints."
  },
  {
    question: "How long will it take to build my platform?",
    answer: "For custom landing pages or small shop setups, delivery is typically 2 to 3 weeks. Complex, full-stack React and Laravel web applications with custom database architecture typically take between 4 to 8 weeks. I work in sprints, sending staging link updates every week, so you are always closely involved in the validation process."
  },
  {
    question: "How do we handle communication and updates during the project?",
    answer: "Transparency is key. We will use a shared dashboard where you can see active milestones, check tasks, and review files. We will communicate via email or Slack, and arrange weekly review calls to discuss progress and validate functional flows."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. I offer custom support plans that include monthly hosting monitoring, database security updates, off-site backups, and minor content adjustments. If you prefer to manage it yourself, I provide clean documentation and walking-through videos to help you operate the codebase independently."
  },
  {
    question: "Can we meet locally to discuss my project?",
    answer: "Absolutely. I am based in France, near Paris (Vélizy-Villacoublay), and can meet with clients locally in the Yvelines / Paris area. For clients located outside this region or abroad, I conduct all meetings via Zoom, Google Meet, and Slack."
  }
];
