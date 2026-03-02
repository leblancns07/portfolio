import React, { useState, useMemo, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Trophy,
  Zap,
  Cpu,
  Layout,
  BarChart3,
  ArrowRight,
  Globe,
  Layers,
  Sparkles,
  Command,
  BookOpen,
  Award,
  Target,
  ShieldCheck,
  Briefcase,
  Workflow,
  Sun,
  Moon
} from 'lucide-react';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0); 
  const [isDarkMode, setIsDarkMode] = useState(true);

  // --- THEME DEFINITIONS ---
  const themes = {
    dark: {
      bg: 'bg-zinc-950',
      text: 'text-zinc-400',
      heading: 'text-zinc-100',
      subheading: 'text-zinc-300',
      muted: 'text-zinc-500',
      mutedExtra: 'text-zinc-600',
      navBg: 'bg-zinc-900/60',
      cardBg: 'bg-zinc-900/40',
      cardBorder: 'border-white/5',
      cardHover: 'hover:border-orange-500/20',
      innerBg: 'bg-zinc-900',
      itemBg: 'bg-zinc-950',
      itemBorder: 'border-zinc-800',
      accentText: 'text-orange-500',
      accentTextHover: 'hover:text-orange-400',
      accentBg: 'bg-orange-600',
      accentHover: 'hover:bg-orange-500',
      accentBorder: 'border-orange-600/50',
      accentBorderHover: 'hover:border-orange-500',
      accentRing: 'ring-orange-500/20',
      navHover: 'hover:text-white',
      tabActive: 'bg-orange-600 text-white shadow-lg shadow-orange-500/20',
      tabInactive: 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50',
      modalBg: 'bg-black/95',
      modalBgAlt: 'bg-black/90',
      modalCardBg: 'bg-zinc-950',
      modalBorder: 'border-white/10',
      statsBg: 'bg-zinc-900/50',
      sectionBg: 'bg-zinc-900/10',
      sectionBgAlt: 'bg-zinc-900/20',
      glowPrimary: 'bg-orange-600/10',
      glowSecondary: 'bg-orange-900/10',
      logoGradient: 'from-orange-600 to-orange-700',
      selection: 'selection:bg-orange-600/30',
      imgFilter: 'grayscale brightness-90',
      iconBg: 'bg-zinc-950'
    },
    light: {
      bg: 'bg-slate-50',
      text: 'text-slate-800',
      heading: 'text-slate-950',
      subheading: 'text-slate-900',
      muted: 'text-slate-700',
      mutedExtra: 'text-slate-600',
      navBg: 'bg-white/70',
      cardBg: 'bg-white/40',
      cardBorder: 'border-slate-200',
      cardHover: 'hover:border-blue-500/30',
      innerBg: 'bg-slate-100',
      itemBg: 'bg-white',
      itemBorder: 'border-slate-200',
      accentText: 'text-blue-600',
      accentTextHover: 'hover:text-blue-700',
      accentBg: 'bg-blue-600',
      accentHover: 'hover:bg-blue-700',
      accentBorder: 'border-blue-600/50',
      accentBorderHover: 'hover:border-blue-600',
      accentRing: 'ring-blue-500/30',
      navHover: 'hover:text-blue-600',
      tabActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/20',
      tabInactive: 'text-slate-500 hover:text-slate-700 hover:bg-slate-200',
      modalBg: 'bg-white/95',
      modalBgAlt: 'bg-white/90',
      modalCardBg: 'bg-white',
      modalBorder: 'border-slate-200',
      statsBg: 'bg-white/60',
      sectionBg: 'bg-slate-100/50',
      sectionBgAlt: 'bg-slate-200/20',
      glowPrimary: 'bg-blue-600/10',
      glowSecondary: 'bg-blue-900/05',
      logoGradient: 'from-blue-600 to-blue-700',
      selection: 'selection:bg-blue-600/30',
      imgFilter: 'grayscale brightness-105',
      iconBg: 'bg-white'
    }
  };

  const t = isDarkMode ? themes.dark : themes.light;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- CORE DATA DEFINITIONS ---
  const heroData = {
    h1: "Nick LeBlanc",
    h2: "I build the systems where product, marketing, and engineering meet.",
    body: "Twenty years of enterprise-scale delivery across Global 500 organizations. I co-architected platforms generating over a billion dollars in value and lead AI initiatives that multiply team velocity. I don't just bridge strategy and execution—I engineer the infrastructure that makes them one.",
    roleTags: ["Leadership", "Product Management", "UX Design", "AI Automation", "MarTech", "Marketing Communications", "Systems", "Operations"],
    imageUrl: "profile_picture.png" 
  };

  const stats = [
    { value: "$1B+", label: "Platform Value" },
    { value: "$200M", label: "Value Realization" },
    { value: "200%", label: "Velocity Gain" },
    { value: "500x", label: "Insight Scale" },
    { value: "20yr", label: "Experience" }
  ];

  const journeyPoints = [
    { year: "2003", title: "Technical Foundation", desc: "Completed specialized Web Development & Graphic Design diploma at York Technology Institute.", icon: <BookOpen size={16} /> },
    { year: "2004", title: "Academic Excellence", desc: "Awarded Top GPA in Class (Webmaster Award), cementing a high-performance delivery mindset.", icon: <Award size={16} /> },
    { year: "2006", title: "Sprint: Digital Adoption", desc: "Joined Sprint as Product Manager. Optimized Wireless Web adoption, growing DAUs by 300k users.", icon: <Globe size={16} /> },
    { year: "2009", title: "The Design Pivot", desc: "Shifted to IT Project Manager & UX Designer. Designed enterprise care tools for 35k+ agents.", icon: <Layout size={16} /> },
    { year: "2011", title: "Verizon: CX Transformation", desc: "Joined Verizon to direct the My Verizon flagship mobile redesign, focusing on Design Thinking.", icon: <Briefcase size={16} /> },
    { year: "2014", title: "Financial Impact", desc: "Realized $30M in cost-savings through user journey optimization and iOS/Android feature parity.", icon: <Trophy size={16} /> },
    { year: "2016", title: "Leadership Scale", desc: "Appointed Lead Product Manager. Graduated with BA in Applied Organizational Leadership.", icon: <ShieldCheck size={16} /> },
    { year: "2018", title: "Marketing Architecture", desc: "Took ownership of the 'Engage' platform, delivering 250+ personalized global campaigns.", icon: <Layers size={16} /> },
    { year: "2020", title: "Catalyst Launch", desc: "Co-founded Catalyst Distribution Platform, generating over $1B in enterprise value.", icon: <Zap size={16} /> },
    { year: "2022", title: "Value Realization", desc: "Operationalized personalization roadmap resulting in $146M in direct realized revenue.", icon: <BarChart3 size={16} /> },
    { year: "2024", title: "The AI Transition", desc: "Appointed Associate Director. Pivoted systems toward Agentic AI and LLM orchestration.", icon: <Cpu size={16} /> },
    { year: "2025", title: "Velocity Multiplier", desc: "Current: Deploying compliant AI pipelines that multiply team velocity by 200%.", icon: <Sparkles size={16} /> }
  ];

  const caseStudies = useMemo(() => [
    {
      id: 1,
      title: "Generating $1B+ in Enterprise Value via Omnichannel Personalization",
      subtitle: "Catalyst Platform Architecture",
      tags: ["Product", "MarTech"],
      bluf: "Co-founded and co-architected a first-of-kind distribution engine that scaled hyper-personalized content to millions of customers.",
      why: "Marketing teams were trapped in manual distribution cycles and disconnected data silos, preventing real-time customer relevance at scale.",
      how: "Engineered a modular, zero-trust compliant MarTech infrastructure focused on technical interoperability and automated content orchestration.",
      skills: ["Systems Thinking", "Solution Engineering", "Agile", "Strategic Planning", "First Principles", "MarTech Architecture"],
      results: [
        { metric: "Total Value", outcome: "$1B+" },
        { metric: "Velocity Gain", outcome: "78%" },
        { metric: "Campaigns", outcome: "250+" }
      ]
    },
    {
      id: 2,
      title: "Realizing $30M in Operational Savings through CX Transformation",
      subtitle: "My Verizon Ecosystem Redesign",
      tags: ["Design / UX", "Product"],
      bluf: "Directed a top-to-bottom redesign of the flagship mobile experience, shifting app store sentiment from 2.0 to 4.5.",
      why: "Frictional user journeys and legacy UI were driving excessive support volume and significant customer retention costs.",
      how: "Applied Design Thinking and behavioral analytics to restructure core user flows and unify iOS/Android feature parity.",
      skills: ["Design Thinking", "UX Design", "Product Management", "Behavioral Analytics", "Cross-Platform Orchestration"],
      results: [
        { metric: "App Rating", outcome: "2 to 4.5" },
        { metric: "Cost Savings", outcome: "$30M" },
        { metric: "Engagement", outcome: "+45%" }
      ]
    },
    {
      id: 3,
      title: "Multiplying Team Velocity 200% with Agentic AI Pipelines",
      subtitle: "High-Velocity Workflow Automation",
      tags: ["AI / Automation", "MarTech"],
      bluf: "Deployed autonomous AI agents to manage complex financial and marketing operations, replacing 24/7 manual oversight.",
      why: "Traditional planning cycles and governance workflows were too slow to match the speed of global enterprise shifts.",
      how: "Developed compliant SaaS-to-SaaS LLM integrations to turn complex governance processes into a scalable, automated service.",
      skills: ["Agentic AI", "LLM Orchestration", "Process Engineering", "Workflow Automation", "Zero Trust", "Systems Analysis"],
      results: [
        { metric: "Staffing Waste", outcome: "-66%" },
        { metric: "Insight Scale", outcome: "500x" },
        { metric: "Velocity", outcome: "200%" }
      ]
    }
  ], []);

  const skillGroups = [
    {
      group: "Professional Tenure",
      icon: <Briefcase size={20} />,
      description: "Leadership and management roles held across Global 500 and high-growth enterprise sectors.",
      items: [
        { name: "Associate Director", what: "Senior-level strategic leadership & MarTech orchestration.", why: "To lead cross-functional teams in high-stakes environments where velocity and compliance must coexist.", how: "Directed MarTech AI Automation Systems & Operations at Verizon, leading a 24/7 global service management team." },
        { name: "Senior Manager", what: "Orchestrating complex product lifecycles and GTM strategies.", why: "To bridge the gap between high-level vision and tactical execution.", how: "Led Personalization Strategy at Verizon, operationalizing a roadmap that realized $146M in revenue." },
        { name: "Lead Product Manager", what: "Ownership of enterprise-scale platforms and feature sets.", why: "To ensure user-centric product development aligns with business financial goals.", how: "Served as Product Owner for the 'Engage' platform, delivering over 250 scalable marketing campaigns." },
        { name: "Senior Product & Project Manager", what: "Integrated management of technical development and operational workflows.", why: "To reduce friction in the product delivery lifecycle and optimize resource allocation.", how: "Directed the My Verizon redesign, managing deployment schedules for millions of active users." },
        { name: "UX Designer", what: "Human-centered systems and interface architecture.", why: "To transform low-performing applications into delightful, efficient tools that reduce support costs.", how: "Applied Design Thinking at Sprint to resolve 60 critical defects in under 90 days." },
        { name: "Product Manager", what: "Early-stage digital ecosystem expansion.", why: "To accelerate digital adoption through journey mapping and production workflow optimization.", how: "Accelerated Sprint Wireless Web adoption, growing DAUs from 500k to 800k through journey optimization." }
      ]
    },
    { 
      group: "Strategic Thinking", 
      icon: <Command size={20} />,
      description: "Foundational frameworks that move beyond generic management into architectural delivery.",
      items: [
        { name: "First Principles", what: "Deconstruction of complex problems to their core truths.", why: "To move beyond 'the way it's always been done' and reach objective efficiency.", how: "Applied during Verizon Finance planning transformation, replacing manual spreadsheets with an automated system of record." },
        { name: "Systems Thinking", what: "Holistic architectural interoperability.", why: "To ensure individual MarTech tools don't become expensive silos but rather a unified engine.", how: "Used to architect the Catalyst platform for enterprise-wide personalization distribution." },
        { name: "Agile Leadership", what: "Iterative value delivery with a bias toward action.", why: "To maintain momentum while navigating the friction of Global 500 governance.", how: "Operationalized personalized roadmaps that directly realized $146M in revenue." },
        { name: "Strategic Planning", what: "Long-term vision mapping for enterprise platforms.", why: "To ensure technical roadmaps anticipate future market shifts and scale requirements.", how: "Developed 3-year MarTech transformation strategies for Verizon's distribution engine." },
        { name: "Solution Engineering", what: "Designing technical fixes for business process friction.", why: "To reduce operational waste through automation and better data flow.", how: "Engineered first-of-kind compliant SaaS-to-SaaS integrations at Verizon." },
        { name: "SDLC Oversight", what: "Full-cycle software development management.", why: "To guarantee quality, compliance, and parity across platform deployments.", how: "Managed iOS and Android deployment schedules for millions of Verizon customers." }
      ] 
    },
    { 
      group: "AI & Automation", 
      icon: <Cpu size={20} />,
      items: [
        { name: "Agentic AI", what: "Autonomous workflow design using AI agents.", why: "To multiply team velocity by automating complex decision-making tasks.", how: "Engineered compliant SaaS integrations that allowed agents to manage 24/7 global service tasks." },
        { name: "LLM Orchestration", what: "Multi-model implementation for specialized tasks.", why: "To leverage the specific strengths of Gemini, ChatGPT, and Claude within a single enterprise pipeline.", how: "Created a cross-functional AI pipeline that increased team scalability by 500x." },
        { name: "Prompt Engineering", what: "Designing context windows for precise AI outputs.", why: "To maximize accuracy and minimize hallucination in enterprise AI workflows.", how: "Applied context engineering to financial planning models to automate system-of-record updates." },
        { name: "RAG Systems", what: "Retrieval-Augmented Generation for specialized datasets.", why: "To give AI agents access to secure, private documentation for more relevant answers.", how: "Evaluated and integrated vector database backends for internal compliance governance agents." },
        { name: "Vector Databases", what: "High-dimensional data storage for AI search and retrieval.", why: "To enable semantic search capabilities across large volumes of legacy enterprise data.", how: "Leveraged for knowledge grounding within internal AI operational pipelines." },
        { name: "Context Engineering", what: "Structuring environment data for LLMs.", why: "To ensure AI assistants have the exact persona and constraints required for enterprise tasks.", how: "Integrated into Verizon's AI-led financial planning shift." }
      ] 
    },
    {
      group: "Design & Prototype",
      icon: <Layout size={20} />,
      items: [
        { name: "Figma", what: "Collaborative interface design and rapid prototyping.", why: "To visualize user journeys and test functionality before engineering cycles begin.", how: "Used to iterate on core navigation flows during the My Verizon ecosystem redesign." },
        { name: "Sketch", what: "Vector-based digital design platform.", why: "To maintain high-fidelity design standards for mobile and web components.", how: "Leveraged for initial My Verizon redesign components before transitioning to cloud-based tools." },
        { name: "Adobe Illustrator", what: "Professional vector graphics creation.", why: "To produce scalable assets and iconography for global brand ecosystems.", how: "Applied to create specialized MarTech architecture diagrams and presentation artifacts." },
        { name: "Adobe Photoshop", what: "High-level raster image manipulation and UI refinement.", why: "To ensure every visual artifact meets global 500 brand standards.", how: "Used for detailed asset production across multiple digital marketing portfolios." },
        { name: "Lucid", what: "Enterprise-grade flow charting and systems mapping.", why: "To visualize complex MarTech distribution logic for engineering teams.", how: "Used to map the architecture of the Catalyst personalization distribution platform." },
        { name: "Design Thinking", what: "Problem-solving framework focused on user empathy.", why: "To identify real customer friction points that quantitative data might miss.", how: "Applied to turn low application sentiment (2.0) into delight (4.5) through top-down redesign." }
      ]
    },
    {
      group: "Productivity & Insights",
      icon: <BarChart3 size={20} />,
      items: [
        { name: "Adobe Analytics", what: "Behavioral data tracking and attribution.", why: "To base product roadmaps on actual user actions rather than assumptions.", how: "Directly used to identify drop-off points in the Verizon consumer app flow." },
        { name: "Adobe Workfront", what: "Project management for enterprise marketing operations.", why: "To centralize 24/7 global service management and reduce staffing waste.", how: "Optimized a global team's performance by reducing operational waste by 66%." },
        { name: "Tableau", what: "Data visualization for strategic reporting.", why: "To communicate complex metrics to SVP stakeholders.", how: "Created dashboards to track the billions in value generated by personalization distribution." },
        { name: "Google Looker", what: "Cloud-native business intelligence platform.", why: "To enable real-time data exploration across cross-functional enterprise teams.", how: "Leveraged for tracking velocity gains in AI-automated operational workflows." },
        { name: "JIRA", what: "Agile product and issue tracking system.", why: "To maintain development velocity and prioritize high-value feature sets.", how: "Used to resolve critical digital marketing portfolio defects in record time." },
        { name: "Notion", what: "Centralized knowledge management and documentation.", why: "To ensure cross-functional teams have a single source of truth for strategy.", how: "Utilized for internal team coordination and context grounding for agentic AI projects." }
      ]
    }
  ];

  const resumeData = {
    summary: "20 combined years in marketing, technical product management, marketing operations & leadership roles within high-scale Enterprise sectors (Global 500 & Fortune 50) driving nearly $200M in value realization. Co-founded ‘Catalyst’, Verizon’s omnichannel personalization distribution platform, resulting in over $1B in value.",
    pillars: [
        { label: "Analytical Drive", text: "Transforms insights into strategic intent, driving exponential revenue and velocity." },
        { label: "Engineering Mindset", text: "Constructs scalable solutions with predictive outcomes, bridging the complexity gap." },
        { label: "Global Leadership", text: "Orchestrates worldwide talent using coaching excellence to optimize communication." }
    ],
    experience: [
      {
        role: "Associate Director: MarTech AI Automation Systems & Operations",
        company: "Verizon",
        functionalTags: ["LEADERSHIP", "AI AUTOMATION", "GTM", "PROCESS ENGINEERING"],
        highlights: [
            { label: "200% Velocity Increase", text: "Transformed cross-functional implementation processes to improve scalability, functionality, speed & quality." },
            { label: "500x Scalability of Insights", text: "Directed execution of financial planning workflow shift to become an automated system of record." },
            { label: "66% Reduction in Staffing Waste", text: "Established and optimized a 24x7 enterprise global service management team leveraging Adobe Workfront." },
            { label: "First-of-Kind Compliance", text: "Led establishment of first compliant SaaS-to-SaaS integration, turning governance process into a service." },
            { label: "Engineered Business ROI", text: "Shifted organizational focus to measurable ROI by building a reporting model with audience-tailored outputs." },
        ]
      },
      {
        role: "Senior Manager: Personalization Strategy & Execution",
        company: "Verizon",
        functionalTags: ["STRATEGIC OPS", "PRODUCT MANAGEMENT", "MARTECH SYSTEMS", "LEADERSHIP", "PROCESS ENGINEERING"],
        highlights: [
            { label: "$1B+ Revenue Growth", text: "Co-Founded, Co-Architected & designed an enterprise marketing communications personalization distribution platform." },
            { label: "$146M Revenue Generated", text: "Operationalized personalization roadmap through data-driven prioritization, bridging the gap between idea and execution." },
            { label: "78% Velocity Improvement", text: "Transformed project lifecycle into a scalable, agile, and compliant framework, accelerating marketing deployments." },
            { label: "Systems & Governance Leadership", text: "Directed MarTech strategy, governance, risk, compliance layers to ensure auditable & scalable personalization." }
        ]
      },
      {
        role: "Lead Product Manager: Marketing Communications & Personalization",
        company: "Verizon",
        functionalTags: ["PRODUCT MANAGEMENT", "MARTECH SYSTEMS", "PERSONALIZATION", "MARKETING COMMS", "OPERATIONS"],
        highlights: [
            { label: "'Engage' MarTech Platform Ownership", text: "Served as Product Owner for the 'Engage' platform, architecting the bridge between business owners and engineering." },
            { label: "250+ Marketing Campaigns Delivered", text: "Led delivery of scalable marketing programming, balancing complex business logic with curated user experience." },
            { label: "$700K+ Revenue & Cost-Savings Realized", text: "Applied data-driven personalization practices into project lifecycle to increase marketing communication relevancy." },
            { label: "Framework Creation", text: "Established operational frameworks scaling personalization from a pilot program into a core business function." }
        ]
      },
      {
        role: "Product & Project Manager: Marketing Operations, UX Design & Strategy",
        company: "Verizon",
        functionalTags: ["PRODUCT MANAGEMENT", "PROJECT MANAGEMENT", "UX & DESIGN", "GTM", "DIGITAL MARKETING"],
        highlights: [
            { label: "2.0 to 4.5 App Store Rating", text: "Directed 'My Verizon' redesign, using user analytics to transform the customer experience and boost app ratings." },
            { label: "$30M Cost-Savings Realized", text: "Engineered scalable lifecycle process improvements using Design Thinking frameworks and structured data models." },
            { label: "Cross-Platform Orchestration", text: "Managed iOS and Android deployment schedules, ensuring feature parity and seamless updates for user bases." }
        ]
      },
      {
        role: "IT Project Manager & UX Designer: Digital Experience",
        company: "Sprint",
        functionalTags: ["PROJECT MANAGEMENT", "UX DESIGN", "SYSTEMS ANALYSIS", "ENTERPRISE SCALABILITY"],
        highlights: [
            { label: "Designed Customer Care Tool for 35,000+ Agents", text: "Designed and optimized enterprise Customer Care tool to reduce handle times and streamline call center operations." },
            { label: "Rapid Portfolio Stabilization", text: "Led Sprint Digital Marketing portfolio, resolving 60 critical defects in under 90 days." },
            { label: "Systems-Led Problem Solving", text: "Managed digital experience projects, translating business requirements into scalable and compliant technical execution." }
        ]
      },
      {
        role: "Product Manager: Digital Marketing Operations",
        company: "Sprint",
        functionalTags: ["PRODUCT MANAGEMENT", "PERSONALIZATION", "DIGITAL MARKETING", "PROCESS ENGINEERING"],
        highlights: [
            { label: "60% DAU Growth (500k to 800k)", text: "Accelerated Wireless Web adoption by optimizing marketing campaigns and user journey mapping for the digital ecosystem." },
            { label: "57% Time-to-Market Reduction", text: "Transformed production cycle workflows from 7 days to 3 days, expanding product launch capabilities." },
            { label: "Personalization SME", text: "Bridged the gap between engineering and marketing to define architectural requirements for early-stage personalization." },
            { label: "Strategic Product Launches", text: "Built and executed GTM strategies for Sprint Web Portal and OpenWeb, significantly expanding mobile digital offerings." }
        ]
      }
    ],
    skills: {
        concepts: ["Leadership", "Product Management", "UX Design", "AI Automation", "MarTech", "Systems Thinking", "Agile"],
        ai: ["Gemini", "ChatGPT", "LLM Orchestration", "Agentic AI", "Prompt Engineering"],
        design: ["Figma", "Adobe CC", "Sketch", "Design Thinking"],
        productivity: ["JIRA", "Workfront", "Tableau", "Looker", "Analytics"]
    },
    education: [
        { degree: "Bachelor of Arts, Applied Organizational Leadership", institution: "MidAmerica Nazarene University" },
        { degree: "Associates of Applied Science, Business Administration", institution: "Johnson County Community College" },
        { degree: "Diploma, Web Development & Graphic Design", institution: "York Technology Institute" }
    ],
    certifications: [
        { name: "Design Thinking Foundations", issuer: "VZ Learn" },
        { name: "Agile Product Owner", issuer: "VZ Learn" },
        { name: "Agile Mindset", issuer: "VZ Learn" }
    ],
    awards: [
        { name: "Power of Us Award: “Bias to Action”", issuer: "Verizon SVP" },
        { name: "25x Recipient: “Recognizing You”", issuer: "Leadership & Peers" },
        { name: "Top GPA in Class (Webmaster Award)", issuer: "York Technology Institute" }
    ],
    languages: [
        { name: "English", level: "Native" },
        { name: "Spanish", level: "Intermediate" },
        { name: "Japanese", level: "Beginner" }
    ]
  };

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter(study => study.tags.includes(activeFilter));
  }, [activeFilter, caseStudies]);

  // --- RENDERING HELPERS ---
  const renderIcon = (icon, size = 20) => {
    if (!icon) return null;
    return React.cloneElement(icon, { size });
  };

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} font-sans ${t.selection}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${t.glowPrimary} blur-[120px] rounded-full`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${t.glowSecondary} blur-[120px] rounded-full`} />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 text-left">
          <div className={`${t.navBg} backdrop-blur-xl border ${t.cardBorder} rounded-full px-6 py-3 flex justify-between items-center shadow-2xl`}>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`w-10 h-10 ${t.accentBg} rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg ${t.accentHover} transition-all active:scale-90`}
                aria-label="Go to top of page"
              >
                NL
              </button>
              <span className={`font-bold ${t.heading} tracking-tight text-sm uppercase`}>{heroData.h1}</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest">
              <a href="#journey" className={`transition-colors ${t.navHover}`}>Journey</a>
              <a href="#work" className={`transition-colors ${t.navHover}`}>Impact</a>
              <a href="#skills" className={`transition-colors ${t.navHover}`}>Skills</a>
              <a href="#foundations" className={`transition-colors ${t.navHover}`}>Foundations</a>
              <button onClick={() => setIsResumeOpen(true)} className={`${t.accentBg} text-white px-4 py-2 rounded-full ${t.accentHover} transition-all flex items-center gap-2 font-black shadow-lg`}>Resume</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 ${t.innerBg} border ${t.cardBorder} rounded-full transition-all ${t.muted} hover:${t.accentText} ${t.accentBorderHover} shadow-xl active:scale-90`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
            <button 
              className={`md:hidden ${t.heading}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[49] md:hidden ${t.modalBg} backdrop-blur-3xl p-6 pt-32 animate-in fade-in zoom-in duration-300`}>
          <div className="flex flex-col space-y-8 items-center text-center">
            {['journey', 'work', 'skills', 'foundations'].map((id) => (
              <a 
                key={id} 
                href={`#${id}`} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-bold uppercase tracking-widest ${t.heading} ${t.navHover} transition-all`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button 
              onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }} 
              className={`w-full max-w-xs ${t.accentBg} text-white px-6 py-4 rounded-2xl font-black text-lg shadow-xl ${t.accentHover} transition-all active:scale-95`}
            >
              RESUME
            </button>
            <div className={`w-full max-w-xs flex justify-between items-center p-4 ${t.innerBg} border ${t.cardBorder} rounded-2xl`}>
              <span className={`font-bold ${t.muted} uppercase tracking-widest text-xs`}>Theme Mode</span>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 ${t.bg} border ${t.cardBorder} rounded-xl ${t.accentText} shadow-inner active:scale-95 transition-all`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${t.innerBg} border ${t.itemBorder} text-[10px] font-bold uppercase tracking-[0.2em] ${t.accentText} mb-6`}>
              <Sparkles size={12} /> Strategic Ops & MarTech Leadership
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold ${t.heading} mb-6 tracking-tighter leading-none`}>{heroData.h1}</h1>
            <h2 className={`text-xl md:text-3xl font-medium ${t.subheading} mb-8 leading-tight`}>{heroData.h2}</h2>
            <p className={`text-base ${t.muted} mb-8 max-w-2xl leading-relaxed`}>{heroData.body}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {heroData.roleTags.map((tag, i) => (
                <div key={i} className={`px-3 py-1 ${t.innerBg} border ${t.itemBorder} rounded-full text-[10px] font-bold ${t.muted} uppercase tracking-widest text-center`}>{tag}</div>
              ))}
            </div>
            <a href="#work" className={`inline-flex items-center h-12 px-6 ${t.accentBg} text-white rounded-xl font-bold gap-2 ${t.accentHover} transition-all shadow-lg active:scale-95`}>
              Explore Impact <ArrowRight size={18} />
            </a>
          </div>
          <div className="flex-1 w-full max-sm relative group scale-90 md:scale-100">
            <div className={`absolute -inset-2 bg-gradient-to-tr ${t.logoGradient} rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700`}></div>
            <div className={`relative aspect-[4/5] w-full ${t.innerBg} border ${t.modalBorder} rounded-[3.5rem] overflow-hidden shadow-2xl`}>
              <img src={heroData.imageUrl} alt="Professional portrait of Nick LeBlanc" className={`w-full h-full object-cover transition-all duration-700 ${t.imgFilter} group-hover:grayscale-0`} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6 text-left">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className={`p-4 ${t.statsBg} border ${t.cardBorder} rounded-2xl backdrop-blur-sm ${t.cardHover} transition-all group flex flex-col items-center justify-center text-center`}>
              <div className={`text-xl font-bold ${t.heading} mb-1 group-hover:${t.accentText} transition-colors`}>{stat.value}</div>
              <div className={`text-[10px] font-bold ${t.mutedExtra} group-hover:${t.text}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className={`py-16 px-6 ${t.sectionBg} border-t ${t.cardBorder}`}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-12 text-center w-full">
            <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Strategic Journey</h2>
            <p className={`${t.muted} text-sm italic`}>Enterprise evolution and technical pivot.</p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-6 w-full max-w-2xl mb-12">
            <button 
              onClick={() => setActiveJourneyStep(prev => Math.max(0, prev - 1))}
              className={`h-12 px-6 rounded-full border ${t.itemBorder} flex items-center justify-center transition-all active:scale-95 ${t.accentBg} text-white font-black shadow-lg ${t.accentHover}`}
              disabled={activeJourneyStep === 0}
              aria-label="Previous career milestone"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
            
            <div className="flex-1 relative group py-4">
              <input 
                type="range" 
                min="0" 
                max={journeyPoints.length - 1} 
                value={activeJourneyStep} 
                onChange={(e) => setActiveJourneyStep(parseInt(e.target.value))}
                className={`w-full h-1.5 appearance-none rounded-full cursor-pointer transition-all ${t.itemBorder} border bg-transparent focus:outline-none ${isDarkMode ? 'accent-orange-600' : 'accent-blue-600'}`}
                aria-label="Career timeline scrub slider"
                style={{
                  background: `linear-gradient(to right, ${isDarkMode ? '#ea580c' : '#2563eb'} 0%, ${isDarkMode ? '#ea580c' : '#2563eb'} ${(activeJourneyStep / (journeyPoints.length - 1)) * 100}%, ${isDarkMode ? '#27272a' : '#e2e8f0'} ${(activeJourneyStep / (journeyPoints.length - 1)) * 100}%, ${isDarkMode ? '#27272a' : '#e2e8f0'} 100%)`
                }}
              />
            </div>

            <button 
              onClick={() => setActiveJourneyStep(prev => Math.min(journeyPoints.length - 1, prev + 1))}
              className={`h-12 px-6 rounded-full border ${t.itemBorder} flex items-center justify-center transition-all active:scale-95 ${t.accentBg} text-white font-black shadow-lg ${t.accentHover}`}
              disabled={activeJourneyStep === journeyPoints.length - 1}
              aria-label="Next career milestone"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="w-full max-w-4xl">
            <div className={`p-8 md:p-12 ${t.cardBg} border ${t.cardBorder} ${t.cardHover} rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group/card transition-all duration-500`}>
                <div className="relative flex flex-col items-center text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 w-full">
                        <div className={`w-16 h-16 ${t.bg} border ${t.itemBorder} rounded-2xl flex items-center justify-center ${t.accentText} shadow-inner shrink-0`}>
                          {React.cloneElement(journeyPoints[activeJourneyStep].icon, { size: 28 })}
                        </div>
                        <h3 className={`text-3xl md:text-5xl font-bold ${t.heading} tracking-tight leading-tight`}>{journeyPoints[activeJourneyStep].title}</h3>
                    </div>
                    <p className={`${t.text} text-lg md:text-xl leading-relaxed italic border-l-0 border-t-2 ${t.accentBorder} pt-8 mt-4 max-w-2xl`}>
                      &quot;{journeyPoints[activeJourneyStep].desc}&quot;
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Impact Section */}
      <section id="work" className={`pt-6 pb-12 px-6 ${t.statsBg}`}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-left">
            <div className="mb-8">
              <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Experience & Impact</h2>
              <p className={`${t.muted} text-sm italic`}>Quantifiable value delivery across product and design.</p>
            </div>
            <div className="flex justify-start">
              <div className={`flex flex-wrap gap-2 p-1 ${t.innerBg} border ${t.itemBorder} rounded-xl`}>
                {["All", "Product", "Design / UX", "AI / Automation"].map(f => (
                  <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-lg text-[10px] font-bold tracking-tight transition-all active:scale-95 ${activeFilter === f ? t.tabActive : t.tabInactive}`}>{f}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className={`relative ${t.cardBg} border ${t.cardBorder} ${t.cardHover} rounded-[2.5rem] overflow-hidden p-8 text-left transition-all`}>
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className={`${t.itemBg} ${t.accentText} rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest border ${t.itemBorder} w-fit text-center`}>{study.subtitle}</div>
                  <button 
                    onClick={() => setSelectedCaseStudy(study)} 
                    className={`w-10 h-10 flex items-center justify-center ${t.accentBg} text-white rounded-full transition-all shadow-lg active:scale-95 shrink-0 ${t.accentHover}`}
                    aria-label={`View ${study.title} case study`}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-4xl font-bold ${t.heading} mb-4 tracking-tight leading-tight`}>{study.title}</h3>
                    <p className={`${t.subheading} text-base font-medium border-l-2 ${t.accentBorder} pl-6 italic mb-4`}>{study.bluf}</p>
                  </div>
                  <div className="w-full md:w-40 shrink-0">
                    <div className={`p-3 md:p-4 ${t.itemBg} border ${t.itemBorder} rounded-2xl grid grid-cols-3 md:grid-cols-1 gap-2 md:space-y-4`}>
                        {study.results.map((r, i) => (
                          <div key={i} className="text-center">
                            <div className="text-[10px] md:text-[11px] uppercase font-bold text-zinc-600 mb-1">{r.metric}</div>
                            <div className={`text-xl md:text-2xl font-bold ${t.heading}`}>{r.outcome}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <section>
                    <div className={`text-[9px] font-black ${t.text} uppercase tracking-widest mb-2 flex items-center gap-2`}><Target size={12} className={t.accentText} /> Strategic Need (The Why)</div>
                    <p className={`${t.subheading} leading-relaxed`}>{study.why}</p>
                  </section>
                  <section>
                    <div className={`text-[9px] font-black ${t.text} uppercase tracking-widest mb-2 flex items-center gap-2`}><Workflow size={12} className={t.accentText} /> Method of Delivery (The How)</div>
                    <p className={`${t.subheading} leading-relaxed`}>{study.how}</p>
                  </section>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-left">
            <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Skills & Tools</h2>
            <p className={`${t.muted} text-sm italic`}>Technical ecosystems and multidisciplinary leadership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Professional Tenure Featured Card */}
            <div className={`md:col-span-2 p-8 ${t.cardBg} border ${t.cardBorder} rounded-[2rem] ${t.cardHover} transition-all`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 ${t.itemBg} border ${t.cardBorder} rounded-xl flex items-center justify-center ${t.accentText} shadow-inner`}><Briefcase size={18} /></div>
                  <h3 className={`text-xl font-black ${t.heading} uppercase tracking-widest`}>{skillGroups[0].group}</h3>
                </div>
                <p className={`${t.muted} text-sm leading-relaxed mb-6`}>{skillGroups[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillGroups[0].items.map((item, iIdx) => (
                    <button key={iIdx} onClick={() => setSelectedSkill(item)} className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-tight ${t.itemBg} border ${t.itemBorder} ${t.heading} hover:${t.accentText} ${t.accentBorderHover} transition-all shadow-md active:scale-95`}>{item.name}</button>
                  ))}
                </div>
            </div>
            {/* Grid Skills Cards */}
            {skillGroups.slice(1).map((group, gIdx) => (
              <div key={gIdx} className={`p-8 ${t.cardBg} border ${t.cardBorder} rounded-[2rem] ${t.cardHover} transition-all`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 ${t.itemBg} border ${t.cardBorder} rounded-xl flex items-center justify-center ${t.accentText} shadow-inner`}>
                      {renderIcon(group.icon, 18)}
                    </div>
                    <h3 className={`text-lg font-black ${t.heading} uppercase tracking-widest`}>{group.group}</h3>
                  </div>
                  <p className={`${t.muted} text-[13px] leading-relaxed mb-6`}>{group.description || "Core toolset for enterprise project delivery."}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <button key={iIdx} onClick={() => setSelectedSkill(item)} className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-tight ${t.itemBg} border ${t.itemBorder} ${t.heading} hover:${t.accentText} ${t.accentBorderHover} transition-all shadow-md active:scale-95`}>{item.name}</button>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundations Section */}
      <section id="foundations" className={`py-12 px-6 ${t.sectionBg} border-t ${t.cardBorder}`}>
        <div className="max-w-5xl mx-auto text-left">
          <div className="mb-12">
            <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Foundations</h2>
            <p className={`${t.muted} text-sm italic`}>Academic background, industry certifications, and key honors.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <section>
                <div className={`flex items-center gap-3 ${t.accentText} mb-6 font-black uppercase tracking-widest text-[10px]`}><BookOpen size={14} /> Education & Credentials</div>
                <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx}><div className={`${t.heading} font-bold tracking-tight text-sm`}>{edu.institution}</div><div className={`${t.muted} text-xs`}>{edu.degree}</div></div>
                  ))}
                </div>
              </section>

              {resumeData.certifications && (
                <section>
                  <div className={`flex items-center gap-3 ${t.accentText} mb-6 font-black uppercase tracking-widest text-[10px]`}><ShieldCheck size={14} /> Certifications</div>
                  <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx}><div className={`${t.heading} font-bold tracking-tight text-sm`}>{cert.name}</div><div className={`${t.muted} text-xs`}>{cert.issuer}</div></div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-12">
              <section>
                <div className={`flex items-center gap-3 ${t.accentText} mb-8 font-black uppercase tracking-widest text-[10px]`}><Award size={16} /> Key Honors</div>
                <div className="grid gap-4">
                  {resumeData.awards.map((award, idx) => (
                      <div key={idx} className={`p-6 ${t.statsBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} transition-all group`}>
                          <div className={`${t.heading} font-bold text-sm tracking-tight mb-2`}>{award.name}</div>
                          <div className={`${t.mutedExtra} text-[10px] font-medium`}>{award.issuer}</div>
                      </div>
                  ))}
                </div>
              </section>

              <section>
                <div className={`flex items-center gap-3 ${t.accentText} mb-8 font-black uppercase tracking-widest text-[10px]`}><Globe size={16} /> Languages</div>
                <div className="grid grid-cols-2 gap-4">
                  {resumeData.languages.map((lang, idx) => (
                    <div key={idx} className={`p-4 ${t.statsBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} transition-all text-left group`}>
                      <div className={`${t.heading} font-bold text-xs tracking-tight mb-1`}>{lang.name}</div>
                      <div className={`${t.mutedExtra} text-[10px] font-medium`}>{lang.level}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`pt-20 pb-8 px-6 border-t ${t.cardBorder} ${t.bg}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 mb-12">
            <div className="text-left">
              <h2 className={`text-4xl md:text-6xl font-bold ${t.heading} mb-6 tracking-tighter uppercase`}>Connect</h2>
              <div className="flex gap-4">
                <a href="mailto:leblancn876@gmail.com" className={`h-12 px-6 ${t.accentBg} text-white rounded-xl font-bold flex items-center gap-2 ${t.accentHover} transition-all shadow-lg active:scale-95`}><Mail size={16} /> Get in touch</a>
                <a href="https://linkedin.com/in/leblancns07" target="_blank" rel="noreferrer" className={`h-12 w-12 border ${t.itemBorder} rounded-xl flex items-center justify-center ${t.innerBg} transition-all ${t.heading} ${t.accentTextHover} ${t.accentBorderHover}`}><Linkedin size={18} /></a>
              </div>
            </div>

          </div>
          <div className={`pt-8 border-t ${t.cardBorder} text-[9px] font-bold uppercase tracking-widest ${t.mutedExtra} text-center md:text-left`}>© 2026 Nick LeBlanc — Senior Enterprise Leader</div>
        </div>
      </footer>

      {/* Resume Overlay */}
      {isResumeOpen && (
        <div className={`fixed inset-0 z-[110] ${t.modalBg} backdrop-blur-xl flex items-center justify-center p-4`}>
          <div className={`${t.modalCardBg} w-full max-w-4xl h-[90vh] rounded-[2.5rem] border ${t.modalBorder} shadow-2xl flex flex-col overflow-hidden`}>
            <div className={`p-8 border-b ${t.cardBorder} flex justify-between items-center shrink-0 text-left`}>
                <div><h2 className={`text-2xl font-bold ${t.heading} tracking-tight`}>Full Resume</h2><p className={`${t.accentText} font-bold text-[9px] uppercase tracking-widest mt-1 text-left`}>Nick LeBlanc • Systems Architecture & Strategy</p></div>
                <button 
                  onClick={() => setIsResumeOpen(false)} 
                  className={`p-3 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95`}
                  aria-label="Close resume"
                >
                  <X size={18} />
                </button>
            </div>
            <div className="flex-grow overflow-y-auto p-8 space-y-12 scrollbar-hide text-left">
                <section>
                    <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-6 flex items-center gap-2`}><Target size={14} className={t.accentText} /> Executive Summary</div>
                    <p className={`text-lg ${t.subheading} leading-relaxed font-medium border-l-2 ${t.accentBorder} pl-6`}>&quot;{resumeData.summary}&quot;</p>
                </section>
                <section>
                    <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Briefcase size={14} className={t.accentText} /> Experience</div>
                    <div className="space-y-10">
                        {resumeData.experience.map((exp, i) => (
                            <div key={i} className={`group border-l ${t.itemBorder} pl-6 relative`}>
                                <div className={`absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full ${t.itemBorder} border-2 ${t.modalCardBg} group-hover:${t.accentBg} transition-colors`} />
                                <h4 className={`${t.heading} font-bold text-base leading-tight mb-1`}>{exp.role}</h4>
                                <div className={`${t.accentText} font-bold text-[10px] uppercase mb-4 tracking-widest`}>{exp.company}</div>
                                <ul className="space-y-4">
                                    {exp.highlights.map((h, j) => (
                                        <li key={j} className={`${t.text} text-[13px] leading-relaxed flex items-start gap-3`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${t.accentBg} mt-1.5 shrink-0`} /> 
                                            <div>
                                              <strong className={`${t.heading} block mb-1 uppercase tracking-tight text-[11px]`}>{h.label}:</strong>
                                              <span className={t.subheading}>{h.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Cpu size={14} className={t.accentText} /> Multi-Disciplinary Skills</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(resumeData.skills).map(([key, items]) => (
                            <div key={key} className={`border-l ${t.itemBorder} pl-6`}>
                                <h5 className={`${t.heading} font-bold text-[9px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}><span className={`w-1.5 h-1.5 ${t.accentBg} rounded-full`} />{key.toUpperCase()}</h5>
                                <div className="flex flex-wrap gap-2">
                                  {items.map((s, idx) => (<span key={idx} className={`px-3 py-1 ${t.innerBg} border ${t.cardBorder} ${t.text} text-[11px] font-bold rounded-full`}>{s}</span>))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><BookOpen size={14} className={t.accentText} /> Education & Credentials</div>
                    <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx}>
                                <div className={`${t.heading} font-bold tracking-tight text-sm`}>{edu.institution}</div>
                                <div className={`${t.muted} text-xs`}>{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
                {resumeData.certifications && (
                  <section>
                      <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><ShieldCheck size={14} className={t.accentText} /> Certifications</div>
                      <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                          {resumeData.certifications.map((cert, idx) => (
                              <div key={idx}>
                                  <div className={`${t.heading} font-bold tracking-tight text-sm`}>{cert.name}</div>
                                  <div className={`${t.muted} text-xs`}>{cert.issuer}</div>
                              </div>
                          ))}
                      </div>
                  </section>
                )}
                {resumeData.awards && (
                  <section>
                      <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Award size={14} className={t.accentText} /> Key Honors</div>
                      <div className="grid md:grid-cols-2 gap-4">
                          {resumeData.awards.map((award, idx) => (
                              <div key={idx} className={`p-6 ${t.innerBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} group transition-all text-left`}>
                                  <div className={`${t.heading} font-bold text-sm tracking-tight mb-2`}>{award.name}</div>
                                  <div className={`${t.mutedExtra} text-[11px] font-medium`}>{award.issuer}</div>
                              </div>
                          ))}
                      </div>
                  </section>
                )}
                {resumeData.languages && (
                  <section>
                      <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Globe size={14} className={t.accentText} /> Languages</div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {resumeData.languages.map((lang, idx) => (
                              <div key={idx} className={`p-6 ${t.innerBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} group transition-all text-left`}>
                                  <div className={`${t.heading} font-bold text-sm tracking-tight mb-1`}>{lang.name}</div>
                                  <div className={`${t.mutedExtra} text-[11px] font-medium`}>{lang.level}</div>
                              </div>
                          ))}
                      </div>
                  </section>
                )}
            </div>
          </div>
        </div>
      )}

      {/* Artifact Overlay */}
      {selectedSkill && (
        <div className={`fixed inset-0 z-[101] ${t.modalBgAlt} backdrop-blur-md flex items-center justify-center p-4`}>
          <div className={`${t.modalCardBg} w-full max-w-xl rounded-[2.5rem] overflow-hidden border ${t.modalBorder} shadow-2xl relative text-left`}>
            <button 
              onClick={() => setSelectedSkill(null)} 
              className={`absolute top-6 right-6 p-2 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95`}
              aria-label="Close artifact details"
            >
              <X size={18} />
            </button>
            <div className="p-10">
               <div className={`${t.accentText} font-black uppercase tracking-[0.3em] text-[9px] mb-3`}>Strategic Artifact</div>
               <h2 className={`text-3xl font-bold ${t.heading} mb-8 tracking-tight`}>{selectedSkill.name}</h2>
               <div className="space-y-8">
                 <section className="flex gap-5"><div className={`w-10 h-10 ${t.itemBg} border ${t.itemBorder} rounded-xl flex items-center justify-center shrink-0`}><BarChart3 size={20} className={t.accentText} /></div><div><div className={`text-[9px] font-black ${t.muted} uppercase tracking-widest mb-1`}>Executive Summary (The What)</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedSkill.what}</p></div></section>
                 <section className="flex gap-5"><div className={`w-10 h-10 ${t.itemBg} border ${t.itemBorder} rounded-xl flex items-center justify-center shrink-0`}><Target size={20} className={t.accentText} /></div><div><div className={`text-[9px] font-black ${t.muted} uppercase tracking-widest mb-1`}>Strategic Need (The Why)</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedSkill.why}</p></div></section>
                 <section className="flex gap-5"><div className={`w-10 h-10 ${t.itemBg} border ${t.itemBorder} rounded-xl flex items-center justify-center shrink-0`}><Workflow size={20} className={t.accentText} /></div><div><div className={`text-[9px] font-black ${t.muted} uppercase tracking-widest mb-1`}>Method of Delivery (The How)</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedSkill.how}</p></div></section>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className={`fixed inset-0 z-[100] ${t.modalBgAlt} backdrop-blur-xl flex items-center justify-center p-4`}>
          <div className={`${t.modalCardBg} w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] overflow-hidden flex flex-col border ${t.modalBorder} shadow-2xl text-left`}>
            <div className="p-8 overflow-y-auto scrollbar-hide">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className={`${t.modalCardBg} ${t.accentText} rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest border ${t.itemBorder} mb-4 inline-block`}>{selectedCaseStudy.subtitle}</div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${t.heading} tracking-tight`}>{selectedCaseStudy.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedCaseStudy(null)} 
                  className={`p-3 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95`}
                  aria-label="Close case study"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-12">
                <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><BarChart3 size={14} className={t.accentText} /> Executive Summary (The What)</div><p className={`${t.subheading} text-lg leading-relaxed italic border-l-2 ${t.accentBorder} pl-6`}>{selectedCaseStudy.bluf}</p></section>
                
                <section>
                  <div className={`p-6 md:p-8 ${t.statsBg} border ${t.cardBorder} rounded-2xl`}>
                    <div className="flex items-center gap-2 justify-center mb-8"><Trophy size={14} className={t.accentText} /><h4 className={`text-[9px] font-black uppercase tracking-widest ${t.muted}`}>Core Metrics</h4></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {selectedCaseStudy.results.map((r, i) => (
                        <div key={i} className="text-center">
                          <div className="text-[11px] uppercase font-bold text-zinc-600 mb-1">{r.metric}</div>
                          <div className={`text-3xl md:text-3xl font-bold ${t.heading}`}>{r.outcome}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><Target size={14} className={t.accentText} /> Strategic Need (The Why)</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedCaseStudy.why}</p></section>
                <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><Workflow size={14} className={t.accentText} /> Method of Delivery (The How)</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedCaseStudy.how}</p></section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
