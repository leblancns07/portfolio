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
  Workflow
} from 'lucide-react';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeJourneyStep, setActiveJourneyStep] = useState(11); 

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
        { metric: "App Rating", outcome: "2.0 → 4.5" },
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
            { label: "66% Reduction in Staffing Waste", text: "Established and optimized a 24x7 enterprise global service management team leveraging Adobe Workfront." }
        ]
      },
      {
        role: "Senior Manager: Personalization Strategy & Execution",
        company: "Verizon",
        functionalTags: ["LEADERSHIP", "STRATEGY", "REVENUE GROWTH"],
        highlights: [
            { label: "$1B+ Revenue Growth", text: "Co-Founded, Co-Architected & designed an enterprise marketing communications personalization distribution platform." },
            { label: "$146M Revenue Generated", text: "Operationalized personalization roadmap through data-driven prioritization." }
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
        { degree: "Diploma, Web Development & Graphic Design", institution: "York Technology Institute" }
    ],
    awards: [
        { name: "Power of Us Award: “Bias to Action”", issuer: "Verizon SVP" },
        { name: "25x Recipient: “Recognizing You”", issuer: "Leadership & Peers" }
    ],
    languages: [
        { name: "English", level: "Native" },
        { name: "Spanish", level: "Intermediate" }
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
    <div className="min-h-screen bg-zinc-950 text-zinc-400 font-sans selection:bg-orange-600/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 text-left">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-tr from-orange-600 to-orange-700 rounded-lg flex items-center justify-center text-white font-black text-xs">NL</div>
              <span className="font-bold text-zinc-100 tracking-tight text-sm uppercase">{heroData.h1}</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest">
              <a href="#journey" className="hover:text-white transition-colors">Journey</a>
              <a href="#work" className="hover:text-white transition-colors">Impact</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#foundations" className="hover:text-white transition-colors">Foundations</a>
              <button onClick={() => setIsResumeOpen(true)} className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-all flex items-center gap-2 font-black shadow-lg">Resume</button>
            </div>
            <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-6">
              <Sparkles size={12} /> Strategic Ops & MarTech Leadership
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tighter leading-none">{heroData.h1}</h1>
            <h2 className="text-xl md:text-3xl font-medium text-zinc-300 mb-8 leading-tight">{heroData.h2}</h2>
            <p className="text-base text-zinc-500 mb-8 max-w-2xl leading-relaxed">{heroData.body}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {heroData.roleTags.map((tag, i) => (
                <div key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{tag}</div>
              ))}
            </div>
            <a href="#work" className="inline-flex items-center h-12 px-6 bg-orange-600 text-white rounded-xl font-bold gap-2 hover:bg-orange-500 transition-all shadow-lg active:scale-95">
              Explore Impact <ArrowRight size={18} />
            </a>
          </div>
          <div className="flex-1 w-full max-w-sm relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-orange-600 to-orange-900 rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative aspect-[4/5] w-full bg-zinc-900 border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl">
              <img src={heroData.imageUrl} alt="Nick" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm group hover:border-orange-500/30 transition-all">
              <div className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-orange-500 transition-colors">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-widest font-black text-zinc-600 group-hover:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold text-zinc-100 mb-2 tracking-tight uppercase">Strategic Journey</h2>
            <p className="text-zinc-500 text-sm italic">Enterprise evolution and technical pivot.</p>
          </div>
          <div className="relative flex flex-col md:flex-row gap-8 text-left">
            <div className="relative w-12 shrink-0 flex justify-center">
                <div className="absolute top-0 bottom-0 w-px bg-zinc-800" />
                <div className="relative h-full flex flex-col justify-between py-2">
                    {journeyPoints.map((point, i) => (
                        <button key={i} onClick={() => setActiveJourneyStep(i)} className={`group relative z-10 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${activeJourneyStep === i ? 'bg-orange-600 border-orange-500 scale-110 shadow-lg' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-500'}`}>
                            <div className={`text-[8px] font-black ${activeJourneyStep === i ? 'text-white' : 'text-zinc-600'}`}>{point.year.slice(-2)}</div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <div className="sticky top-24 p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] shadow-xl min-h-[240px] flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-orange-500">{journeyPoints[activeJourneyStep].icon}</div>
                        <div>
                            <div className="text-orange-500 font-black uppercase tracking-[0.2em] text-[9px] mb-1">{journeyPoints[activeJourneyStep].year} Milestone</div>
                            <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">{journeyPoints[activeJourneyStep].title}</h3>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed border-l-2 border-orange-600/50 pl-6 italic">&quot;{journeyPoints[activeJourneyStep].desc}&quot;</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Impact Section */}
      <section id="work" className="py-12 px-6 bg-zinc-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 text-left">
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-2 tracking-tight uppercase">Experience & Impact</h2>
              <p className="text-zinc-500 text-sm italic">Systems architecture with measurable value.</p>
            </div>
            <div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              {["All", "Product", "Design / UX", "AI / Automation"].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-tight transition-all active:scale-95 ${activeFilter === f ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden p-8 text-left">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-zinc-950 text-orange-500 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest border border-zinc-800">{study.subtitle}</div>
                  <button onClick={() => setSelectedCaseStudy(study)} className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group/btn hover:border-orange-500 transition-all active:scale-95">
                    <ArrowRight size={18} className="text-zinc-400 group-hover/btn:text-orange-500 transition-all" />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 tracking-tight leading-tight">{study.title}</h3>
                    <p className="text-zinc-300 text-base font-medium border-l-2 border-orange-600 pl-6 italic mb-8">{study.bluf}</p>
                  </div>
                  <div className="w-full md:w-40 shrink-0">
                    <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
                        {study.results.map((r, i) => (
                          <div key={i} className="text-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <div className="text-[8px] uppercase font-bold text-zinc-600 mb-1">{r.metric}</div>
                            <div className="text-lg font-bold text-zinc-100">{r.outcome}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <section>
                    <div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Target size={12} className="text-orange-500" /> Strategic Need (The Why)</div>
                    <p className="text-zinc-300 leading-relaxed">{study.why}</p>
                  </section>
                  <section>
                    <div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Workflow size={12} className="text-orange-500" /> Method of Delivery (The How)</div>
                    <p className="text-zinc-300 leading-relaxed">{study.how}</p>
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
          <h2 className="text-3xl font-bold text-zinc-100 mb-10 tracking-tight uppercase text-left">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Professional Tenure Featured Card */}
            <div className="md:col-span-2 p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-orange-500/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-zinc-950 border border-white/5 rounded-xl flex items-center justify-center text-orange-500 shadow-inner"><Briefcase size={18} /></div>
                  <h3 className="text-xl font-black text-zinc-100 uppercase tracking-widest">{skillGroups[0].group}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{skillGroups[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillGroups[0].items.map((item, iIdx) => (
                    <button key={iIdx} onClick={() => setSelectedSkill(item)} className="px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-tight bg-zinc-950 border border-zinc-800 text-zinc-100 hover:border-orange-500 transition-all shadow-md active:scale-95">{item.name}</button>
                  ))}
                </div>
            </div>
            {/* Grid Skills Cards */}
            {skillGroups.slice(1).map((group, gIdx) => (
              <div key={gIdx} className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-orange-500/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-zinc-950 border border-white/5 rounded-xl flex items-center justify-center text-orange-500 shadow-inner">
                      {renderIcon(group.icon, 18)}
                    </div>
                    <h3 className="text-lg font-black text-zinc-100 uppercase tracking-widest">{group.group}</h3>
                  </div>
                  <p className="text-zinc-500 text-[13px] leading-relaxed mb-6">{group.description || "Core toolset for enterprise project delivery."}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <button key={iIdx} onClick={() => setSelectedSkill(item)} className="px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-tight bg-zinc-950 border border-zinc-800 text-zinc-100 hover:border-orange-500 transition-all shadow-md active:scale-95">{item.name}</button>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundations Section */}
      <section id="foundations" className="py-10 px-6 bg-zinc-900/10">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight uppercase">Foundations</h2>
          <div className="flex items-center gap-3 text-orange-500 mb-6 font-black uppercase tracking-widest text-[10px]"><BookOpen size={14} /> Education & Credentials</div>
          <div className="space-y-6 border-l border-zinc-800 pl-6">
            {resumeData.education.map((edu, idx) => (
              <div key={idx}><div className="text-zinc-100 font-bold tracking-tight text-sm">{edu.institution}</div><div className="text-zinc-500 text-xs">{edu.degree}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section id="honors" className="py-10 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex items-center gap-3 text-orange-500 mb-8 font-black uppercase tracking-widest text-[10px]"><Award size={16} /> Key Honors</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.awards.map((award, idx) => (
                <div key={idx} className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 group hover:border-orange-500/20 transition-all">
                    <div className="text-zinc-100 font-bold text-sm tracking-tight mb-2">{award.name}</div>
                    <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{award.issuer}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-20 pb-8 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6 tracking-tighter uppercase">Connect</h2>
              <div className="flex gap-4">
                <a href="mailto:leblancn876@gmail.com" className="h-12 px-6 bg-orange-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-orange-500 transition-all shadow-lg active:scale-95"><Mail size={16} /> Get in touch</a>
                <a href="https://linkedin.com/in/leblancns07" target="_blank" rel="noreferrer" className="h-12 w-12 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-900 transition-all text-zinc-100"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="md:text-right">
              <div className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Location</div>
              <div className="text-zinc-100 font-bold uppercase tracking-widest text-base flex items-center gap-2 md:justify-end">Olathe, Kansas <Globe size={16} className="text-orange-500" /></div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-[9px] font-bold uppercase tracking-widest text-zinc-600 text-center md:text-left">© 2026 Nick LeBlanc — Senior Enterprise Leader</div>
        </div>
      </footer>

      {/* Resume Overlay */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-zinc-950 w-full max-w-4xl h-[90vh] rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center shrink-0 text-left">
                <div><h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Full Resume</h2><p className="text-orange-500 font-bold text-[9px] uppercase tracking-widest mt-1 text-left">Nick LeBlanc • Systems Architecture & Strategy</p></div>
                <button onClick={() => setIsResumeOpen(false)} className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all text-zinc-100 active:scale-95"><X size={18} /></button>
            </div>
            <div className="flex-grow overflow-y-auto p-8 space-y-12 scrollbar-hide text-left">
                <section>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-6 flex items-center gap-2"><Target size={14} className="text-orange-500" /> Executive Summary</div>
                    <p className="text-lg text-zinc-300 leading-relaxed font-medium border-l-2 border-orange-600 pl-6">&quot;{resumeData.summary}&quot;</p>
                </section>
                <section>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-2"><Briefcase size={14} className="text-orange-500" /> Experience</div>
                    <div className="space-y-10">
                        {resumeData.experience.map((exp, i) => (
                            <div key={i} className="group border-l border-zinc-800 pl-6 relative">
                                <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-orange-500 transition-colors" />
                                <h4 className="text-zinc-100 font-bold text-base leading-tight mb-1">{exp.role}</h4>
                                <div className="text-orange-500 font-bold text-[10px] uppercase mb-4 tracking-widest">{exp.company}</div>
                                <ul className="space-y-4">
                                    {exp.highlights.map((h, j) => (
                                        <li key={j} className="text-zinc-400 text-[13px] leading-relaxed flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" /> 
                                            <div>
                                              <strong className="text-zinc-100 block mb-1 uppercase tracking-tight text-[11px]">{h.label}:</strong>
                                              <span className="text-zinc-300">{h.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-2"><Cpu size={14} className="text-orange-500" /> Multi-Disciplinary Skills</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(resumeData.skills).map(([key, items]) => (
                            <div key={key} className="border-l border-zinc-800 pl-6">
                                <h5 className="text-zinc-100 font-bold text-[9px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full" />{key.toUpperCase()}</h5>
                                <div className="flex flex-wrap gap-2">
                                  {items.map((s, idx) => (<span key={idx} className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-400 text-[9px] font-bold rounded-full">{s}</span>))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-2"><BookOpen size={14} className="text-orange-500" /> Education & Credentials</div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx} className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 group hover:border-orange-500/20 transition-all text-left">
                                <div className="text-zinc-100 font-bold text-sm tracking-tight mb-2">{edu.degree}</div>
                                <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{edu.institution}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
          </div>
        </div>
      )}

      {/* Artifact Overlay */}
      {selectedSkill && (
        <div className="fixed inset-0 z-[101] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-950 w-full max-w-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative text-left">
            <button onClick={() => setSelectedSkill(null)} className="absolute top-6 right-6 p-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all text-zinc-100 active:scale-95"><X size={18} /></button>
            <div className="p-10">
               <div className="text-orange-500 font-black uppercase tracking-[0.3em] text-[9px] mb-3">Strategic Artifact</div>
               <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">{selectedSkill.name}</h2>
               <div className="space-y-8">
                 <section className="flex gap-5"><div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0"><BarChart3 size={20} className="text-orange-500" /></div><div><div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Executive Summary (The What)</div><p className="text-zinc-300 text-base leading-relaxed">{selectedSkill.what}</p></div></section>
                 <section className="flex gap-5"><div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0"><Target size={20} className="text-orange-500" /></div><div><div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Strategic Need (The Why)</div><p className="text-zinc-300 text-base leading-relaxed">{selectedSkill.why}</p></div></section>
                 <section className="flex gap-5"><div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0"><Workflow size={20} className="text-orange-500" /></div><div><div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Method of Delivery (The How)</div><p className="text-zinc-300 text-base leading-relaxed">{selectedSkill.how}</p></div></section>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-zinc-950 w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] overflow-hidden flex flex-col border border-white/10 shadow-2xl text-left">
            <div className="p-8 overflow-y-auto scrollbar-hide">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="bg-zinc-950 text-orange-500 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest border border-zinc-800 mb-4 inline-block">{selectedCaseStudy.subtitle}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">{selectedCaseStudy.title}</h2>
                </div>
                <button onClick={() => setSelectedCaseStudy(null)} className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all text-zinc-100 active:scale-95"><X size={20} /></button>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                  <section><div className="flex items-center gap-3 text-zinc-400 mb-4 font-black uppercase tracking-widest text-[10px]"><BarChart3 size={14} className="text-orange-500" /> Executive Summary (The What)</div><p className="text-zinc-300 text-lg leading-relaxed italic border-l-2 border-orange-600 pl-6">{selectedCaseStudy.bluf}</p></section>
                  <section><div className="flex items-center gap-3 text-zinc-400 mb-4 font-black uppercase tracking-widest text-[10px]"><Target size={14} className="text-orange-500" /> Strategic Need (The Why)</div><p className="text-zinc-300 text-base leading-relaxed">{selectedCaseStudy.why}</p></section>
                  <section><div className="flex items-center gap-3 text-zinc-400 mb-4 font-black uppercase tracking-widest text-[10px]"><Workflow size={14} className="text-orange-500" /> Method of Delivery (The How)</div><p className="text-zinc-300 text-base leading-relaxed">{selectedCaseStudy.how}</p></section>
                </div>
                <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-8">
                  <div className="flex items-center gap-2 justify-center mb-2"><Trophy size={14} className="text-orange-500" /><h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Core Metrics</h4></div>
                  {selectedCaseStudy.results.map((r, i) => (
                    <div key={i} className="text-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-[9px] uppercase font-bold text-zinc-600 mb-1">{r.metric}</div>
                      <div className="text-3xl font-bold text-zinc-100">{r.outcome}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
