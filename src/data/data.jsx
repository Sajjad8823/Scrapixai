// ============================================================
//  DATA.JSX  —  ScrapixAI Website Content
// ============================================================

// ── NAVIGATION LINKS ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         path: "/" },
  { label: "Services",     path: "/services" },
  { label: "Portfolio",    path: "/portfolio" },
  { label: "About",        path: "/about" },
  { label: "Our Process",  path: "/process" },
  { label: "Contact",      path: "/contact" },
];

// ── SERVICE CATEGORIES ────────────────────────────────────────
export const SERVICE_CATEGORIES = [
  { id: "ai-automation",   label: "AI & Automation",    icon: "⬡", color: "#6366f1", gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)", desc: "Intelligent systems that learn, adapt and eliminate manual work." },
  { id: "advanced-ai",     label: "Advanced AI",        icon: "◈", color: "#a855f7", gradient: "linear-gradient(135deg,#a855f7,#ec4899)", desc: "Cutting-edge AI for vision, prediction and recommendations." },
  { id: "development",     label: "Development",        icon: "◇", color: "#06b6d4", gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)", desc: "Scalable software products built to grow with your business." },
  { id: "creative-support",label: "Creative & Support", icon: "◉", color: "#10b981", gradient: "linear-gradient(135deg,#10b981,#06b6d4)", desc: "Design, media and operations support for growing teams." },
];

// ── SERVICES ─────────────────────────────────────────────────
export const SERVICES = [
  // ─── AI & Automation ──────────────────────────────────────
  {
    id: 0, category: "ai-automation", icon: "⬡", color: "#6366f1",
    glow: "rgba(99,102,241,.3)", bg: "rgba(99,102,241,.1)", border: "rgba(99,102,241,.22)",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    title: "Data Scraping & Bot Development", badge: "Web Intelligence",
    seoTitle: "Data Scraping & Bot Development | ScrapixAI",
    desc: "Precision scrapers and intelligent bots that harvest structured data from any web source at scale with full JS rendering, anti-block evasion and real-time delivery.",
    longDesc: "Your competitors are swimming in market intelligence. You can be too. Our scraping bots collect millions of data points daily — product prices, leads, reviews, listings — and deliver them clean, structured and ready for action.",
    tags: ["Web Scraping","Bot development","API Extraction","Real-time","Lead Generation"],
    useCases: ["E-commerce data harvesting for price monitoring and product intelligence","Competitor price monitoring and dynamic pricing intelligence","Lead generation from LinkedIn, directories and industry sites","Market research data aggregation at scale","Product catalog synchronization across platforms","Review and sentiment data harvesting","Real estate and financial data collection"],
    tools: ["Playwright","Puppeteer","Scrapy","Bright Data","Python","Data Base","Csv","NumPy","Pandas"],
    results: [{v:"10M+",l:"Records/day"},{v:"99.7%",l:"Uptime"},{v:"40x",l:"Faster than manual"},{v:"Zero",l:"Blocks"}],
  },
  {
    id: 1, category: "ai-automation", icon: "◈", color: "#a855f7",
    glow: "rgba(168,85,247,.3)", bg: "rgba(168,85,247,.1)", border: "rgba(168,85,247,.22)",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    title: "AI Assistants & Chatbots", badge: "Conversational AI",
    seoTitle: "AI Assistants & Custom Chatbots",
    desc: "Custom AI assistants trained on your data, your tone and your business logic — handling customer queries, sales qualification and internal support 24/7.",
    longDesc: "Stop paying human agents to answer the same 200 questions. Our AI assistants are trained on your product docs, FAQs and historical conversations then deployed across your website, WhatsApp and support tools.",
    tags: ["Chatbots","LLMs","WhatsApp","Customer Support"],
    useCases: ["24/7 customer support without human agents","Lead qualification and sales pipeline automation","Internal HR and IT helpdesk automation","Product recommendation and upsell bots","Appointment booking and scheduling assistants","Multilingual support across 40+ languages"],
    tools: ["OpenAI GPT-4","LangChain","Pinecone","Twilio","WhatsApp API","FastAPI","React","Firebase"],
    results: [{v:"80%",l:"Ticket reduction"},{v:"24/7",l:"Availability"},{v:"<1s",l:"Response time"},{v:"40+",l:"Languages"}],
  },
  {
    id: 2, category: "ai-automation", icon: "◇", color: "#06b6d4",
    glow: "rgba(6,182,212,.3)", bg: "rgba(6,182,212,.09)", border: "rgba(6,182,212,.22)",
    gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
    title: "RAG Systems", badge: "Knowledge Intelligence",
    seoTitle: "RAG Systems (Retrieval Augmented Generation)",
    desc: "Connect AI to your internal knowledge — documents, databases and wikis so it gives accurate, source-cited answers instead of hallucinated guesses.",
    longDesc: "Off-the-shelf AI hallucinates. RAG doesn't. We build Retrieval-Augmented Generation systems that connect LLMs to your actual documents, databases and knowledge bases.",
    tags: ["RAG","Knowledge Base","Document AI","Enterprise Search"],
    useCases: ["Internal enterprise knowledge base and Q&A","Legal document analysis and contract review","Medical records and compliance documentation","Customer-facing product documentation AI","Financial report analysis and summarization","Policy and procedure management systems"],
    tools: ["LangChain","LlamaIndex","Pinecone","Weaviate","OpenAI","FastAPI","PostgreSQL","AWS S3"],
    results: [{v:"99%",l:"Answer accuracy"},{v:"5ms",l:"Query response"},{v:"50K+",l:"Docs indexed"},{v:"Zero",l:"Hallucinations"}],
  },
  {
    id: 3, category: "ai-automation", icon: "⬟", color: "#10b981",
    glow: "rgba(16,185,129,.28)", bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.2)",
    gradient: "linear-gradient(135deg,#10b981,#06b6d4)",
    title: "NLP Systems", badge: "Language Intelligence",
    seoTitle: "NLP Systems & Text Analysis | ScrapixAI",
    desc: "NLP pipelines that read, classify, extract and act on unstructured text — transforming language into structured business signals at scale.",
    longDesc: "Your business generates thousands of text signals daily — emails, tickets, reviews, contracts. NLP systems from ScrapixAI transform that noise into actionable intelligence.",
    tags: ["Text Analysis","Classification","Entity Extraction","Sentiment"],
    useCases: ["Customer feedback and review sentiment analysis","Contract and legal document clause extraction","Support ticket intelligent routing and prioritization","Email triage and automatic categorization","Compliance and risk flagging in documents","Multilingual content classification"],
    tools: ["spaCy","Transformers","OpenAI API","NLTK","Elasticsearch","Python","FastAPI","Redis"],
    results: [{v:"94%",l:"Accuracy"},{v:"5ms",l:"Per document"},{v:"40+",l:"Languages"},{v:"10K",l:"Docs/minute"}],
  },
  {
    id: 4, category: "ai-automation", icon: "◉", color: "#f59e0b",
    glow: "rgba(245,158,11,.28)", bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.2)",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    title: "Automation Bots & Workflows", badge: "Workflow Engineering",
    seoTitle: "Automation Bots & Workflow Automation",
    desc: "End-to-end automation connecting your entire tech stack — eliminating repetitive tasks and human bottlenecks so your team focuses on what actually grows the business.",
    longDesc: "Every minute your team spends on data entry, report generation, invoice processing or manual approvals is a minute stolen from growth.",
    tags: ["RPA","Workflow","Integrations","No-Code"],
    useCases: ["Invoice and document processing automation","CRM and ERP automated data synchronization","Email triage and auto-response systems","Cross-platform notification and alerting","Report generation and dashboard automation","Onboarding and HR workflow automation"],
    tools: ["n8n","Make","Zapier","Python","REST APIs","Webhooks","Firebase","Airtable"],
    results: [{v:"87%",l:"Time saved"},{v:"<2min",l:"Task latency"},{v:"0 errors",l:"Data entry"},{v:"24/7",l:"Operation"}],
  },
  {
    id: 5, category: "ai-automation", icon: "⬡", color: "#ec4899",
    glow: "rgba(236,72,153,.28)", bg: "rgba(236,72,153,.08)", border: "rgba(236,72,153,.2)",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    title: "Model Training (ML/DL)", badge: "Custom ML",
    seoTitle: "Custom ML & Deep Learning Model Training",
    desc: "Custom-trained machine learning and deep learning models fine-tuned on your data and deployed production-ready — AI that actually knows your business.",
    longDesc: "Generic AI gives generic results. We train custom ML and deep learning models on your proprietary data.",
    tags: ["LLMs","Fine-tuning","MLOps","Deep Learning"],
    useCases: ["Domain-specific prediction and forecasting models","Custom LLM fine-tuning for industry-specific tasks","Anomaly detection for fraud and quality control","Product demand forecasting","Customer behavior and churn prediction","Pricing optimization models"],
    tools: ["PyTorch","TensorFlow","HuggingFace","AWS SageMaker","MLflow","Docker","FastAPI","W&B"],
    results: [{v:"95%+",l:"Accuracy"},{v:"3-4 wk",l:"To production"},{v:"60%",l:"Better than generic"},{v:"Full",l:"Ownership"}],
  },
  // ─── Advanced AI ──────────────────────────────────────────
  {
    id: 6, category: "advanced-ai", icon: "◈", color: "#a855f7",
    glow: "rgba(168,85,247,.3)", bg: "rgba(168,85,247,.1)", border: "rgba(168,85,247,.22)",
    gradient: "linear-gradient(135deg,#a855f7,#6366f1)",
    title: "Computer Vision", badge: "Visual Intelligence",
    seoTitle: "Computer Vision & Object Detection",
    desc: "Production CV pipelines for object detection, face recognition, OCR and quality inspection at industrial scale and real-time speeds.",
    longDesc: "Your cameras and images are generating data your business never captures. Computer vision systems from ScrapixAI unlock that data.",
    tags: ["Object Detection","OCR","Face Recognition","Quality Control"],
    useCases: ["Manufacturing defect and quality inspection","Document and receipt OCR automation","Retail shelf inventory monitoring","Facial recognition and access control systems","Vehicle detection and traffic analysis","Medical imaging analysis and diagnostics"],
    tools: ["YOLOv8","OpenCV","TensorFlow","PyTorch","CUDA","AWS Rekognition","FastAPI","NVIDIA Triton"],
    results: [{v:"98.2%",l:"Detection accuracy"},{v:"30fps",l:"Real-time"},{v:"0.3ms",l:"Per frame"},{v:"99%",l:"OCR accuracy"}],
  },
  {
    id: 7, category: "advanced-ai", icon: "◇", color: "#06b6d4",
    glow: "rgba(6,182,212,.3)", bg: "rgba(6,182,212,.09)", border: "rgba(6,182,212,.22)",
    gradient: "linear-gradient(135deg,#06b6d4,#10b981)",
    title: "Predictive Models", badge: "Predictive Intelligence",
    seoTitle: "Predictive AI Models & Business Forecasting",
    desc: "Custom predictive models that forecast demand, detect churn, flag fraud and surface opportunities — turning your historical data into a competitive crystal ball.",
    longDesc: "The businesses winning today aren't reacting — they're predicting.",
    tags: ["Forecasting","Churn Prediction","Fraud Detection","Demand Planning"],
    useCases: ["Customer churn prediction and early intervention","Sales forecasting and pipeline prediction","Inventory demand planning and optimization","Fraud detection and risk scoring","Predictive maintenance for equipment","Financial risk and credit scoring models"],
    tools: ["scikit-learn","XGBoost","PyTorch","AWS SageMaker","Snowflake","dbt","Grafana","FastAPI"],
    results: [{v:"30 days",l:"Early warning"},{v:"40%",l:"Forecast improvement"},{v:"<10ms",l:"Scoring latency"},{v:"Self",l:"Improving"}],
  },
  {
    id: 8, category: "advanced-ai", icon: "⬟", color: "#f59e0b",
    glow: "rgba(245,158,11,.28)", bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.2)",
    gradient: "linear-gradient(135deg,#f59e0b,#ec4899)",
    title: "Recommendation Systems", badge: "Personalization AI",
    seoTitle: "AI Recommendation Systems",
    desc: "Netflix-level recommendation engines for your e-commerce, content, or SaaS platform — personalizing every user experience to maximize engagement and revenue.",
    longDesc: "Amazon credits 35% of its revenue to recommendations. We build collaborative filtering, content-based and hybrid recommendation engines.",
    tags: ["E-commerce","Personalization","Collaborative Filtering","Revenue"],
    useCases: ["E-commerce product recommendations and upsell","Content personalization for media platforms","SaaS feature recommendation and onboarding","Email personalization and product matching","Search relevance and ranking optimization","Cross-sell and bundle recommendation engines"],
    tools: ["Python","TensorFlow","PyTorch","Redis","Elasticsearch","Kafka","FastAPI","PostgreSQL"],
    results: [{v:"35%",l:"Revenue uplift"},{v:"<20ms",l:"Recommendation"},{v:"Self",l:"Learning"},{v:"Day 1",l:"Cold start ready"}],
  },
  // ─── Development ──────────────────────────────────────────
  {
    id: 9, category: "development", icon: "◉", color: "#3b82f6",
    glow: "rgba(59,130,246,.28)", bg: "rgba(59,130,246,.08)", border: "rgba(59,130,246,.2)",
    gradient: "linear-gradient(135deg,#3b82f6,#06b6d4)",
    title: "Full Stack Web Development", badge: "Web Engineering",
    seoTitle: "Full Stack Web Development",
    desc: "End-to-end web applications built for performance, scale and conversion — from MVP to enterprise platform, delivered in weeks not months.",
    longDesc: "We don't build websites. We build business systems.",
    tags: ["React","Node.js","Next.js","PostgreSQL"],
    useCases: ["Business web applications and dashboards","Customer portals and self-service platforms","Admin panels and internal tools","API development and third-party integrations","Landing pages and conversion-optimized websites","Progressive Web Apps (PWA)"],
    tools: ["React","Next.js","Node.js","TypeScript","PostgreSQL","Tailwind CSS","AWS","Vercel"],
    results: [{v:"4-8 wk",l:"Delivery"},{v:"99.9%",l:"Uptime"},{v:"100",l:"Lighthouse score"},{v:"Full",l:"Source code"}],
  },
  {
    id: 10, category: "development", icon: "⬡", color: "#6366f1",
    glow: "rgba(99,102,241,.3)", bg: "rgba(99,102,241,.1)", border: "rgba(99,102,241,.22)",
    gradient: "linear-gradient(135deg,#6366f1,#a855f7)",
    title: "SaaS Development", badge: "Product Engineering",
    seoTitle: "SaaS Product Development | ScrapixAI",
    desc: "We build SaaS products from zero to launch — multi-tenant architecture, subscription billing, user management and everything needed to go from idea to paying customers.",
    longDesc: "Building a SaaS requires getting 50 things right simultaneously.",
    tags: ["Multi-tenant","Stripe","Auth","Scalable"],
    useCases: ["B2B SaaS MVPs and full product launches","Subscription and freemium billing systems","Multi-tenant platform architecture","User onboarding and activation flows","Usage-based billing and metering","White-label SaaS platforms"],
    tools: ["Next.js","Supabase","Stripe","Auth0","PostgreSQL","Redis","AWS","Vercel"],
    results: [{v:"8-12 wk",l:"To launch"},{v:"10K+",l:"Users ready"},{v:"Stripe",l:"Billing built-in"},{v:"Full",l:"Admin panel"}],
  },
  {
    id: 11, category: "development", icon: "◇", color: "#10b981",
    glow: "rgba(16,185,129,.28)", bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.2)",
    gradient: "linear-gradient(135deg,#10b981,#3b82f6)",
    title: "ERP & Business Applications", badge: "Enterprise Systems",
    seoTitle: "ERP & Custom Business Application Development | ScrapixAI",
    desc: "Custom ERP systems and business applications that replace spreadsheet chaos with one unified platform built around how your business actually works.",
    longDesc: "Most ERPs fail because they're built for a generic business, not yours.",
    tags: ["ERP","Inventory","HR","Finance"],
    useCases: ["Custom ERP systems for manufacturing and distribution","Inventory and warehouse management systems","HR and payroll management platforms","CRM and client management systems","Project management and resource planning tools","Financial reporting and accounting systems"],
    tools: ["React","Node.js","PostgreSQL","Redis","Docker","AWS","Python","REST APIs"],
    results: [{v:"1 system",l:"Replaces 10 tools"},{v:"Full",l:"Ownership"},{v:"Custom",l:"To your workflow"},{v:"Real-time",l:"Data access"}],
  },
  {
    id: 12, category: "development", icon: "◈", color: "#f59e0b",
    glow: "rgba(245,158,11,.28)", bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.2)",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    title: "Mobile Applications", badge: "Mobile Engineering",
    seoTitle: "Mobile App Development (iOS & Android) | ScrapixAI",
    desc: "Cross-platform mobile apps for iOS and Android — from customer-facing products to internal field tools — with native performance at cross-platform cost.",
    longDesc: "Mobile-first is the baseline. We build cross-platform mobile applications that look, feel and perform like native apps on both iOS and Android.",
    tags: ["React Native","iOS","Android","Cross-platform"],
    useCases: ["Customer-facing mobile apps and marketplaces","Field operations and logistics apps","On-demand service and booking platforms","Internal employee and workforce apps","IoT and hardware companion applications","Social and community platforms"],
    tools: ["React Native","Flutter","Expo","TypeScript","Firebase","Supabase","Stripe","Apple Pay","Google Pay"],
    results: [{v:"8-14 wk",l:"Delivery"},{v:"iOS+",l:"Android both"},{v:"1 codebase",l:"Half the cost"},{v:"Offline",l:"First support"}],
  },
  {
    id: 13, category: "development", icon: "◈", color: "#f59e0b",
    glow: "rgba(245,158,11,.28)", bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.2)",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    title: "Final Year Projects", badge: "Academic Engineering",
    seoTitle: "Final Year Projects | ScrapixAI",
    desc: "Final Year Project services focused on delivering complete, high-quality solutions tailored to academic requirements and industry standards. Support includes idea selection, system design, development, documentation and presentation preparation across domains like AI, web and mobile applications.",
    longDesc: "End-to-end guidance ensures a well-structured project with clean code, proper testing and a professional final submission.",
    tags: ["React Native","iOS","Android","Cross-platform","Tailwind"],
    useCases: ["Customer-facing mobile apps and marketplaces","Field operations and logistics apps","On-demand Web and mobile application development for final year projects","On-demand service and booking platforms","Internal employee and workforce apps","IoT and hardware companion applications","Social and community platforms"],
    tools: ["React Native","Flutter","Expo","TypeScript","Firebase","Supabase","Stripe","Apple Pay","Google Pay"],
    results: [{v:"8-14 wk",l:"Delivery"},{v:"iOS+",l:"Android both"},{v:"1 codebase",l:"Half the cost"},{v:"Offline",l:"First support"}],
  },
  // ─── Creative & Support ────────────────────────────────────
  {
    id: 14, category: "creative-support", icon: "⬟", color: "#ec4899",
    glow: "rgba(236,72,153,.28)", bg: "rgba(236,72,153,.08)", border: "rgba(236,72,153,.2)",
    gradient: "linear-gradient(135deg,#ec4899,#f59e0b)",
    title: "Graphic Design & Video Editing", badge: "Visual Branding",
    seoTitle: "Graphic Design & Video Editing | ScrapixAI",
    desc: "Strategic graphic design and video editing for digital brands — from logos and brand identities to marketing video content that drives action.",
    longDesc: "Design isn't decoration — it's communication.",
    tags: ["Branding","UI Design","Marketing","Video"],
    useCases: ["Brand identity and logo design","Website UI/UX design and prototyping","Marketing and advertising creative","Social media content and templates","Pitch deck and presentation design","Product explainer and promo video editing"],
    tools: ["Figma","Adobe Illustrator","Photoshop","Premiere Pro","After Effects","Framer"],
    results: [{v:"48h",l:"First concepts"},{v:"∞",l:"Revisions"},{v:"Source",l:"Files included"},{v:"Brand",l:"Guidelines doc"}],
  },
  {
    id: 15, category: "creative-support", icon: "◉", color: "#10b981",
    glow: "rgba(16,185,129,.28)", bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.2)",
    gradient: "linear-gradient(135deg,#10b981,#06b6d4)",
    title: "Virtual Assistant Services", badge: "Remote Operations",
    seoTitle: "Virtual Assistant Services | ScrapixAI",
    desc: "Trained, AI-augmented virtual assistants who handle your operations, research, admin and communications — so your leadership team can focus on growth.",
    longDesc: "Our VAs are AI-augmented operators trained in your systems and workflows.",
    tags: ["Operations","Research","Admin","Communications"],
    useCases: ["Executive and CEO administrative support","Lead research and CRM data enrichment","Email management and correspondence","Social media management and scheduling","Data entry and spreadsheet management","Customer communication and follow-ups"],
    tools: ["Ms Word","Google Sheets","Notion","Airtable","HubSpot","Slack","Gmail","Zoom","Loom"],
    results: [{v:"3x",l:"Faster than standard VA"},{v:"Dedicated",l:"To your business"},{v:"Weekly",l:"Reporting"},{v:"Full",l:"NDA & security"}],
  },
];

// ── PROJECTS (Portfolio) ──────────────────────────────────────
export const PROJECTS = [
  // ── AI ──────────────────────────────────────────────────────
  {
    id: 0, category: 'AI', tag: 'AI',
    title: 'InvoiceIQ — Autonomous Invoice Processing',
    problem: 'A logistics firm processed 4,000+ invoices/month manually — 3 FTEs tied up, 6-hour SLA killing cash flow.',
    solution: 'Custom LLM pipeline extracts, validates and routes invoices with zero human touch — from email to ERP in minutes.',
    tech: ['GPT-4o','LangChain','FastAPI','PostgreSQL','React'],
    results: [{v:'98.4%',l:'Extraction accuracy'},{v:'11 min',l:'Avg processing time'},{v:'$320K',l:'Annual savings'},{v:'3 FTEs',l:'Redeployed to growth'}],
    color:'#6366f1', glow:'rgba(99,102,241,.25)', bg:'rgba(99,102,241,.08)', border:'rgba(99,102,241,.2)', gradient:'linear-gradient(90deg,#6366f1,transparent)',
  },
  {
    id: 1, category: 'AI', tag: 'AI',
    title: 'SentimentOS — Customer Intelligence Engine',
    problem: 'SaaS company received 10K+ support messages/month. At-risk customers churned before anyone noticed.',
    solution: 'Fine-tuned NLP model classifies, scores and routes every inbound message in real-time — triggering automated retention sequences before churn happens.',
    tech: ['HuggingFace','PyTorch','FastAPI','Elasticsearch','Grafana'],
    results: [{v:'94.2%',l:'Classification accuracy'},{v:'5ms',l:'Per message'},{v:'35%',l:'Churn reduction'},{v:'0',l:'Manual triage'}],
    color:'#f59e0b', glow:'rgba(245,158,11,.25)', bg:'rgba(245,158,11,.08)', border:'rgba(245,158,11,.2)', gradient:'linear-gradient(90deg,#f59e0b,transparent)',
  },
  {
    id: 2, category: 'AI', tag: 'AI',
    title: 'MedInsight — Clinical Notes AI Extractor',
    problem: 'Hospital doctors spent 3+ hours daily transcribing unstructured notes into EHR — time stolen from patient care.',
    solution: 'Fine-tuned medical LLM automatically extracts structured data from voice recordings and written notes, pushing directly into the EHR system.',
    tech: ['Whisper','GPT-4','LangChain','FHIR API','Docker'],
    results: [{v:'97%',l:'Transcription accuracy'},{v:'3 hrs',l:'Saved per doctor/day'},{v:'<2s',l:'Processing time'},{v:'$540K',l:'Annual savings'}],
    color:'#ec4899', glow:'rgba(236,72,153,.25)', bg:'rgba(236,72,153,.08)', border:'rgba(236,72,153,.2)', gradient:'linear-gradient(90deg,#ec4899,transparent)',
  },
  {
    id: 3, category: 'AI', tag: 'AI',
    title: 'ChatAgent — Multilingual AI Support Bot',
    problem: 'E-commerce platform handling 5,000+ daily queries across 8 languages. Agents overwhelmed, 4-hour average response destroying satisfaction scores.',
    solution: 'Multilingual RAG chatbot trained on product documentation auto-resolves 84% of queries instantly — agents only touch escalations.',
    tech: ['GPT-4o','Pinecone','LangChain','Next.js','Twilio'],
    results: [{v:'84%',l:'Auto-resolution rate'},{v:'8 langs',l:'Supported'},{v:'12s',l:'Avg response'},{v:'$280K',l:'Support cost cut'}],
    color:'#8b5cf6', glow:'rgba(139,92,246,.25)', bg:'rgba(139,92,246,.08)', border:'rgba(139,92,246,.2)', gradient:'linear-gradient(90deg,#8b5cf6,transparent)',
  },
 
  // ── NEW: Real-Time Vehicle Detection ─────────────────────────
  {
    id: 17, category: 'AI', tag: 'AI',
    title: 'TrafficSense — Real-Time Vehicle Detection & Counting',
    problem: 'Traffic management authority had no automated way to count and classify vehicles entering/leaving monitored zones — all manual, all delayed, all inaccurate.',
    solution: 'Built a real-time vehicle detection and counting system using YOLOv8, OpenCV and SORT tracking. Detects cars, buses, trucks and motorbikes from live video, counts crossings through a defined ROI with sub-second latency.',
    tech: ['YOLOv8','OpenCV','SORT','Python','CUDA','FastAPI'],
    results: [{v:'Real-time',l:'30fps detection'},{v:'98%+',l:'Vehicle accuracy'},{v:'Multi-class',l:'Cars, buses, trucks'},{v:'Live',l:'ROI zone counting'}],
    color:'#f43f5e', glow:'rgba(244,63,94,.25)', bg:'rgba(244,63,94,.08)', border:'rgba(244,63,94,.2)', gradient:'linear-gradient(90deg,#f43f5e,transparent)',
  },
 
  // ── NEW: AI Smart Education App ───────────────────────────────
  {
    id: 18, category: 'AI', tag: 'AI',
    title: 'EduAI — AI-Powered Smart Education App',
    problem: 'Pakistani students learning mathematics faced a critical gap: educational content existed only in English, making advanced concepts inaccessible for Urdu-speaking learners.',
    solution: 'Fine-tuned an NLP transformer model to translate complex mathematical content into Urdu with domain accuracy. Integrated into a Flutter mobile app serving students nationwide — bridging the language barrier in EdTech.',
    tech: ['NLP Transformers','Dart','Flutter','Python','TensorFlow','Firebase'],
    results: [{v:'Urdu',l:'Math content translated'},{v:'LLM',l:'Domain fine-tuned'},{v:'Mobile',l:'iOS + Android'},{v:'Students',l:'Across Pakistan served'}],
    color:'#06b6d4', glow:'rgba(6,182,212,.25)', bg:'rgba(6,182,212,.08)', border:'rgba(6,182,212,.2)', gradient:'linear-gradient(90deg,#06b6d4,transparent)',
  },
 
  // ── NEW: Bioinformatics Web App ───────────────────────────────
  {
    id: 19, category: 'Web', tag: 'Web',
    title: 'BioSearch — High-Performance Bioinformatics Research Platform',
    problem: 'Scientists researching a 67,000-entry tmRNA database had no professional search tool — they were manually querying raw files. Complex biological searches took hours with no way to analyse or export results.',
    solution: 'Built a high-performance full-stack web platform with instant keyword search, peptide similarity scoring (BLOSUM62) and codon similarity analysis. Results load in 0.03s, exportable to CSV. Scientists now query and analyse in seconds.',
    tech: ['JavaScript','Python','FastAPI','PostgreSQL','Bioinformatics Algorithms','React'],
    results: [{v:'67K+',l:'tmRNA entries indexed'},{v:'0.03s',l:'Search response time'},{v:'3 modes',l:'Keyword, peptide, codon'},{v:'CSV',l:'One-click export'}],
    color:'#10b981', glow:'rgba(16,185,129,.25)', bg:'rgba(16,185,129,.08)', border:'rgba(16,185,129,.2)', gradient:'linear-gradient(90deg,#10b981,transparent)',
  },
 
  // ── AUTOMATION ───────────────────────────────────────────────
  {
    id: 4, category: 'Automation', tag: 'Automation',
    title: 'LeadFlow — Outbound Sales Automation Engine',
    problem: 'Sales team burned 60% of their time on manual prospect research, email personalisation and follow-up sequences — pipeline was thin and inconsistent.',
    solution: 'AI agent autonomously researches prospects, writes personalised outreach, manages multi-step sequences and logs every touchpoint to CRM — without a human lifting a finger.',
    tech: ['OpenAI','Apollo.io API','n8n','HubSpot','SendGrid'],
    results: [{v:'3x',l:'Pipeline volume'},{v:'62%',l:'Time saved'},{v:'28%',l:'Reply rate'},{v:'4 hrs',l:'Saved per rep/day'}],
    color:'#a855f7', glow:'rgba(168,85,247,.25)', bg:'rgba(168,85,247,.08)', border:'rgba(168,85,247,.2)', gradient:'linear-gradient(90deg,#a855f7,transparent)',
  },
  {
    id: 5, category: 'Automation', tag: 'Automation',
    title: 'DocuFlow — Contract Intelligence Pipeline',
    problem: 'Legal team reviewed 200+ contracts/month manually — 45 minutes per contract, all billable hours lost to reading, not advising.',
    solution: 'Vision and LLM pipeline reads every contract, extracts key clauses, flags risk terms and generates an executive summary in under 2 minutes.',
    tech: ['GPT-4 Vision','LangChain','Python','FastAPI','PostgreSQL'],
    results: [{v:'2 min',l:'Per contract'},{v:'96%',l:'Clause accuracy'},{v:'95%',l:'Time saved'},{v:'$180K',l:'Annual savings'}],
    color:'#f43f5e', glow:'rgba(244,63,94,.25)', bg:'rgba(244,63,94,.08)', border:'rgba(244,63,94,.2)', gradient:'linear-gradient(90deg,#f43f5e,transparent)',
  },
  {
    id: 6, category: 'Automation', tag: 'Automation',
    title: 'HRBot — Intelligent Recruitment Screening Automator',
    problem: 'HR team manually screened 800+ CVs monthly. Two weeks to shortlist 10 candidates — valuable positions sitting empty, revenue bleeding.',
    solution: 'AI pipeline screens, scores and ranks every CV against job criteria in seconds, then automatically dispatches interview invitations to top candidates.',
    tech: ['OpenAI','n8n','Airtable','Gmail API','Python'],
    results: [{v:'800+',l:'CVs/month screened'},{v:'4 hrs',l:'Shortlist time (was 2 wks)'},{v:'91%',l:'Screening accuracy'},{v:'70%',l:'HR time saved'}],
    color:'#14b8a6', glow:'rgba(20,184,166,.25)', bg:'rgba(20,184,166,.08)', border:'rgba(20,184,166,.2)', gradient:'linear-gradient(90deg,#14b8a6,transparent)',
  },
  {
    id: 7, category: 'Automation', tag: 'Automation',
    title: 'InventoryAI — Stock & Reorder Automation',
    problem: 'Retail chain with 12 stores suffered constant stockouts and overstock simultaneously — $600K in annual waste with zero visibility into why.',
    solution: 'ML demand forecasting model predicts stock needs per location, auto-generates purchase orders and syncs inventory levels across all 12 stores in real time.',
    tech: ['Python','Scikit-learn','Zapier','Shopify API','Google Sheets'],
    results: [{v:'$600K',l:'Waste eliminated'},{v:'98%',l:'Stock accuracy'},{v:'0',l:'Manual POs'},{v:'22%',l:'Margin improvement'}],
    color:'#f97316', glow:'rgba(249,115,22,.25)', bg:'rgba(249,115,22,.08)', border:'rgba(249,115,22,.2)', gradient:'linear-gradient(90deg,#f97316,transparent)',
  },
 
  // ── SCRAPING ─────────────────────────────────────────────────
  {
    id: 8, category: 'Scraping', tag: 'Scraping',
    title: 'PriceRadar — Real-Time Competitor Price Intelligence',
    problem: 'E-commerce brand had zero visibility into competitor pricing across 12 platforms. Pricing decisions made blind, margin left on the table daily.',
    solution: 'Distributed scraping network monitors 500K SKUs across all competitor platforms in real-time, automatically adjusting internal pricing rules to stay competitive.',
    tech: ['Playwright','Bright Data','Redis','Node.js','Grafana'],
    results: [{v:'500K',l:'SKUs tracked'},{v:'15 min',l:'Update frequency'},{v:'+18%',l:'Revenue uplift'},{v:'99.8%',l:'Uptime'}],
    color:'#06b6d4', glow:'rgba(6,182,212,.25)', bg:'rgba(6,182,212,.08)', border:'rgba(6,182,212,.2)', gradient:'linear-gradient(90deg,#06b6d4,transparent)',
  },
  {
    id: 9, category: 'Scraping', tag: 'Scraping',
    title: 'Triovetura.com — Automated Product Intelligence System',
    problem: 'Client manually tracked product listings, pricing changes and competitor availability on Triovetura.com. Process was slow, inconsistent and gave no depth — business decisions made on outdated data.',
    solution: 'Built a fully automated bot system extracting 25+ critical data points per listing — price, stock, seller ranking, delivery time, reviews, variants and more. Anti-detection, proxy-rotated, running 24/7.',
    tech: ['Playwright','Puppeteer','Selenium','Bright Data','Python','PostgreSQL'],
    results: [{v:'25+',l:'Data points per listing'},{v:'95%',l:'Manual work eliminated'},{v:'Real-time',l:'Data availability'},{v:'24/7',l:'Automated monitoring'}],
    color:'#3b82f6', glow:'rgba(59,130,246,.25)', bg:'rgba(59,130,246,.08)', border:'rgba(59,130,246,.2)', gradient:'linear-gradient(90deg,#3b82f6,transparent)',
  },
  {
    id: 10, category: 'Scraping', tag: 'Scraping',
    title: 'NewsAggregator — Financial Sentiment Intelligence Feed',
    problem: 'Hedge fund needed real-time sentiment signals from 200+ news and social sources. Manual monitoring was impossible at trading speed.',
    solution: 'Multi-source scraper combined with BERT NLP pipeline delivers structured, classified sentiment signals every 60 seconds — directly integrated into trading infrastructure.',
    tech: ['Scrapy','Beautiful Soup','BERT','Kafka','PostgreSQL'],
    results: [{v:'200+',l:'Sources monitored'},{v:'60s',l:'Update interval'},{v:'92%',l:'Sentiment accuracy'},{v:'Live',l:'Trading signals'}],
    color:'#22d3ee', glow:'rgba(34,211,238,.25)', bg:'rgba(34,211,238,.08)', border:'rgba(34,211,238,.2)', gradient:'linear-gradient(90deg,#22d3ee,transparent)',
  },
 
  // ── WEB ──────────────────────────────────────────────────────
  {
    id: 11, category: 'Web', tag: 'Web',
    title: 'DashOS — Real-Time Unified Operations Platform',
    problem: 'Operations team juggled 8 disconnected tools with no single source of truth. Decisions made on stale data, anomalies missed until damage was done.',
    solution: 'Custom React ops dashboard unifies all data sources into one real-time view with AI anomaly detection, instant alerts and drill-down analytics.',
    tech: ['React','Node.js','Firebase','Recharts','Framer Motion'],
    results: [{v:'<80ms',l:'Load time'},{v:'100',l:'Lighthouse score'},{v:'8 to 1',l:'Tools consolidated'},{v:'40%',l:'Faster decisions'}],
    color:'#10b981', glow:'rgba(16,185,129,.25)', bg:'rgba(16,185,129,.08)', border:'rgba(16,185,129,.2)', gradient:'linear-gradient(90deg,#10b981,transparent)',
  },
  {
    id: 12, category: 'Web', tag: 'Web',
    title: 'ShopAI — AI-Personalised E-commerce Engine',
    problem: 'Fashion retailer with 80K SKUs had 1.2% conversion rate. Every customer saw the same homepage — zero personalisation, massive revenue leak.',
    solution: 'AI recommendation engine learns individual preferences and dynamically personalises every storefront — products, categories and promotions tailored in real time.',
    tech: ['Next.js','Python','TensorFlow','Stripe','Tailwind CSS'],
    results: [{v:'4.8%',l:'Conversion rate'},{v:'+340%',l:'Recommendation CTR'},{v:'2.1s',l:'Page load'},{v:'+$1.2M',l:'Annual revenue'}],
    color:'#e879f9', glow:'rgba(232,121,249,.25)', bg:'rgba(232,121,249,.08)', border:'rgba(232,121,249,.2)', gradient:'linear-gradient(90deg,#e879f9,transparent)',
  },
  {
    id: 13, category: 'Web', tag: 'Web',
    title: 'AnalyticsHub — White-Label Client Reporting SaaS',
    problem: 'Marketing agency spent 20 hours/month manually pulling data and building PDF reports for 40 clients — zero time left for strategy.',
    solution: 'White-label SaaS platform auto-pulls live data from GA4, Meta Ads and Google Ads into branded client portals. Reports update in real time, zero manual effort.',
    tech: ['React','Node.js','GA4 API','Meta API','Chart.js'],
    results: [{v:'40',l:'Clients automated'},{v:'20 hrs',l:'Saved/month'},{v:'Real-time',l:'Data refresh'},{v:'100%',l:'Client retention'}],
    color:'#fbbf24', glow:'rgba(251,191,36,.25)', bg:'rgba(251,191,36,.08)', border:'rgba(251,191,36,.2)', gradient:'linear-gradient(90deg,#fbbf24,transparent)',
  },
 
  // ── NEW: Q-Learning RL Visualizer ─────────────────────────────
  {
    id: 20, category: 'Web', tag: 'Web',
    title: 'Q-Learning Quest — Interactive Reinforcement Learning Visualizer',
    problem: 'Reinforcement Learning is notoriously difficult to understand. Every resource explains the theory, but nobody shows the agent actually learning in real time — making RL inaccessible to most developers.',
    solution: 'Built an interactive web-based Q-Learning visualizer where users watch the agent navigate levels, see the Q-table update live, and tune hyperparameters in real time. 4 progressive difficulty levels from beginner to expert.',
    tech: ['JavaScript','React','Reinforcement Learning','Q-Learning','Netlify'],
    results: [{v:'4 levels',l:'Progressive difficulty'},{v:'Live',l:'Q-table visualization'},{v:'Real-time',l:'Agent learning display'},{v:'Open',l:'Source & deployed'}],
    color:'#8b5cf6', glow:'rgba(139,92,246,.25)', bg:'rgba(139,92,246,.08)', border:'rgba(139,92,246,.2)', gradient:'linear-gradient(90deg,#8b5cf6,transparent)',
  },
 
  // ── ANDROID ──────────────────────────────────────────────────
  {
    id: 14, category: 'Android', tag: 'Android',
    title: 'FieldOps — Offline-First Mobile Inspection App',
    problem: 'Construction firm ran 300+ site inspections/month on paper forms. Data entry took 2 full days, errors were rampant and no site had internet connectivity.',
    solution: 'Offline-first Android app with camera AI captures defects automatically, auto-fills inspection reports and syncs everything the moment connectivity is restored.',
    tech: ['React Native','TensorFlow Lite','SQLite','Firebase','AWS S3'],
    results: [{v:'300+',l:'Inspections/month'},{v:'2 days → 2 hrs',l:'Report time'},{v:'Offline',l:'Works without internet'},{v:'98%',l:'Data accuracy'}],
    color:'#34d399', glow:'rgba(52,211,153,.25)', bg:'rgba(52,211,153,.08)', border:'rgba(52,211,153,.2)', gradient:'linear-gradient(90deg,#34d399,transparent)',
  },
  {
    id: 15, category: 'Android', tag: 'Android',
    title: 'DeliveryAI — AI Route-Optimised Last-Mile Tracking App',
    problem: 'Courier company lost 12% of deliveries to wrong addresses and inefficient routes. Customers had no visibility, drivers had no guidance.',
    solution: 'AI route-optimisation Android app gives drivers real-time navigation, captures digital signatures and sends customers live tracking links and SMS alerts automatically.',
    tech: ['React Native','Google Maps API','Firebase','Python','Twilio'],
    results: [{v:'12% → 0.4%',l:'Failed deliveries'},{v:'35%',l:'Fuel savings'},{v:'Live',l:'GPS tracking'},{v:'4.8★',l:'Customer rating'}],
    color:'#fb923c', glow:'rgba(251,146,60,.25)', bg:'rgba(251,146,60,.08)', border:'rgba(251,146,60,.2)', gradient:'linear-gradient(90deg,#fb923c,transparent)',
  },
  {
    id: 16, category: 'Android', tag: 'Android',
    title: 'FarmSmart — AgriTech IoT Crop Intelligence App',
    problem: 'Agricultural cooperative managing 500 farms had zero visibility into crop health or soil conditions. Disease spread unchecked, yields dropped season after season.',
    solution: 'Android app aggregates IoT sensor data, satellite NDVI imagery and real-time AI crop disease detection — giving farm managers instant alerts and treatment recommendations.',
    tech: ['React Native','AWS IoT','TensorFlow Lite','NDVI API','SQLite'],
    results: [{v:'500',l:'Farms monitored'},{v:'89%',l:'Disease detection accuracy'},{v:'28%',l:'Yield improvement'},{v:'Real-time',l:'Sensor updates'}],
    color:'#4ade80', glow:'rgba(74,222,128,.25)', bg:'rgba(74,222,128,.08)', border:'rgba(74,222,128,.2)', gradient:'linear-gradient(90deg,#4ade80,transparent)',
  },
 
  // ── NEW: ABW Services — Food Panda-like App ───────────────────
  {
    id: 21, category: 'Android', tag: 'Android',
    title: 'ABW Services — Multi-Category On-Demand Delivery App',
    problem: 'Local client needed a marketplace platform spanning food, grocery and medicine delivery — but existing solutions were single-category and could not be white-labelled. Building from scratch felt impossible.',
    solution: 'Developed a full-stack on-demand delivery platform covering customer ordering, restaurant/store management, real-time rider tracking and an admin dashboard — all in one system. Supports multiple categories simultaneously.',
    tech: ['Flutter','Firebase','Google Maps API','Dart','Real-time DB','Payment Integration'],
    results: [{v:'3 roles',l:'Customer, rider, admin'},{v:'Multi',l:'Category marketplace'},{v:'Real-time',l:'Order & rider tracking'},{v:'Live',l:'Earning dashboards'}],
    color:'#f97316', glow:'rgba(249,115,22,.25)', bg:'rgba(249,115,22,.08)', border:'rgba(249,115,22,.2)', gradient:'linear-gradient(90deg,#f97316,transparent)',
  },
 
  // ── NEW: Gossip Go — Chat App ─────────────────────────────────
  {
    id: 22, category: 'Android', tag: 'Android',
    title: 'Gossip Go — Secure Internal Organisation Chat App',
    problem: 'Organisations using WhatsApp for internal communication had no control over data privacy or security. Sensitive conversations were flowing through a public third-party platform with zero audit capability.',
    solution: 'Built a fully custom WhatsApp-equivalent chat app for internal organisational use — real-time messaging, phone verification, end-to-end security and complete data ownership. Deployed on private infrastructure.',
    tech: ['Flutter','Dart','Firebase Realtime Database','Real-time Stream Processing','Push Notifications'],
    results: [{v:'100%',l:'Data stays internal'},{v:'Real-time',l:'Message delivery'},{v:'Phone',l:'OTP verification'},{v:'Private',l:'Infrastructure deployment'}],
    color:'#22d3ee', glow:'rgba(34,211,238,.25)', bg:'rgba(34,211,238,.08)', border:'rgba(34,211,238,.2)', gradient:'linear-gradient(90deg,#22d3ee,transparent)',
  },
 
  // ── NEW: IoT Smart Home App ───────────────────────────────────
  {
    id: 23, category: 'Android', tag: 'Android',
    title: 'SmartHome IoT — Wi-Fi Device Control App',
    problem: 'IoT hardware client needed a mobile app to control smart devices over Wi-Fi — no existing platform supported their hardware API, custom authentication requirements and multi-device grouping needs.',
    solution: 'Designed and built a full-stack IoT companion app with Firebase authentication, real-time device control via API, device grouping, speed adjustment toggles and QR-code based device onboarding.',
    tech: ['Flutter','IOTA','Firebase','Dart','Wi-Fi API','QR Code Integration'],
    results: [{v:'Real-time',l:'Device control over Wi-Fi'},{v:'QR Code',l:'Instant device pairing'},{v:'Multi-device',l:'Grouping & control'},{v:'Custom',l:'Theme & user profiles'}],
    color:'#10b981', glow:'rgba(16,185,129,.25)', bg:'rgba(16,185,129,.08)', border:'rgba(16,185,129,.2)', gradient:'linear-gradient(90deg,#10b981,transparent)',
  },
 
  // ── NEW: Health Book App ──────────────────────────────────────
  {
    id: 24, category: 'Android', tag: 'Android',
    title: 'Health Book — Diagnostic Test Booking & Home Report App',
    problem: 'Patients wanting diagnostic tests had to physically visit labs, wait in queues and then return to collect reports — a painful process that deterred early health screening.',
    solution: 'Built a mobile platform where patients book diagnostic tests from home and receive digital reports directly in-app. Streamlined the entire lab experience into a few taps.',
    tech: ['Flutter','Firebase','Dart','Agile Development','REST APIs'],
    results: [{v:'Home',l:'Test booking'},{v:'Digital',l:'Report delivery'},{v:'Zero',l:'Lab visit required'},{v:'Full',l:'Booking management'}],
    color:'#06b6d4', glow:'rgba(6,182,212,.25)', bg:'rgba(6,182,212,.08)', border:'rgba(6,182,212,.2)', gradient:'linear-gradient(90deg,#06b6d4,transparent)',
  },
];

// ── CASE STUDIES ──────────────────────────────────────────────
// NOTE: Only ONE export of CASE_STUDIES — duplicate removed
export const CASE_STUDIES = [
  {
    id: "triovetura-automation", client: "olti_cerkini", industry: "E-commerce (Triovetura.com)", tag: "Automation & AI", tagColor: "#6366f1",
    headline: "Automated 25+ Data Points from Triovetura.com to Power Real-Time Product Intelligence & Decision Making",
    problem: "The client relied on manual tracking of product listings, pricing changes and availability on Triovetura.com. This process was slow, inconsistent and lacked depth, making it difficult to analyze competitors, monitor trends and make timely business decisions.",
    approach: "We developed a fully automated bot system to scrape and monitor 25+ critical product and listing features from Triovetura.com. The system was designed with anti-detection mechanisms, proxy rotation and scheduled automation to ensure reliable, real-time data collection.",
    execution: "Week 1: Website structure analysis and feature mapping. Week 1: Bot development using Playwright with anti-block handling. Week 2: Data extraction pipeline and database design. Week 2: Automation scheduling and proxy integration. Week 2: Testing, optimization and deployment.",
    tools: ["Playwright","Python","Proxy Rotation","PostgreSQL","AWS","Redis","Cron Jobs","Bright Data"],
    results: [{v:"25+",l:"Data points automated"},{v:"95%",l:"Manual work reduced"},{v:"Real-Time",l:"Data availability"},{v:"24/7",l:"Automated monitoring"}],
    quote: "This system completely changed how we track products and competitors. What used to take hours now happens automatically in real time.",
    color: "#6366f1",
  },
  {
    id: "ecommerce-scraping", client: "windiwinasti", industry: "Bol.com", tag: "Data Scraping", tagColor: "#a855f7",
    headline: "Automated 20+ Product Insights to Boost Pricing Strategy & Sales on Bol.com",
    problem: "The client was manually tracking competitor listings on Bol.com with limited visibility into pricing, stock status, seller rankings and product performance.",
    approach: "Developed a scalable data scraping system to extract 20+ critical product features from Bol.com, including price, discount, stock availability, seller position, ratings, reviews, delivery time and product specifications.",
    execution: "Week 1: Platform analysis and data point identification. Week 1: Scraper development with Playwright and proxy integration. Week 2: Data structuring and storage pipeline setup. Week 2: Automation scheduling and testing. Week 2: Deployment with monitoring and optimization.",
    tools: ["Playwright","Python","Redis","PostgreSQL","Shopify API","Bright Data","AWS","Grafana"],
    results: [{v:"22%",l:"Margin improvement"},{v:"2,500",l:"SKUs monitored"},{v:"15min",l:"Price adjustment lag"},{v:"8 sites",l:"Monitored 24/7"}],
    quote: "We went from guessing to knowing. Our pricing is now surgical — always competitive without eroding margin unnecessarily.",
    color: "#a855f7",
  },
  {
    id: "saas-churn", client: "", industry: "Software", tag: "NLP & Retention", tagColor: "#10b981",
    headline: "35% Churn Reduction in 90 Days with NLP-Powered Customer Intelligence",
    problem: "Nova received 10,000+ support messages monthly with no systematic way to identify at-risk customers until they had already churned. Their reactive approach was costing $1.2M ARR per year.",
    approach: "Fine-tuned a BERT-based sentiment and intent classifier on 18 months of historical data. Built a real-time scoring system that flags at-risk accounts and triggers automated intervention sequences.",
    execution: "Week 1: Data labelling and model training. Week 2: API build and HubSpot integration. Week 2: A/B testing of intervention sequences. Week 3: Monitoring and model improvement.",
    tools: ["HuggingFace","PyTorch","FastAPI","HubSpot API","Firebase","Grafana"],
    results: [{v:"35%",l:"Churn reduction"},{v:"94.2%",l:"Classification accuracy"},{v:"5ms",l:"Per message scored"},{v:"$1.2M",l:"ARR protected"}],
    quote: "We went from reactive firefighting to proactive retention in 30 days. The model just gets smarter every week.",
    author: "James Park, Head of Product · Nova SaaS",
    color: "#10b981",
  },
  {
    id: "ai-assistant-realestate", client: "oliviabyrne", industry: "Real Estate", tag: "AI Assistant", tagColor: "#06b6d4",
    headline: "WhatsApp AI Assistant Qualifies 300+ Leads/Month While Agents Sleep",
    problem: "Meridian's 12-agent team was drowning in unqualified leads. 70% of WhatsApp inquiries were basic questions that didn't require an agent's time.",
    approach: "Built a custom WhatsApp AI assistant trained on their 200+ property listings, FAQ database and qualification criteria.",
    execution: "Week 1: Knowledge base setup and conversation design. Week 1: Assistant training and integration. Week 2: Testing and agent training. Week 3: Launch and monitoring.",
    tools: ["OpenAI GPT-4","LangChain","WhatsApp Business API","Google Calendar API","Supabase","FastAPI"],
    results: [{v:"300+",l:"Leads/month qualified"},{v:"67%",l:"Agent time freed"},{v:"24/7",l:"Availability"},{v:"4.8/5",l:"Lead satisfaction"}],
    quote: "Our agents now only talk to people who are ready to buy. The AI handles everything else — and does it better than most junior agents I've hired.",
    color: "#06b6d4",
  },
  {
    id: "meridian-health", client: "Meridian Health", industry: "Healthcare", tag: "AI Automation", tagColor: "#6366f1",
    headline: "From 6-Hour Batch to 11-Minute Real-Time Processing",
    problem: "Meridian Health processed patient intake data in nightly batch jobs, causing 6-hour delays in care coordination and costing $420K/year in manual data entry staff.",
    approach: "We designed a real-time event-driven pipeline using Firebase and custom ETL workers, replacing the batch system entirely. An LLM layer handles unstructured clinical notes extraction.",
    tools: ["Firebase","Python","FastAPI","GPT-4","PostgreSQL","Docker"],
    execution: "Phase 1 (Week 1-2): audit existing pipeline. Phase 2 (Week 3-5): build parallel real-time system. Phase 3 (Week 6-7): validation. Phase 4 (Week 8): cutover and staff training.",
    results: [{v:"11 min",l:"Processing time (was 6 hrs)"},{v:"$420K",l:"Annual savings"},{v:"99.98%",l:"Data accuracy"},{v:"8 weeks",l:"Delivery"}],
    quote: "Scrapix AI cut our data processing time from 6 hours to 11 minutes. The ROI was immediate and undeniable.",
    author: "Sarah Chen, CTO",
    color: "#6366f1",
  },
  {
    id: "atlas-logistics", client: "Atlas Logistics", industry: "Logistics", tag: "Intelligent Automation", tagColor: "#a855f7",
    headline: "$2.4M in Hidden Savings: The AI Audit That Changed Everything",
    problem: "Atlas was manually processing 8,000 shipment documents/month, with a 4% error rate costing $180K in re-work annually, plus 12 FTEs dedicated to data entry.",
    approach: "Full workflow audit revealed three parallel automation opportunities. We built a computer vision and NLP pipeline for document processing, an automated routing engine, and a real-time dashboard.",
    tools: ["YOLOv8","GPT-4 Vision","n8n","React","PostgreSQL","AWS"],
    execution: "Two-week discovery sprint. Four-week build of CV extraction pipeline. Two-week integration with existing TMS. Final two weeks: UAT and go-live.",
    results: [{v:"$2.4M",l:"Annual savings identified"},{v:"0.2%",l:"Error rate (was 4%)"},{v:"12 FTEs",l:"Redeployed to value work"},{v:"10 wks",l:"Total delivery"}],
    quote: "Their AI audit identified $2.4M in annual savings we did not know existed. Exceptional, precise work.",
    author: "Marcus Reid, VP Operations",
    color: "#a855f7",
  },
  {
    id: "nova-saas", client: "Nova SaaS", industry: "Software", tag: "NLP & Retention", tagColor: "#10b981",
    headline: "35% Churn Reduction in 90 Days with NLP-Powered Intelligence",
    problem: "Nova received 10,000+ support messages monthly. No systematic way to identify at-risk customers until they churned.",
    approach: "Fine-tuned a BERT-based sentiment and intent classifier on historical data. Built a real-time scoring system that flags at-risk accounts and triggers automated intervention sequences.",
    tools: ["HuggingFace","PyTorch","FastAPI","HubSpot API","Firebase","Grafana"],
    execution: "Week 1-2: data labelling and model training. Week 3: API build and HubSpot integration. Week 4-6: A/B testing. Week 7-12: monitoring and model improvement.",
    results: [{v:"35%",l:"Churn reduction"},{v:"94.2%",l:"Classification accuracy"},{v:"5ms",l:"Per message scored"},{v:"$1.2M",l:"ARR protected"}],
    quote: "We went from reactive firefighting to proactive retention in 90 days. The model just gets smarter every week.",
    author: "James Park, Head of Product",
    color: "#10b981",
  },
];

// ── PROCESS STEPS ─────────────────────────────────────────────
// NOTE: Only ONE export of PROCESS_STEPS — duplicate removed
export const PROCESS_STEPS = [
  { num: "01", title: "Requirements & Analysis", desc: "We deep-dive into your operations, map your data flows and identify the exact bottlenecks costing you the most time and money. No assumptions — just facts.", deliverables: ["Workflow audit report","SRS doc","Technical feasibility assessment","Scope and timeline estimate"], duration: "2-3 days", color: "#6366f1" },
  { num: "02", title: "Strategy Design", desc: "We architect the full solution: data pipelines, AI model selection, integration points and a phased delivery roadmap with clear milestones and measurable outcomes.", deliverables: ["Solution architecture doc","Tech stack recommendation","Phased roadmap","Risk and mitigation plan"], duration: "2-3 days", color: "#a855f7" },
  { num: "03", title: "Development", desc: "Agile build in 2-week sprints with daily updates. You see real working software every two weeks — no black boxes, no surprises.", deliverables: ["Sprint demos (bi-weekly)","Staging environment","API documentation","Test coverage reports"], duration: "2-8 weeks", color: "#06b6d4" },
  { num: "04", title: "Testing & QA", desc: "Rigorous accuracy benchmarking, load testing, and parallel-run validation against your existing workflow before any production cutover.", deliverables: ["Accuracy benchmarks","Load test results","Parallel-run report","Sign-off checklist"], duration: "1-2 weeks", color: "#10b981" },
  { num: "05", title: "Delivery & Support", desc: "Smooth production cutover, full handover documentation, team training and 90 days of post-launch monitoring and support — included as standard.", deliverables: ["Production deployment","Runbook and docs","Team training session","90-day monitoring SLA"], duration: "1 week + 90 days", color: "#f59e0b" },
];

// ── BLOG POSTS ────────────────────────────────────────────────
export const BLOG_POSTS = [

// ================= AI (5) =================
{
 id: "ai-agents-operations",
 slug: "ai-agents-for-business-operations",
 category: "AI & Automation",
 categoryColor: "#6366f1",
 readTime: "8 min read",
 date: "April 2025",
 title: "AI Agents for Business Operations: How Intelligent Workflows Are Replacing Repetitive Teams",
 excerpt: "AI agents are moving beyond chatbots into autonomous operations. Here's how businesses are using them to reduce cost and scale faster.",
 quote: "The future is not humans versus AI — it's humans managing AI agents.",
 sections: [
 {heading:"What Are AI Agents Really?",content:"AI agents can perform tasks, make decisions based on rules, trigger workflows and collaborate with tools without manual intervention."},
 {heading:"Where Businesses Are Deploying Them",content:"Customer support, internal operations, lead qualification, data processing and automated decision systems are leading use cases."},
 {heading:"Cost Reduction Potential",content:"Businesses implementing agent-driven workflows are reporting 30-60% operational efficiency gains."},
 {heading:"How to Start Small",content:"Begin with a narrow use case such as ticket routing or reporting automation before scaling into multi-agent systems."}
 ]
},
{
 id: "computer-vision-business",
 slug: "computer-vision-business-use-cases",
 category: "AI & Automation",
 categoryColor: "#4f46e5",
 readTime: "7 min read",
 date: "April 2025",
 title: "Computer Vision in Business: 5 Ways Companies Are Using AI to See and Analyze",
 excerpt: "From quality inspection to retail analytics, computer vision is becoming a serious competitive advantage.",
 quote: "Data isn't just text anymore — visual data is becoming business intelligence.",
 sections:[
 {heading:"Automated Quality Control",content:"Manufacturers are using computer vision to detect defects faster than human inspectors."},
 {heading:"Retail Behavior Analysis",content:"Stores track customer movement and product engagement using vision systems."},
 {heading:"Document Extraction",content:"Invoices, IDs and forms can be processed with OCR and vision models."},
 {heading:"Security and Monitoring",content:"Smart surveillance systems now detect risks, patterns and anomalies automatically."}
 ]
},
{
 id:"predictive-ai-analytics",
 slug:"predictive-ai-analytics-growth",
 category:"AI & Automation",
 categoryColor:"#7c3aed",
 readTime:"8 min read",
 date:"March 2025",
 title:"Predictive AI Analytics: How Smart Forecasting Improves Business Decisions",
 excerpt:"Predictive systems help companies anticipate churn, sales and demand before problems happen.",
 quote:"Reactive businesses survive. Predictive businesses scale.",
 sections:[
 {heading:"Why Traditional Forecasting Fails",content:"Manual forecasting struggles with dynamic variables and hidden patterns."},
 {heading:"AI Forecasting Applications",content:"Demand prediction, customer churn modeling and financial projections are major use cases."},
 {heading:"Data Requirements",content:"Good predictive systems depend on clean historical data and continuous retraining."},
 {heading:"ROI of Predictive Systems",content:"Many organizations reduce waste and improve planning accuracy after deployment."}
 ]
},
{
 id:"custom-ai-chatbots",
 slug:"custom-ai-chatbots-enterprise",
 category:"AI & Automation",
 categoryColor:"#8b5cf6",
 readTime:"6 min read",
 date:"March 2025",
 title:"Custom AI Chatbots for Enterprises: Beyond Generic Assistants",
 excerpt:"Enterprise chatbots now handle support, internal knowledge and process automation.",
 quote:"A chatbot becomes valuable when it connects to business systems.",
 sections:[
 {heading:"Generic vs Custom Bots",content:"Custom bots integrate with CRMs, ERPs and internal knowledge unlike basic assistants."},
 {heading:"High Value Use Cases",content:"Support automation, HR helpdesks and sales assistants lead adoption."},
 {heading:"Security Considerations",content:"Enterprise deployments require permissions, governance and controlled access."},
 {heading:"Deployment Strategy",content:"Start with one workflow and expand after measuring usage and accuracy."}
 ]
},
{
 id:"ai-process-mining",
 slug:"ai-process-mining-optimization",
 category:"AI & Automation",
 categoryColor:"#4338ca",
 readTime:"9 min read",
 date:"February 2025",
 title:"AI Process Mining: Discover Hidden Inefficiencies in Your Operations",
 excerpt:"Before automating anything, process mining reveals where bottlenecks actually exist.",
 quote:"You cannot optimize what you have not mapped.",
 sections:[
 {heading:"What Process Mining Does",content:"It analyzes system logs to reconstruct how processes truly run."},
 {heading:"Finding Bottlenecks",content:"Organizations uncover approval delays, duplicate work and compliance gaps."},
 {heading:"Pairing With Automation",content:"Mining often becomes the foundation for later automation projects."},
 {heading:"Implementation Roadmap",content:"Begin with one process such as procurement or invoicing."}
 ]
},

// ================= SCRAPING (5) =================
{
 id:"scraping-price-monitoring",
 slug:"web-scraping-price-monitoring",
 category:"Data & Scraping",
 categoryColor:"#a855f7",
 readTime:"7 min read",
 date:"April 2025",
 title:"Price Monitoring with Web Scraping for Ecommerce Intelligence",
 excerpt:"Track competitors, pricing shifts and market trends automatically.",
 quote:"If competitors change prices daily and you react weekly, you're already behind.",
 sections:[
 {heading:"Why Manual Price Checks Fail",content:"Manual monitoring misses frequency and scale."},
 {heading:"Scraping Competitive Pricing",content:"Automated systems gather pricing and stock data continuously."},
 {heading:"Dynamic Pricing Opportunities",content:"Businesses use this data to optimize margins."},
 {heading:"Compliance and Scaling",content:"Responsible scraping architecture matters as volume grows."}
 ]
},
{
 id:"real-estate-data-scraping",
 slug:"real-estate-data-scraping",
 category:"Data & Scraping",
 categoryColor:"#9333ea",
 readTime:"8 min read",
 date:"April 2025",
 title:"Real Estate Data Scraping for Market Intelligence and Lead Generation",
 excerpt:"Property data scraping is reshaping real estate research and acquisition.",
 quote:"Property intelligence belongs to whoever gathers it first.",
 sections:[
 {heading:"What Data Can Be Collected",content:"Listings, pricing history, rent trends and ownership signals."},
 {heading:"Investor Use Cases",content:"Investors use scraped data for deal sourcing and analysis."},
 {heading:"Lead Generation Potential",content:"Agents generate prospect lists from public sources."},
 {heading:"Automation Stack",content:"Scraping plus enrichment creates high-value property intelligence systems."}
 ]
},
{
 id:"job-board-scraping",
 slug:"job-board-scraping-intelligence",
 category:"Data & Scraping",
 categoryColor:"#7e22ce",
 readTime:"6 min read",
 date:"March 2025",
 title:"Job Board Scraping as a Business Intelligence Goldmine",
 excerpt:"Hiring data reveals growth signals, technology adoption and market demand.",
 quote:"Hiring activity often reveals strategy before press releases do.",
 sections:[
 {heading:"Why Job Data Matters",content:"Open roles reveal budgets, growth and technology direction."},
 {heading:"Sales and Prospecting Uses",content:"Use hiring signals as intent data for outreach."},
 {heading:"Competitive Research",content:"Track competitor expansion through hiring patterns."},
 {heading:"Data Enrichment",content:"Combine scraped jobs data with firmographic intelligence."}
 ]
},
{
 id:"scraping-marketplaces",
 slug:"marketplace-scraping-strategies",
 category:"Data & Scraping",
 categoryColor:"#c026d3",
 readTime:"8 min read",
 date:"March 2025",
 title:"Marketplace Scraping Strategies for Product and Seller Intelligence",
 excerpt:"Extract insights from marketplaces for sourcing and analysis.",
 quote:"Marketplaces hold data most businesses never analyze deeply enough.",
 sections:[
 {heading:"Seller Intelligence",content:"Track sellers, pricing behavior and review shifts."},
 {heading:"Product Research",content:"Find demand trends and gaps through marketplace data."},
 {heading:"Competitive Benchmarking",content:"Monitor product positioning at scale."},
 {heading:"Automation Opportunities",content:"Scheduled data collection supports continuous intelligence."}
 ]
},
{
 id:"google-maps-scraping",
 slug:"google-maps-scraping-leads",
 category:"Data & Scraping",
 categoryColor:"#d946ef",
 readTime:"7 min read",
 date:"February 2025",
 title:"Google Maps Scraping for Local Business Lead Generation",
 excerpt:"Location data can fuel powerful prospecting systems.",
 quote:"Local business data is one of the most underused lead assets.",
 sections:[
 {heading:"What Can Be Extracted",content:"Business contacts, categories, reviews and geographic insights."},
 {heading:"Lead Generation Use Cases",content:"Sales teams build segmented outreach lists from local data."},
 {heading:"Enrichment Workflows",content:"Combine maps data with email and website intelligence."},
 {heading:"Scaling Outreach",content:"Turn local data into repeatable prospecting engines."}
 ]
},

// ================= WEB (5) =================
{
 id:"headless-commerce-guide",
 slug:"headless-commerce-development",
 category:"Web Development",
 categoryColor:"#10b981",
 readTime:"9 min read",
 date:"April 2025",
 title:"Headless Commerce Development for Scalable Ecommerce Platforms",
 excerpt:"Modern ecommerce is moving toward decoupled architecture.",
 quote:"Frontend flexibility becomes growth leverage in ecommerce.",
 sections:[
 {heading:"What Is Headless Commerce",content:"It separates frontend experiences from backend commerce engines."},
 {heading:"Business Benefits",content:"Faster experiences and omnichannel delivery improve conversion."},
 {heading:"Technology Stack",content:"Modern stacks often combine Next.js, APIs and commerce engines."},
 {heading:"When to Adopt It",content:"High-growth ecommerce brands benefit most."}
 ]
},
{
 id:"progressive-web-apps",
 slug:"progressive-web-apps-business",
 category:"Web Development",
 categoryColor:"#059669",
 readTime:"7 min read",
 date:"April 2025",
 title:"Progressive Web Apps: When a PWA Beats Native Apps",
 excerpt:"PWAs can reduce costs while delivering app-like experiences.",
 quote:"Sometimes the smartest mobile strategy starts on the web.",
 sections:[
 {heading:"Core Benefits",content:"Speed, offline capability and installability are major strengths."},
 {heading:"Use Cases",content:"Service businesses and ecommerce often benefit from PWAs."},
 {heading:"Cost Advantages",content:"One codebase can lower maintenance complexity."},
 {heading:"Limitations",content:"Evaluate feature requirements before choosing this route."}
 ]
},
{
 id:"api-development-guide",
 slug:"api-development-best-practices",
 category:"Web Development",
 categoryColor:"#047857",
 readTime:"8 min read",
 date:"March 2025",
 title:"Modern API Development Best Practices for Scalable Platforms",
 excerpt:"API design often determines whether software scales smoothly.",
 quote:"Poor APIs create expensive software problems later.",
 sections:[
 {heading:"API Design Principles",content:"Consistency and versioning are foundational."},
 {heading:"Security Essentials",content:"Authentication and rate limiting protect systems."},
 {heading:"Performance Optimization",content:"Caching and efficient queries matter."},
 {heading:"Documentation Strategy",content:"Great APIs require excellent developer experience."}
 ]
},
{
 id:"multi-vendor-marketplaces",
 slug:"multi-vendor-marketplace-development",
 category:"Web Development",
 categoryColor:"#34d399",
 readTime:"10 min read",
 date:"March 2025",
 title:"Building Multi-Vendor Marketplaces: Technical and Business Blueprint",
 excerpt:"Marketplace platforms have unique operational and engineering challenges.",
 quote:"Marketplaces are ecosystems, not simple web apps.",
 sections:[
 {heading:"Core Marketplace Modules",content:"Vendors, payments, commissions and logistics form the core."},
 {heading:"Architecture Decisions",content:"Scalability planning matters early."},
 {heading:"Trust and Moderation",content:"Ratings and dispute flows are critical."},
 {heading:"Growth Strategy",content:"Liquidity between buyers and sellers drives success."}
 ]
},
{
 id:"web-performance-optimization",
 slug:"web-performance-optimization-guide",
 category:"Web Development",
 categoryColor:"#22c55e",
 readTime:"6 min read",
 date:"February 2025",
 title:"Web Performance Optimization That Improves SEO and Conversions",
 excerpt:"Site speed impacts rankings, revenue and retention.",
 quote:"Performance is not technical polish — it's revenue optimization.",
 sections:[
 {heading:"Speed Bottlenecks",content:"Images, scripts and poor architecture often cause issues."},
 {heading:"Optimization Tactics",content:"Caching, code splitting and CDN strategies help."},
 {heading:"SEO Impact",content:"Performance affects search visibility."},
 {heading:"Measurement Framework",content:"Track metrics tied to business outcomes."}
 ]
},

// ================= MOBILE (5) =================
{
 id:"flutter-business-apps",
 slug:"flutter-business-app-development",
 category:"Mobile Applications",
 categoryColor:"#f59e0b",
 readTime:"8 min read",
 date:"April 2025",
 title:"Flutter Business Apps: Why Cross Platform Development Keeps Growing",
 excerpt:"Flutter continues gaining traction for fast scalable mobile products.",
 quote:"Shipping once for multiple platforms can be a strategic advantage.",
 sections:[
 {heading:"Why Businesses Choose Flutter",content:"Speed and shared codebase reduce delivery time."},
 {heading:"Use Cases",content:"Dashboards, marketplaces and service apps fit well."},
 {heading:"Performance Considerations",content:"Modern Flutter apps perform strongly for many use cases."},
 {heading:"Scaling Strategy",content:"Plan architecture before feature growth accelerates."}
 ]
},
{
 id:"on-demand-app-development",
 slug:"on-demand-app-development-models",
 category:"Mobile Applications",
 categoryColor:"#d97706",
 readTime:"7 min read",
 date:"April 2025",
 title:"On-Demand App Development Models for Startups and Enterprises",
 excerpt:"Ride-sharing style models have expanded into many industries.",
 quote:"Convenience-driven products win where friction exists.",
 sections:[
 {heading:"Common On Demand Models",content:"Delivery, booking and service marketplaces dominate."},
 {heading:"Key Features",content:"Real-time tracking and payments are essential."},
 {heading:"Monetization Options",content:"Commission, subscription and hybrid models exist."},
 {heading:"Technology Planning",content:"Scalability matters from launch."}
 ]
},
{
 id:"mobile-fintech-apps",
 slug:"fintech-mobile-app-development",
 category:"Mobile Applications",
 categoryColor:"#f97316",
 readTime:"9 min read",
 date:"March 2025",
 title:"Fintech Mobile App Development: Security and Scale Considerations",
 excerpt:"Financial apps require stronger architecture than average consumer apps.",
 quote:"In fintech, trust is part of the product.",
 sections:[
 {heading:"Security Requirements",content:"Encryption and compliance are foundational."},
 {heading:"Core Features",content:"Payments, analytics and user controls matter."},
 {heading:"Architecture Choices",content:"Reliability and auditability drive decisions."},
 {heading:"Growth Challenges",content:"Scaling regulated products requires careful planning."}
 ]
},
{
 id:"super-app-strategy",
 slug:"super-app-development-strategy",
 category:"Mobile Applications",
 categoryColor:"#fb923c",
 readTime:"8 min read",
 date:"March 2025",
 title:"Super App Strategy: When Should Businesses Build One Ecosystem App?",
 excerpt:"The super app model is expanding beyond major tech giants.",
 quote:"Retention increases when multiple services live in one ecosystem.",
 sections:[
 {heading:"What Defines a Super App",content:"Multiple integrated services under one product experience."},
 {heading:"When It Makes Sense",content:"High-frequency ecosystems benefit most."},
 {heading:"Complexity Challenges",content:"Poor execution can create bloated experiences."},
 {heading:"Roadmap Approach",content:"Build one strong service before expanding."}
 ]
},
{
 id:"enterprise-mobile-security",
 slug:"enterprise-mobile-security-guide",
 category:"Mobile Applications",
 categoryColor:"#ea580c",
 readTime:"6 min read",
 date:"February 2025",
 title:"Enterprise Mobile Security Essentials for Modern Apps",
 excerpt:"Security failures in mobile products can destroy trust fast.",
 quote:"Mobile security is a business issue, not just a technical one.",
 sections:[
 {heading:"Primary Threats",content:"Credential theft and insecure APIs remain risks."},
 {heading:"Security Controls",content:"Authentication, encryption and device protections matter."},
 {heading:"Compliance Factors",content:"Regulated industries require stronger controls."},
 {heading:"Security by Design",content:"Embed protection early in product planning."}
 ]
},

// ================= ERP (5) =================
{
 id:"erp-manufacturing-guide",
 slug:"erp-for-manufacturing",
 category:"ERP Systems",
 categoryColor:"#0ea5e9",
 readTime:"9 min read",
 date:"April 2025",
 title:"ERP for Manufacturing: Integrating Operations End to End",
 excerpt:"Manufacturers rely on ERP to unify production, inventory and planning.",
 quote:"Disconnected manufacturing systems create expensive inefficiencies.",
 sections:[
 {heading:"Core ERP Modules",content:"Inventory, production and procurement are central modules."},
 {heading:"Operational Gains",content:"ERP improves visibility and planning."},
 {heading:"Implementation Risks",content:"Poor process mapping causes failures."},
 {heading:"Modern ERP Trends",content:"Cloud and analytics are transforming ERP."}
 ]
},
{
 id:"custom-erp-development",
 slug:"custom-erp-development-benefits",
 category:"ERP Systems",
 categoryColor:"#0284c7",
 readTime:"8 min read",
 date:"April 2025",
 title:"Custom ERP Development vs Off-The-Shelf Solutions",
 excerpt:"Should businesses customize or buy standard ERP systems?",
 quote:"The right ERP is shaped by process complexity, not software trends.",
 sections:[
 {heading:"When Custom ERP Wins",content:"Unique workflows may require tailored systems."},
 {heading:"Off The Shelf Advantages",content:"Faster deployment and lower initial complexity."},
 {heading:"Cost Considerations",content:"Evaluate long-term ownership, not just upfront spend."},
 {heading:"Decision Framework",content:"Match system choice to growth needs."}
 ]
},
{
 id:"crm-erp-integration",
 slug:"crm-erp-integration-strategy",
 category:"ERP Systems",
 categoryColor:"#0369a1",
 readTime:"7 min read",
 date:"March 2025",
 title:"CRM and ERP Integration Strategy for Unified Operations",
 excerpt:"Disconnected customer and operational systems create friction.",
 quote:"Integration often delivers more value than new software purchases.",
 sections:[
 {heading:"Why Integration Matters",content:"Data silos slow execution."},
 {heading:"Integration Use Cases",content:"Sales, finance and fulfillment workflows benefit."},
 {heading:"Technical Approaches",content:"APIs and middleware often enable integration."},
 {heading:"Governance",content:"Data quality must be managed across systems."}
 ]
},
{
 id:"erp-warehouse-automation",
 slug:"erp-warehouse-automation",
 category:"ERP Systems",
 categoryColor:"#38bdf8",
 readTime:"8 min read",
 date:"March 2025",
 title:"ERP Warehouse Automation for Inventory Accuracy and Speed",
 excerpt:"Warehouse automation becomes more powerful when driven through ERP.",
 quote:"Inventory accuracy impacts both revenue and customer trust.",
 sections:[
 {heading:"Warehouse Challenges",content:"Manual inventory processes create costly errors."},
 {heading:"Automation Opportunities",content:"Barcode systems and real-time tracking improve control."},
 {heading:"ERP Coordination",content:"ERP ties operations together across departments."},
 {heading:"Scaling Operations",content:"Automation supports higher throughput."}
 ]
},
{
 id:"erp-digital-transformation",
 slug:"erp-digital-transformation-roadmap",
 category:"ERP Systems",
 categoryColor:"#7dd3fc",
 readTime:"10 min read",
 date:"February 2025",
 title:"ERP Digital Transformation Roadmap for Growing Enterprises",
 excerpt:"ERP often sits at the center of broader digital transformation.",
 quote:"Transformation fails when systems change without process change.",
 sections:[
 {heading:"Transformation Foundations",content:"Process redesign should come before software deployment."},
 {heading:"Phased ERP Modernization",content:"Incremental rollout reduces risk."},
 {heading:"Change Management",content:"User adoption is often the hardest part."},
 {heading:"Measuring Success",content:"Track operational metrics tied to business outcomes."}
 ]
}

];



// ── TEAM ─────────────────────────────────────────────────────
export const TEAM = [
  { id: 0, role_type: "ceo", initials: "Sajjad", name: "Sajjad Hussain", image: "sajjad.jpg", gradient: "linear-gradient(135deg,#6366f1,#a855f7)", bio: "Visionary entrepreneur and AI engineer with 3+ years building AI systems at scale. My mission: eliminate repetitive work from every business through intelligent automation.", linkedin: "https://www.linkedin.com/in/sajjad-hussain-a77812278/", highlight: "AI Engineer & Entrepreneur" },
  { id: 1, role_type: "manager", initials: "MI", name: "Mr. Abdur Raheem", role: "Project Manager", image: "abdur.jpeg", gradient: "linear-gradient(135deg,#a855f7,#ec4899)", bio: "Experienced in planning, executing and delivering projects on time and within budget while aligning with business objectives. Skilled in team leadership, risk management and stakeholder communication." },
  { id: 2, role_type: "director", initials: "AB", name: "Mrs.Javeria Ali", role: "Director of Engineering", image: "jvr.png", gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)", bio: "Full-stack architect and engineering director with deep expertise in distributed systems, real-time data pipelines and cloud infrastructure. Oversees all technical delivery and engineering standards." },
  { id: 3, role_type: "team", initials: "SS", name: "Mr. Sameer Shahid", role: "Full Stack Expert", image: "sameer.jpeg", gradient: "linear-gradient(135deg,#10b981,#06b6d4)", bio: "Full-stack web developer with expertise in building scalable SaaS platforms and automation solutions. Skilled in Python, JavaScript and cloud technologies." },
  { id: 4, role_type: "team", initials: "RK", name: "Mr. Abdul Rehman", role: "Senior Mobile App Developer", image: "senior_mobile_app_developer.jpeg", gradient: "linear-gradient(135deg,#f59e0b,#f43f5e)", bio: "Full Stack Mobile App Developer with expertise in building scalable iOS and Android applications. Skilled in React Native, Flutter and cloud technologies." },
  { id: 5, role_type: "team", initials: "LT", name: "Mr. Muhammad Imran", role: "Business Application Developer", image: "Imran.jpeg", gradient: "linear-gradient(135deg,#f43f5e,#a855f7)", bio: "Business Application Developer specializing in designing and building scalable, data-driven applications that streamline operations and enhance business efficiency." },
  { id: 6, role_type: "team", initials: "OA", name: "Mr. Umair Ali", role: "Senior AI Engineer", image: "senior_ai_engineer.jpeg", gradient: "linear-gradient(135deg,#6366f1,#06b6d4)", bio: "Specialises in fine-tuning LLMs and deploying computer vision models to production. Full-stack architect with expertise in building scalable AI systems and data pipelines." },
  { id: 7, role_type: "team", initials: "LS", name: "Mr. Rehmat Ali", role: "Senior UI & UX designer", image: "rehmat.jpeg", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Fully experienced and Passionate UI/UX Designer with expertise in creating user-centered, visually engaging and functional digital interfaces. " },
  { id: 8, role_type: "team", initials: "LS", name: "Muhammad Javaid Jameel", role: "Cyber security expert", image: "jvd.jpeg", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Protecting digital assets through ethical security practices, vulnerability assessment and advanced cyber security solutions." },
  { id: 9, role_type: "team", initials: "LS", name: "Mr. Muhammad Zain", role: "Website Developer", image: "zain.jpeg", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Full-Stack Developer with expertise in building scalable web applications and automation solutions. Skilled in Python, JavaScript and cloud technologies." },
  { id: 10, role_type: "team", initials: "LS", name: "Mr. Noman Tabish", role: "Deep Learning Specialist", image: "Noman.jpeg", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Deep Learning Specialist skilled in building and deploying AI models using neural networks (CNNs, RNNs, Transformers) to solve complex real-world problems." },
  { id: 11, role_type: "team", initials: "Al", name: "Mr. Ali", role: "Senior Video Editor", image: "senior_video_editor_&_graphics_designer.jpeg", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Specializes in advanced video editing, motion graphics, color grading and post-production workflows. Has created compelling visual content for brands." },
  { id: 12, role_type: "team", initials: "SQ", name: "Mrs. Sidra Qasim", role: "Virtual Assistant", image: "Sid.png", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Virtual Assistant combines efficiency with professionalism to deliver seamless operational support. Specializes in Data Entry, Lead Generation & Management." },
  { id: 13, role_type: "team", initials: "SQ", name: "Mrs. Dua Fatima", role: "Virtual Assistant", image: "dua.png", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Virtual Assistant combines efficiency with professionalism to deliver seamless operational support. Specializes in Data Entry, Lead Generation & Management." },
  { id: 14, role_type: "team", initials: "SQ", name: "Mr. Muhammad Ubaid", role: "Virtual Assistant", image: "ubaid.png", gradient: "linear-gradient(135deg,#06b6d4,#10b981)", bio: "Virtual Assistant providing reliable administrative, data management and customer support services to keep business operations organized and efficient." },
];

// ── METRICS ───────────────────────────────────────────────────
export const METRICS = [
  { target: 100, suffix: "+",     label: "Projects Completed",  sub: "Across 20+ industries",         color: "#6366f1" },
  { target: 98,  suffix: "%",     label: "Client Satisfaction", sub: "Based on exit surveys",          color: "#a855f7" },
  { target: 60,  suffix: "+",     label: "Enterprise Clients",  sub: "In 10 countries",                color: "#06b6d4" },
  // { target: 40,  suffix: "M+",    prefix: "$", label: "Client Savings", sub: "Operational cost reduction", color: "#f59e0b" },
  { target: 87,  suffix: "%",     label: "Avg. Time Saved",     sub: "On automated tasks",             color: "#10b981" },
  { target: 30,  suffix: " days", label: "Avg. Payback",        sub: "On first automation",            color: "#ec4899" },
];

// ── CONTACT INFO ──────────────────────────────────────────────
export const CONTACT_INFO = {
  email:    "scrapixai@gmail.com",
  whatsapp: "https://wa.me/923246664914",
  address:  "Bahawalpur, Punjab, Pakistan",
};

// ── WHY CHOOSE US ─────────────────────────────────────────────
export const WHY_US = [
  { icon: "⬡", color: "#6366f1", title: "Business-First Engineering", desc: "Every system we deliver is measured against a business outcome: revenue gained, cost cut and time saved. If it doesn't move the needle, we don't ship it." },
  { icon: "◈", color: "#a855f7", title: "Speed to Value", desc: "Most engagements deliver measurable ROI within 30 days of kickoff. We iterate in 2-week sprints so you see results fast." },
  { icon: "◇", color: "#06b6d4", title: "Full Transparency", desc: "No black boxes. You get full source code, documentation and runbooks with every delivery. Your system, your ownership forever." },
  { icon: "◉", color: "#10b981", title: "30-Days Post-Launch Support", desc: "We don't disappear after delivery. Every project includes 30 days of monitoring, bug fixing and optimization support as standard." },
  { icon: "⬟", color: "#f59e0b", title: "End-to-End Capability", desc: "From AI model training to full-stack development to design  one team, one relationship. No coordination overhead between multiple agencies." },
  { icon: "◈", color: "#ec4899", title: "Proven at Scale", desc: "100+ production systems delivered across 20+ industries. We've seen the edge cases and scaling challenges  and know how to avoid them." },
];

// ── USE CASES ─────────────────────────────────────────────────
export const USE_CASES = [
  { industry: "E-Commerce",       color: "#6366f1", icon: "🛒", cases: ["Real-time competitor price monitoring","AI product recommendations","Inventory automation","Abandoned cart AI recovery"] },
  { industry: "Finance & FinTech",color: "#a855f7", icon: "💹", cases: ["Automated financial reporting","Fraud detection models","Document processing AI","Regulatory compliance automation"] },
  { industry: "Real Estate",      color: "#06b6d4", icon: "🏢", cases: ["Lead qualification bots","Property data scraping","AI listing descriptions","Market intelligence dashboards"] },
  { industry: "SaaS & Tech",      color: "#10b981", icon: "⚡", cases: ["Churn prediction models","Onboarding automation","AI customer support","Usage analytics AI"] },
  { industry: "Healthcare",       color: "#f59e0b", icon: "🏥", cases: ["Medical document AI","Appointment automation","Patient communication bots","Compliance monitoring"] },
  { industry: "Manufacturing",    color: "#ec4899", icon: "🏭", cases: ["Vision-based QC systems","Predictive maintenance AI","Supply chain automation","ERP integrations"] },
];