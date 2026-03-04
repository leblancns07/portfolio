
import { 
  Trophy,
  Zap,
  Cpu,
  Layout,
  BarChart3,
  Layers,
  Sparkles,
  Command,
  BookOpen,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

export const heroData = {
  h1: "Nick LeBlanc",
  h2: "I bring together product, marketing, and engineering to build systems at scale.",
  body: "I have 20 years of enterprise experience across Global 500 organizations. I am a co-founder & the designer of platforms generating over $1B in value. I direct automation initiatives to multiply team velocity. I synthesize thinking frameworks to build impactful outcomes.",
  roleTags: ["Leadership", "Product", "UX/Design", "MarTech", "AI/Automation", "MarComm", "Process", "Operations"],
  imageUrl: "/profile_picture.png",
  whyMeText: "At my core, I care.\n\n I care about people, integrity, and purpose.\n\n I am a strategic thought leader focused on people-first values and innovation. It is my goal to help people feel connected through the tools they use, becoming advocates themselves.\n\n I study complexity to share simplicity. I believe sharing builds community. Become a trusted advocate for the user, grow their confidence, and everyone wins.\n\n I take pride in learning the functional areas that surround me. I have found that when the spokes are stronger, the wheel rolls better."
};

export const stats = [
  { value: "$1B+", label: "Platform Value" },
  { value: "$200M", label: "Project Value" },
  { value: "200%", label: "Velocity Gain" },
  { value: "500x", label: "Insight Scale" },
  { value: "20yr", label: "Experience" }
];

export const journeyPoints = [
  { year: "2004", title: "Technical Foundation", desc: "Began journey as a designer and developer. Awarded Top GPA in Class.", icon: <BookOpen size={16} /> },
  { year: "2006", title: "Sprint: Digital Ownership", desc: "Product Managed mobile web experience, building and deploying marketing campaigns.", icon: <Briefcase size={16} /> },
  { year: "2009", title: "The First Pivot", desc: "Shifted to Project Manager & UX Designer, creating enterprise care tools for agents and managing enterprise projects.", icon: <Sparkles size={16} /> },
  { year: "2011", title: "Verizon: CX Growth", desc: "Joined Verizon as UX Designer, Project Manager, and Product Owner, growing my skills.", icon: <Briefcase size={16} /> },
  { year: "2014", title: "The App Redesign", desc: "Analyzed, redesigned, and launched My Verizon App based on how customers used it.", icon: <Trophy size={16} /> },
  { year: "2016", title: "Leadership Foundation", desc: "Received BA in Applied Organizational Leadership emphasizing conflict resolution.", icon: <BookOpen size={16} /> },
  { year: "2016", title: "Beginning to Lead", desc: "Appointed Lead Product Manager, where I would create and orchestrate marketing communications.", icon: <ShieldCheck size={16} /> },
  { year: "2017", title: "The Second Pivot", desc: "Became a MarTech SME, building out personalization capabilities and processes.", icon: <Sparkles size={16} /> },
  { year: "2018", title: "Marketing Architecture", desc: "Launched 'Engage', the first version of an internal at-scale personalization CRM.", icon: <Layers size={16} /> },
  { year: "2019", title: "The Defining Moment", desc: "Co-founded, co-architected, and designed Catalyst, an enterprise omnichannel personalization distribution platform.", icon: <Zap size={16} /> },
  { year: "2020", title: "Leading the Charge", desc: "Promoted to Senior Manager, focused on operationalizing processes and personalization systems.", icon: <ShieldCheck size={16} /> },
  { year: "2022", title: "The Third Pivot", desc: "Process Engineered implementation process and operational model to scale personalization across the enterprise.", icon: <Sparkles size={16} /> },
  { year: "2024", title: "The Fourth Pivot", desc: "Promoted to Associate Director, combining all of my previous experiences into one role.", icon: <Sparkles size={16} /> }
];

export const caseStudies = [
  {
      id: 1,
      headline: "Velocity Acceleration via Automation-Led Pipelines",
      tags: ["Leadership", "Process", "Operations"],
      fundamentalQuestion: "How can we do in minutes what currently takes us days?",
      problemStatement: "Fragmented handoffs and manual approval layers created a \"wait-state\" culture that stalled campaign delivery.",
      how: "I architected an automated delivery pipeline using automation-driven triggers to eliminate manual intervention and directed the technical logic for autonomous decision-making across teams.",
      whyImportant: "200% velocity gains with zero headcount growth allow the business to capture market share before opportunities expire.",
      results: [
        { metric: "Velocity", outcome: "200% Increase" },
        { metric: "Human Overhead", outcome: "0% Growth" },
        { metric: "Cross-functional Handoffs", outcome: "100% Automated" }
      ]
    },
    {
      id: 2,
      headline: "Insights at Scale: Automation Data Engine",
      tags: ["AI/Automation", "Process", "Operations"],
      fundamentalQuestion: "What is the one piece of information that actually changes our minds?",
      problemStatement: "Manual finance planning was too slow and reactive to guide high-velocity enterprise strategy.",
      how: "I applied First Principles Thinking to strip the process to its core data needs and had it rebuilt as a scalable backend engine, serving as the director for the system transition.",
      whyImportant: "500x processing at $0 labor cost turns data into a real-time asset for proactive decisions.",
      results: [
        { metric: "Processing Capacity", outcome: "500x Increase" },
        { metric: "Manual Labor", outcome: "$0" },
        { metric: "Insight Availability", outcome: "Real-time" }
      ]
    },
    {
      id: 3,
      headline: "Slashing Waste: A Leaner Global Operation",
      tags: ["Leadership", "Operations", "MarTech"],
      fundamentalQuestion: "How do we make sure our best people are working on our biggest problems?",
      problemStatement: "Global teams lacked centralized oversight, leading to resource overlap and significant staffing waste.",
      how: "I optimized operations using a global service management model within Adobe Workfront, balancing speed and risk to ensure high-quality, continuous delivery across all time zones.",
      whyImportant: "Slashing waste while expanding to 24/7 support ensures talent focus is on high-value output.",
      results: [
        { metric: "Staffing Waste", outcome: "66% Reduction" },
        { metric: "Operation Support", outcome: "24/7" },
        { metric: "Resource Visibility", outcome: "100% Centralized" }
      ]
    },
    {
      id: 4,
      headline: "Breaking Down Walls: First Compliant SaaS-to-SaaS",
      tags: ["MarTech", "Operations", "Process"],
      fundamentalQuestion: "Can we make the 'right way' the 'easiest way' by building it into the system?",
      problemStatement: "Manual compliance reviews were a major bottleneck that delayed modern cloud-to-cloud technical integrations.",
      how: "I led the first compliant SaaS-to-SaaS integration by embedding risk checks directly into the technical layer, turning a gatekeeper process into a self-service enabler.",
      whyImportant: "Turning governance into a service allows for rapid innovation without compromising security.",
      results: [
        { metric: "Compliance Delay", outcome: "0%" },
        { metric: "Audit Pass Rate", outcome: "100%" },
        { metric: "Governance Efficiency", outcome: "First-of-Kind" }
      ]
    },
    {
      id: 5,
      headline: "Scaling MarComm: $1B Growth Platform",
      tags: ["Leadership", "Product", "MarComm", "MarTech"],
      fundamentalQuestion: "How do we make sure our brand speaks with one voice to every customer?",
      problemStatement: "Disjointed personalization tools led to fragmented customer experiences and missed revenue opportunities.",
      how: "I co-founded, co-architected, and designed 'Catalyst,' a centralized platform that synced personalization logic and marketing communication programming across all channels, defining the core requirements for massive scale.",
      whyImportant: "Driving $1B+ in revenue proves enterprise personalization is a core financial engine.",
      results: [
        { metric: "Revenue Growth", outcome: "$1B+" },
        { metric: "Content Multiplier", outcome: "1:10" },
        { metric: "Speed to Market", outcome: "99.7% Improvement" }
      ]
    },
    {
      id: 6,
      headline: "Data-Driven Decisions: Unlocking The Roadmap",
      tags: ["Product", "Operations", "Process"],
      fundamentalQuestion: "How do we know which of our many ideas will actually move the needle?",
      problemStatement: "High-value marketing ideas often failed to launch due to poor prioritization and technical execution gaps.",
      how: "I created a data-driven prioritization framework that ranked personalization tasks by ROI, ensuring the engineering team always built the most valuable features first.",
      whyImportant: "Bridging the gap between strategy and code realized $146M in actual market value.",
      results: [
        { metric: "Revenue Generated", outcome: "$146M" },
        { metric: "Roadmap Prioritization", outcome: "100% Data-Driven" },
        { metric: "Execution Gap", outcome: "Eliminated" }
      ]
    },
    {
      id: 7,
      headline: "Shifting Process: Working Smarter",
      tags: ["MarComm", "Process", "Operations"],
      fundamentalQuestion: "How can we change direction as fast as our customers do?",
      problemStatement: "Rigid, waterfall-style deployment cycles prevented marketing from responding to real-time market shifts.",
      how: "I transformed the project lifecycle from a parallel waterfall process into a parallel agile framework, integrating compliance checks into the sprint cycle to remove traditional roadblocks.",
      whyImportant: "78% faster cycles mean the business can respond to competitors in days rather than months.",
      results: [
        { metric: "Lifecycle Speed", outcome: "78% Improvement" },
        { metric: "Deployment Compliance", outcome: "100%" },
        { metric: "Content Reuse", outcome: "One-to-Many" }
      ]
    },
    {
      id: 8,
      headline: "Strategy-to-Code: The Technology Bridge",
      tags: ["Leadership", "Product", "MarTech", "Process"],
      fundamentalQuestion: "Are we limited by our tools, or just by how we’ve always used them?",
      problemStatement: "Misalignment between business goals and engineering execution led to technical debt and missed features.",
      how: "As Product Owner, I served as the 'translator,' architecting the functional requirements for 'Engage' to ensure technical builds matched business strategy. I established the operational frameworks that standardized personalization, moving it from a localized experiment to a permanent, global business function.",
      whyImportant: "Ensuring 100% alignment ensures dev dollars create immediate marketing value rather than rework.",
      results: [
        { metric: "Business-Tech Alignment", outcome: "100%" },
        { metric: "Speed to Market", outcome: "20% Improvement" },
        { metric: "Rework Costs", outcome: "Significantly Reduced" }
      ]
    },
    {
      id: 9,
      headline: "Marketing Delivery: Personalized Campaigns",
      tags: ["MarComm", "UX/Design", "Operations"],
      fundamentalQuestion: "How do we stay human at a scale of millions?",
      problemStatement: "Scaling high-logic personalized campaigns manually was unsustainable and prone to experience errors.",
      how: "I led the delivery strategy for automated content programming, ensuring that personalized data never compromised the high-quality design of the customer journey.",
      whyImportant: "Delivering 250+ campaigns at scale proves logic doesn't have to break the user experience.",
      results: [
        { metric: "Campaigns Delivered", outcome: "250+" },
        { metric: "UX Consistency", outcome: "100%" },
        { metric: "Personalization", outcome: "High-Scale" }
      ]
    },
    {
      id: 10,
      headline: "Data-Driven: MarComm Efficiency",
      tags: ["MarComm", "MarTech", "Process"],
      fundamentalQuestion: "How do we stop sending noise and start sending value?",
      problemStatement: "Generic marketing communications lacked relevancy, leading to wasted spend and lower engagement.",
      how: "I integrated data-driven relevancy models into the marketing lifecycle, focusing spend on the highest-performing segments to maximize both savings and revenue.",
      whyImportant: "$700K gains through relevancy show that personalization is a profit center, not a cost center.",
      results: [
        { metric: "Financial Gain", outcome: "$700K+" },
        { metric: "Comm Relevancy", outcome: "Increased" },
        { metric: "Lifecycle Efficiency", outcome: "15% Improved" }
      ]
    },
    {
      id: 11,
      headline: "The Benefits of Listening To The Customer",
      tags: ["Leadership", "Product", "UX/Design", "Process", "Operations"],
      fundamentalQuestion: "Where are we accidentally annoying people while trying to help them?",
      problemStatement: "A poor user experience in the flagship app was driving high churn and negative brand sentiment.",
      how: "I directed a data-led redesign, using user analytics to pinpoint where customers were struggling and prioritizing those fixes in the development roadmap. I engineered process improvements using Design Thinking to identify waste and structured data models to track the resulting savings in real-time.",
      whyImportant: "Moving from 2.0 to 4.5 stars signals brand recovery and lowers acquisition costs, resulting in $30M in call-deflection value.",
      results: [
        { metric: "App Rating", outcome: "4.5 Stars" },
        { metric: "Utilization", outcome: "15% Improved" },
        { metric: "Cost Savings", outcome: "$30M" }
      ]
    },
    {
      id: 12,
      headline: "Agent UX: Cutting Handle Times",
      tags: ["UX/Design", "Process", "Operations"],
      fundamentalQuestion: "What is the shortest path between a customer's problem and our solution?",
      problemStatement: "Agents were forced to use fragmented, legacy tools that increased handle times and customer frustration.",
      how: "I designed a centralized interface and optimized backend data flows to provide agents with the exact information they need in a single view.",
      whyImportant: "Optimizing UX for 35K users saves millions and drastically improves workforce morale.",
      results: [
        { metric: "User Base", outcome: "35,000+ Agents" },
        { metric: "Handle Time", outcome: "Reduced" },
        { metric: "Navigation Friction", outcome: "Minimized" }
      ]
    },
    {
      id: 13,
      headline: "Process Recovery: Preventing Defects",
      tags: ["Leadership", "Operations"],
      fundamentalQuestion: "How do we stop the bleeding so we can start building?",
      problemStatement: "A high rate of technical defects was stalling marketing launches and eroding stakeholder trust.",
      how: "I led a 'stabilization sprint,' prioritizing the most impactful defects and streamlining the engineering workflow to resolve 60 issues in one quarter.",
      whyImportant: "Rapid stabilization restores the operational foundation required for future growth.",
      results: [
        { metric: "Critical Defects Resolved", outcome: "60" },
        { metric: "Timeline", outcome: "90 Days" },
        { metric: "Portfolio Health", outcome: "Stabilized" }
      ]
    },
    {
      id: 14,
      headline: "Journey Mapping: When Usage Surges",
      tags: ["Product", "MarComm", "UX/Design"],
      fundamentalQuestion: "Why would someone pick us when they have a world of other options?",
      problemStatement: "Low adoption of the mobile digital ecosystem was limiting the brand's influence and growth potential.",
      how: "I optimized marketing campaigns and used journey mapping to remove technical roadblocks, making it easier for users to adopt the mobile web portal.",
      whyImportant: "60% DAU growth proves journey optimization is the direct path to sustainable engagement.",
      results: [
        { metric: "DAU Growth", outcome: "60%" },
        { metric: "User Base", outcome: "800k" },
        { metric: "Adoption Velocity", outcome: "Accelerated" }
      ]
    },
    {
      id: 15,
      headline: "Speed To Market: Unlocked",
      tags: ["Product", "Process", "Operations"],
      fundamentalQuestion: "How do we get our best ideas into the world before they lose their spark?",
      problemStatement: "7-day production cycles were too slow to compete in a high-velocity digital market.",
      how: "I re-engineered the production cycle by identifying 'dead time' in the workflow and automating transition points, cutting the cycle from 7 days down to 3.",
      whyImportant: "57% faster time-to-market allows the brand to dominate digital ecosystems before competitors.",
      results: [
        { metric: "TTM Reduction", outcome: "57%" },
        { metric: "Cycle Time", outcome: "3 Days" },
        { metric: "Launch Capacity", outcome: "Expanded" }
    ]
  }
];

export const skillGroups = [
  {
    group: "Functional Roles",
    icon: <Briefcase size={20} />,
    description: "Functional responsibilities I have performed.",
    items: [
      { name: "Product Management"},
      { name: "Leadership"},
      { name: "UX/Design"},
      { name: "Operations/Automation"},
      { name: "Marketing Technology"},
      { name: "Project Management"},
      { name: "Finance Planning"},
      { name: "Marketing Communications"},
      { name: "Analytics"},
      { name: "Governance, Risk & Compliance"},
      { name: "Enterprise Architecture"},
      { name: "System Administration"},
    ]
  },
  { 
    group: "Thinking Frameworks", 
    icon: <Command size={20} />,
    description: "Foundational models that move beyond generic management into scalable delivery.",
    items: [
      { name: "First Principles"},
      { name: "Systems Thinking"},
      { name: "Agile Leadership"},
      { name: "Strategic Planning"},
      { name: "Solution Engineering"},
      { name: "SDLC Oversight"}
    ] 
  },
  { 
    group: "AI & Automation", 
    icon: <Cpu size={20} />,
    items: [
      { name: "Agentic AI"},
      { name: "LLM Orchestration"},
      { name: "Prompt Engineering"},
      { name: "RAG Systems"},
      { name: "Vector Databases"},
      { name: "Context Engineering"}
    ] 
  },
  {
    group: "Design & Prototype",
    icon: <Layout size={20} />,
    items: [
      { name: "Figma"},
      { name: "Sketch"},
      { name: "Adobe Illustrator"},
      { name: "Adobe Photoshop"},
      { name: "Lucid"},
      { name: "Design Thinking"}
    ]
  },
  {
    group: "Productivity & Insights",
    icon: <BarChart3 size={20} />,
    items: [
      { name: "Adobe Analytics"},
      { name: "Adobe Workfront"},
      { name: "Tableau"},
      { name: "Google Looker"},
      { name: "JIRA"},
      { name: "Notion"}
    ]
  }
];

export const resumeData = {
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
