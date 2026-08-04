"use client";

import { useState, useEffect } from "react";

// ─── Icon Components ───────────────────────────────────────────────
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// ─── Data ───────────────────────────────────────────────────────────

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const skills = {
  Languages: ["JavaScript (ES6+)", "PHP", "HTML5", "CSS3", "SQL"],
  Frontend: ["ReactJS", "Next.js", "jQuery", "Tailwind CSS", "Bootstrap", "Elementor", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "Core PHP", "RESTful APIs", "GraphQL", "WPGraphQL"],
  CMS: ["WordPress", "WooCommerce", "CPT/UI", "Advanced Custom Fields (ACF)"],
  Databases: ["MySQL", "MongoDB", "Supabase"],
  "Cloud & DevOps": ["AWS S3", "Git", "GitHub", "Vercel", "JWT Authentication", "cURL"],
  Payments: ["Stripe", "Paytm Payment Gateway", "Braintree"],
  Other: ["Google Maps API", "Google Translator API", "SEO Optimization", "Code Review", "Cross-browser Testing"],
};

const experiences = [
  {
    title: "MERN Full Stack Developer",
    company: "MG Smart Pvt. Ltd.",
    period: "March 2024 – Present",
    highlights: [
      "Architect and develop scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), improving application performance and maintainability.",
      "Design and implement RESTful APIs consumed by React.js front-end clients, reducing average API response time and ensuring seamless data flow between services.",
      "Implement JWT-based authentication and role-based access control (RBAC) to secure multi-user applications against unauthorized access.",
      "Collaborate with product managers, UI/UX designers, and QA engineers in an Agile/Scrum environment, consistently delivering sprint goals on schedule.",
      "Conduct code reviews to enforce coding standards, improve team code quality, and reduce production bugs.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company: "Upbrighter IT Services Pvt. Ltd., Mohali",
    period: "September 2023 – January 2024",
    highlights: [
      "Developed and maintained custom WordPress themes and plugins using PHP, enhancing site functionality and reducing client-reported issues.",
      "Optimized website performance through caching strategies, database query tuning, and front-end asset minification, improving page load speed.",
      "Integrated third-party REST APIs and payment gateways into WordPress platforms, extending functionality per client specifications.",
      "Performed cross-browser compatibility testing across Chrome, Firefox, Safari, and Edge, ensuring consistent user experience.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company: "AceWebX Technologies Pvt. Ltd., Mohali",
    period: "December 2021 – September 2023",
    highlights: [
      "Led end-to-end development of 10+ client WordPress projects, from requirements gathering and architecture design through to production deployment and post-launch support.",
      "Built reusable custom Elementor widgets, CPT/UI post types, and Advanced Custom Fields (ACF) configurations, accelerating content management workflows.",
      "Integrated WPGraphQL APIs to connect WordPress back ends with React.js and Next.js front-end applications, enabling headless CMS architecture.",
      "Mentored and guided junior developers on WordPress best practices, PHP coding standards, Git version control workflows, and code review processes.",
    ],
  },
  {
    title: "PHP Developer",
    company: "Webframez Pvt. Ltd., Mohali",
    period: "September 2019 – December 2021",
    highlights: [
      "Designed and developed 15+ WordPress and WooCommerce websites for e-commerce clients, delivering full solutions from initial setup to payment gateway integration.",
      "Built custom PHP modules for product management, admin dashboards, and dynamic front-end features, improving operational efficiency for business clients.",
      "Integrated Braintree payment API and automatically forwarded transaction responses to third-party APIs using cURL, enabling seamless order processing.",
      "Implemented Paytm Payment Gateway on an e-commerce platform, enabling secure online transactions.",
    ],
  },
];

const projects = [
  {
    title: "Who Does Your Hair?",
    url: "https://wdyh-front-end.vercel.app",
    year: "2023",
    stack: ["Next.js", "Supabase", "AWS S3", "Google Maps API", "JWT"],
    description:
      "A full-stack B2B/B2C marketplace platform enabling stylists and salons to create verified business accounts and showcase their portfolios online.",
    highlights: [
      "Built an AI-powered image-search feature allowing customers to find stylists by uploading reference photos.",
      "Configured AWS S3 for scalable media storage and implemented JWT authentication to protect user sessions.",
    ],
  },
  {
    title: "BTC University",
    url: "https://btcuniversity.com",
    year: "2023",
    stack: ["Next.js", "WPGraphQL", "Stripe", "WordPress", "Google Translator API"],
    description:
      "A full-featured online learning platform enabling educators to publish video courses gated behind monthly and yearly Stripe subscription plans.",
    highlights: [
      "Connected a WordPress CMS back end to a Next.js front end using WPGraphQL, implementing a headless CMS pattern.",
      "Integrated Google Translator API for multilingual content support, broadening accessibility to a global audience.",
    ],
  },
  {
    title: "Credit Unions",
    url: "https://creditunions.com",
    year: "2022",
    stack: ["WordPress", "WooCommerce"],
    description:
      "An event ticketing and booking platform supporting online payments and attendee management.",
    highlights: [
      "Developed using WordPress and WooCommerce with custom event management functionality.",
    ],
  },
  {
    title: "Vorortleben",
    url: "https://vorortleben.de",
    year: "2022",
    stack: ["WordPress", "Core PHP", "Elementor"],
    description:
      "A German community platform with custom UI design and event booking system.",
    highlights: [
      "Designed the user interface and developed custom Elementor page builder widgets.",
      "Built an event booking system using CPT/UI for structured custom post management.",
    ],
  },
  {
    title: "Inmate Photos",
    url: "https://inmatephotos.com",
    year: "2021",
    stack: ["WordPress", "JavaScript", "PHP", "cURL", "Braintree"],
    description:
      "A platform with dynamic pricing plans and integrated payment processing.",
    highlights: [
      "Engineered a custom dynamic pricing plan table in JavaScript.",
      "Integrated Braintree payment gateway and relayed transaction responses to a third-party API via cURL.",
    ],
  },
  {
    title: "Online Cake Mart",
    url: "https://onlinecakemart.com",
    year: "2020",
    stack: ["Core PHP", "Paytm Payment Gateway"],
    description:
      "An e-commerce platform for an online bakery with product catalog and secure checkout.",
    highlights: [
      "Built a product management admin module and a customer-facing product catalog in Core PHP.",
      "Integrated Paytm Payment Gateway for secure online checkout.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SASIIT, Phase-8, Mohali, India",
    period: "2016 – 2019",
    score: "SGPA: 7.8 / 10",
  },
  {
    degree: "Higher Secondary Certificate (10+2) – Arts with Mathematics",
    institution: "Shastri Model School, Phase-2, Mohali (PSEB)",
    period: "2015 – 2016",
    score: "Score: 76%",
  },
  {
    degree: "Secondary School Certificate (10th) – CBSE",
    institution: "Gian Jyoti Global School, Phase-2, Mohali",
    period: "2013 – 2014",
    score: "CGPA: 6.6 / 10",
  },
];

// ─── Skill Badge Colors ─────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  Languages: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300",
  Frontend: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-300",
  Backend: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-300",
  CMS: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-300",
  Databases: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300",
  "Cloud & DevOps": "from-red-500/20 to-red-600/10 border-red-500/30 text-red-300",
  Payments: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-300",
  Other: "from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-300",
};

// ─── Main Component ─────────────────────────────────────────────────
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Navigation ──────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-card-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent"
            >
              {"<SK />"}
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted hover:text-accent transition-colors"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-card-border">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-muted hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sumeet Kumar
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted max-w-3xl mx-auto mb-4 font-light">
            Full Stack Developer
          </p>

          <p className="text-base sm:text-lg text-muted/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            6+ years of experience building scalable web applications with{" "}
            <span className="text-accent font-medium">ReactJS</span>,{" "}
            <span className="text-accent font-medium">Next.js</span>,{" "}
            <span className="text-accent font-medium">Node.js</span>,{" "}
            <span className="text-accent font-medium">PHP</span> &{" "}
            <span className="text-accent font-medium">WordPress</span>
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["React", "Next.js", "Node.js", "MongoDB", "PHP", "WordPress", "Tailwind CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm font-mono rounded-full bg-card-bg border border-card-border text-muted hover:text-accent hover:border-accent/40 transition-all cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-3.5 bg-gradient-to-r from-accent to-blue-500 text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-card-border text-foreground font-semibold rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-accent/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Section ───────────────────────────────────────── */}
      <section id="about" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="About Me" subtitle="Get to know me better" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card-bg border border-card-border rounded-2xl p-8">
                <p className="text-muted leading-relaxed text-lg">
                  Results-driven Full Stack Web Developer with{" "}
                  <span className="text-accent font-semibold">6+ years</span> of experience
                  architecting, developing, and deploying scalable web applications using{" "}
                  <span className="text-foreground font-medium">
                    ReactJS, Next.js, Node.js, PHP, and WordPress
                  </span>
                  . Demonstrated expertise in building responsive, cross-browser-compatible
                  front-end interfaces, designing RESTful and GraphQL APIs, and integrating payment
                  gateways including Stripe, Braintree, and Paytm.
                </p>
                <p className="text-muted leading-relaxed text-lg mt-4">
                  Strong background in MERN stack development, WooCommerce customization, headless
                  CMS architecture, and cloud storage with AWS S3. Committed to writing clean,
                  well-documented, maintainable code and delivering high-performance, user-focused
                  solutions in collaborative Agile/Scrum environments.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <StatCard number="6+" label="Years Experience" />
              <StatCard number="25+" label="Projects Delivered" />
              <StatCard number="10+" label="Technologies" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills Section ──────────────────────────────────────── */}
      <section id="skills" className="py-24 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Technical Skills" subtitle="My technology toolkit" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r border ${
                        categoryColors[category] || categoryColors.Other
                      } transition-all`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience Section ──────────────────────────────────── */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Work Experience" subtitle="My professional journey" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple-500 to-accent/20" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/30" />
                  </div>

                  <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          <BriefcaseIcon />
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium mt-1">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted px-3 py-1 bg-accent/10 rounded-full whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects Section ────────────────────────────────────── */}
      <section id="projects" className="py-24 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Key Projects" subtitle="Some of my best work" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 flex flex-col"
              >
                {/* Project Header */}
                <div className="p-6 pb-4 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <CodeIcon />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted bg-background/50 px-2 py-1 rounded-md">
                        {project.year}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        title="Visit project"
                      >
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted/80 flex gap-2 leading-relaxed"
                      >
                        <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="px-6 py-4 border-t border-card-border bg-background/30">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded-md bg-accent/10 text-accent/80 border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education Section ───────────────────────────────────── */}
      <section id="education" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Education" subtitle="My academic background" />

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                  <AcademicCapIcon />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-accent text-sm font-medium mb-1">{edu.institution}</p>
                <p className="text-muted text-sm mb-3">{edu.period}</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                  {edu.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─────────────────────────────────────── */}
      <section id="contact" className="py-24 relative bg-card-bg/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Get In Touch" subtitle="Let's work together" />

          <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <ContactCard
              icon={<MailIcon />}
              label="Email"
              value="sumeet.sbjd@gmail.com"
              href="mailto:sumeet.sbjd@gmail.com"
            />
            <ContactCard
              icon={<PhoneIcon />}
              label="Phone"
              value="+91 78891 02883"
              href="tel:+917889102883"
            />
            <ContactCard
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value="Sumeet Kumar"
              href="https://linkedin.com/in/sumeet-kumar-737171199"
            />
          </div>

          <a
            href="mailto:sumeet.sbjd@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 text-lg"
          >
            <MailIcon />
            Say Hello
          </a>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-accent font-medium">Sumeet Kumar</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── Scroll to Top Button ────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent text-background rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted text-lg">{subtitle}</p>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-accent to-purple-400" />
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-2xl p-6 text-center hover:border-accent/30 transition-all">
      <p className="text-3xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group block"
    >
      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-accent/10 text-accent mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
      <p className="text-foreground font-medium text-sm group-hover:text-accent transition-colors">
        {value}
      </p>
    </a>
  );
}
