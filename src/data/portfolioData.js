// src/data/portfolioData.js
import cvFile from "../assets/CV_OF_OBAYED_BIN_MAHFUZ.pdf";
import profilePic from "../assets/obayed_beach.jpg";

export const personalInfo = {
  name: "Obayed",
  nickname: "Obayed",
  fullName: "Obayed Bin Mahfuz",
  headline: "AI-Native Backend Engineer & Distributed Systems Specialist",
  typingRoles: [
    "AI-Native Backend Engineer & Systems Specialist",
    "Spring AI & LangChain4j Enterprise Systems",
    "Production RAG Pipelines & pgvector Embeddings",
    "Agentic AI & Multi-Agent Orchestration (MCP)",
    "Java & Microservices Specialist (5+ Years)",
    "Top-Tier AI Researcher (ACL Findings '23 Author)"
  ],
  bio: "AI-Native Backend Engineer with 5+ years of enterprise experience in high-concurrency Java and Spring Boot microservices. Engineering next-generation distributed systems by bridging resilient backend orchestration with Agentic AI—including Spring AI, pgvector RAG pipelines, Apache Kafka event streams, and MCP-based multi-agent tool calling—grounded in peer-reviewed NLP research published at ACL 2023.",
  availability: "Available for Remote Full-Time Roles & High-Impact AI Backend Contracts",
  location: "Dhaka, Bangladesh (Flexible Global Remote Overlap)",
  email: "obayed.mahfuz@gmail.com",
  secondaryEmail: "obayedsiam@gmail.com",
  phone: "+880 1534 750194",
  whatsappUrl: "https://wa.me/8801534750194",
  cvFile: cvFile,
  profilePic: profilePic,
  socialLinks: {
    github: "https://github.com/obayedsiam",
    linkedin: "https://www.linkedin.com/in/obayed-mahfuz",
    leetcode: "https://leetcode.com/user5461JF/",
    wordpress: "https://obayedsiam.wordpress.com"
  },
  stats: [
    { label: "Backend Systems", value: "5+ Years" },
    { label: "Top-Tier AI Paper", value: "ACL '23" },
    { label: "AI Ecosystem", value: "Spring AI • RAG" },
    { label: "Distributed Scale", value: "K8s • Kafka" }
  ]
};

export const clientValueProps = [
  {
    id: "remote",
    badge: "For Global AI & Remote Teams",
    title: "AI-Native Backend & Multi-Agent Architecture",
    description: "Enterprise-grade AI backend engineering bridging Spring Boot microservices with Spring AI, LangChain4j, autonomous agent workflows (MCP), and resilient microservice orchestration.",
    benefits: [
      "Spring AI & LangChain4j integration with Java microservices",
      "Multi-Agent orchestration, Tool Calling, and Model Context Protocol (MCP)",
      "Autonomous task execution, agent memory, and structured outputs",
      "High-reliability backend standards with 130+ automated tests (JUnit, Mockito)"
    ],
    ctaText: "Hire for AI Backend Role",
    color: "cyan"
  },
  {
    id: "freelance",
    badge: "For Startups & AI Product Teams",
    title: "Production RAG Pipelines & Semantic Search",
    description: "End-to-end RAG architecture with vector databases (pgvector/PostgreSQL), low-latency document chunking, semantic retrieval, and guardrailed LLM integration.",
    benefits: [
      "pgvector & PostgreSQL vector embeddings store and hybrid search",
      "Enterprise document ingestion, semantic chunking & reranking",
      "AI guardrails, prompt injection defense, and semantic caching",
      "AWS Cloud workflows (Cognito, Lambda, API Gateway) & sub-second latency"
    ],
    ctaText: "Discuss AI Project",
    color: "emerald"
  },
  {
    id: "local",
    badge: "For Telecom, CRM & High-Scale Systems",
    title: "Event-Driven AI Streaming & Cloud-Native Scale",
    description: "High-concurrency event-driven AI pipelines powered by Apache Kafka, containerized microservices on Kubernetes, and domain-specialized Telecom/CRM AI assistants.",
    benefits: [
      "Apache Kafka & Spring Kafka event-driven real-time AI pipelines",
      "Container orchestration with Docker, Kubernetes (K8s), and Helm",
      "Domain-specific AI: Telecom customer resolution & CRM intelligence",
      "Full SRS/SDD architectural blueprints, UML diagrams, and schema tuning"
    ],
    ctaText: "Schedule Consultation",
    color: "amber"
  }
];

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "ai", label: "AI & Agentic Systems" },
    { id: "backend", label: "Java & Microservices" },
    { id: "cloud", label: "Cloud-Native & Kafka" },
    { id: "database", label: "Vector & Relational DBs" },
    { id: "research", label: "NLP & AI Research" },
    { id: "testing", label: "Observability & Testing" }
  ],
  items: [
    {
      name: "Spring AI & LangChain4j",
      category: "ai",
      level: 95,
      rating: "Expert",
      details: "Java LLM integration, function calling, prompt engineering, structured output parsing, chat memory"
    },
    {
      name: "Multi-Agent Systems & MCP",
      category: "ai",
      level: 92,
      rating: "Specialist",
      details: "Model Context Protocol (MCP), tool-calling agents, autonomous memory, multi-step orchestration"
    },
    {
      name: "Enterprise RAG & pgvector",
      category: "ai",
      level: 94,
      rating: "Expert",
      details: "Document chunking, vector embeddings, hybrid retrieval, context window optimization, reranking"
    },
    {
      name: "Java (Core & Advanced)",
      category: "backend",
      level: 96,
      rating: "Expert",
      details: "OOP, Concurrency, Multithreading, Virtual Threads, Collections Framework, Java 17/21"
    },
    {
      name: "Spring Boot & Microservices",
      category: "backend",
      level: 95,
      rating: "Expert",
      details: "Microservices architecture, RESTful APIs, Workflow orchestration, Service decoupling, Resilient APIs"
    },
    {
      name: "Spring Security & OAuth2",
      category: "backend",
      level: 92,
      rating: "Expert",
      details: "OAuth2 (Google, Apple, Facebook), JWT token-based access control, role authorization, AI gateway security"
    },
    {
      name: "Apache Kafka & Event Streaming",
      category: "cloud",
      level: 90,
      rating: "Expert",
      details: "Spring Kafka, real-time event-driven streaming, asynchronous message bus, partitioned topics"
    },
    {
      name: "Docker & Kubernetes (K8s)",
      category: "cloud",
      level: 88,
      rating: "Advanced",
      details: "Containerization, Helm charts, pod lifecycle, service mesh, cloud-native deployments"
    },
    {
      name: "AWS Cloud Services",
      category: "cloud",
      level: 88,
      rating: "Advanced",
      details: "AWS API Gateway, Lambda serverless triggers, Cognito auth workflows, SES, SNS, S3"
    },
    {
      name: "PostgreSQL & pgvector",
      category: "database",
      level: 93,
      rating: "Expert",
      details: "Vector database extension, HNSW indexing, cosine similarity, schema design, query optimization, MySQL"
    },
    {
      name: "Hibernate & Spring Data JPA",
      category: "database",
      level: 92,
      rating: "Expert",
      details: "ORM mapping, Entity relationships, Caching strategies, High-throughput transactional persistence"
    },
    {
      name: "Bangla NLP & Deep Learning",
      category: "research",
      level: 94,
      rating: "Specialist",
      details: "ACL Findings 2023 published author, Transformer models, Sentiment Analysis, PyTorch, Tokenization"
    },
    {
      name: "AI Observability & Guardrails",
      category: "testing",
      level: 89,
      rating: "Advanced",
      details: "LangSmith, OpenTelemetry, prompt injection mitigation, semantic caching, token cost optimization"
    },
    {
      name: "Testing & TDD (JUnit, Mockito)",
      category: "testing",
      level: 92,
      rating: "Expert",
      details: "130+ automated test cases developed, Test-driven development, MockMvc, integration testing"
    },
    {
      name: "Technical Architecture & Docs",
      category: "cloud",
      level: 91,
      rating: "Expert",
      details: "Enterprise SRS & SDD architecture with UML, sequence, and ERD diagrams for 13 system modules"
    }
  ]
};

export const experiences = [
  {
    role: "Full Stack Java Developer",
    company: "Compax Digital",
    location: "Dhaka, Bangladesh",
    period: "Feb 2026 – Present",
    status: "Current Role",
    summary: "Developing a telecom eCommerce platform and engineering modular workflow orchestration—the architectural bedrock for Agentic AI execution.",
    keyAchievements: [
      "Working on a high-concurrency Telecom eCommerce platform in Java and Spring Boot.",
      "Designed and implemented a scalable, modular workflow orchestration engine for automated multi-step operations.",
      "Architected backend integration contracts optimized for autonomous tool-calling and API execution."
    ],
    techStack: ["Java", "Spring Boot", "Workflow Orchestration", "Microservices", "PostgreSQL", "Spring AI"]
  },
  {
    role: "Java Backend Developer",
    company: "Anwar Technologies (AESL)",
    location: "Dhaka, Bangladesh",
    period: "May 2025 – Jan 2026",
    status: "Completed",
    summary: "Engineered secure cloud-native CRM systems with strict transactional integrity and established rigorous TDD standards.",
    keyAchievements: [
      "Built enterprise CRM systems following cloud-native best practices, role-based security, and high data consistency.",
      "Applied TDD principles by developing 130+ automated test cases with JUnit and Mockito, ensuring bug-free releases.",
      "Formulated relational schemas and query optimizations that serve as structured data sources for CRM RAG pipelines."
    ],
    techStack: ["Spring Boot", "Spring Security", "JUnit", "Mockito", "Spring Data JPA", "Hibernate", "PostgreSQL"]
  },
  {
    role: "Software Engineer",
    company: "Adventure Dhaka Ltd",
    location: "Dhaka, Bangladesh",
    period: "May 2024 – May 2025",
    status: "Completed",
    summary: "Built modular microservices with OAuth2 multi-provider auth and AWS serverless event workflows.",
    keyAchievements: [
      "Developed modular microservices with Spring Boot, integrating OAuth2 for Google, Apple, and Facebook authentication (Live: adventure.inc).",
      "Designed RESTful APIs and implemented secure token-based access control through AWS API Gateway.",
      "Automated user onboarding and verification workflows using AWS Cognito and Lambda triggers."
    ],
    techStack: ["Spring Boot", "Spring Security", "OAuth2", "AWS (Cognito, Lambda, API Gateway)", "REST APIs"]
  },
  {
    role: "Software Engineer",
    company: "Ethics Advance Technology Limited (EATL)",
    location: "Dhaka, Bangladesh",
    period: "April 2021 – April 2024",
    status: "Completed",
    summary: "Delivered core backend microservices and architecture documentation for BANBEIS IEIMS.",
    keyAchievements: [
      "Authored comprehensive SRS and SDD documentation with UML diagrams for 13 system modules.",
      "Delivered reliable backend microservices across nationwide educational government platforms.",
      "Optimized relational database schemas and transactional throughput across high-concurrency servers."
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "MySQL", "UML", "SRS/SDD"]
  },
  {
    role: "IoT Instructor",
    company: "Multitech IT (Bangladesh High Tech Park)",
    location: "Rajshahi, Bangladesh",
    period: "September 2019 – April 2020",
    status: "Completed",
    summary: "Trained students in microcontroller programming, sensors, and embedded systems.",
    keyAchievements: [
      "Trained students on microcontroller architecture, sensor integration, and embedded project development."
    ],
    techStack: ["Embedded Systems", "Microcontrollers", "Sensor Integration", "IoT", "C/C++"]
  }
];

export const researchPublications = [
  {
    id: "aclexplore",
    venue: "ACL Findings 2023 (Toronto, Canada)",
    venueBadge: "Top-Tier Global Venue (ACL)",
    title: "BanglaBook: A Large-scale Bangla Dataset for Sentiment Analysis from Book Reviews",
    thesisType: "M.Sc. Thesis at Islamic University of Technology (IUT)",
    abstract: "Pioneered the creation of 'BanglaBook', one of the largest systematically annotated Bengali datasets for sentiment analysis curated from extensive book reviews. Evaluated state-of-the-art Transformer architectures (BERT, RoBERTa, BanglaBERT) and established benchmark accuracy standards for Bengali computational linguistics.",
    highlights: [
      "Published at the Association for Computational Linguistics (ACL Findings 2023, Toronto, Canada)",
      "Curated and labeled thousands of Bengali text reviews with rigorous inter-annotator agreement",
      "Benchmark evaluations with modern Transformer models (BanglaBERT, mBERT, XLM-RoBERTa)",
      "Substantial contribution to open NLP resources for lower-resource South Asian languages"
    ],
    tags: ["Natural Language Processing", "Transformers", "Bangla NLP", "Sentiment Analysis", "PyTorch"],
    category: "nlp"
  },
  {
    id: "icerie2019",
    venue: "ICERIE 2019 (SUST, Bangladesh)",
    venueBadge: "International Conference",
    title: "Power Attribute Monitor, Analyze, Control and Protection of a System with Internet of Things",
    thesisType: "Peer-Reviewed Conference Paper",
    abstract: "Designed an automated IoT-enabled electrical monitoring and protective framework capable of measuring real-time voltage, current, and power factor fluctuations, with automated circuit trip protection and cloud dashboard telemetry.",
    highlights: [
      "Engineered embedded hardware sensing circuitry with microcontroller logic",
      "Implemented automated alert triggers and remote cutoff relays during overload anomalies",
      "Real-time sensor telemetry streamed to cloud monitoring dashboards"
    ],
    tags: ["Internet of Things (IoT)", "Smart Grid", "Embedded Systems", "Hardware Protection"],
    category: "iot"
  },
  {
    id: "iciev2018",
    venue: "ICIEV-ICIVPR 2018 (Japan)",
    venueBadge: "IEEE International Conference (Japan)",
    title: "Inference of Gene Regulatory Network with S-system and Artificial Bee Colony Algorithm",
    thesisType: "B.Sc. Thesis at BRAC University",
    abstract: "Investigated computational genomics and non-linear differential equation parameter estimation using the S-system formalism. Applied the meta-heuristic Artificial Bee Colony (ABC) optimization algorithm to reconstruct complex Gene Regulatory Networks (GRN) from gene expression time-series data.",
    highlights: [
      "Formulated mathematical optimization for high-dimensional biological network inference",
      "Benchmarked ABC algorithm against genetic algorithms and particle swarm optimization",
      "Presented and published at ICIEV-ICIVPR in Japan"
    ],
    tags: ["Bioinformatics", "Evolutionary Algorithms", "Computational Genomics", "Artificial Bee Colony"],
    category: "bioinformatics"
  }
];

export const projectsData = [
  {
    id: "telecom-agent",
    title: "Telecom Autonomous Multi-Agent Support Orchestrator",
    category: "ai",
    badge: "Flagship Multi-Agent System",
    description: "Autonomous agentic backend orchestrating multi-step telecom customer service workflows via Model Context Protocol (MCP), Spring AI, and dynamic tool calling across live CRM, billing, and provisioning microservices.",
    features: [
      "Multi-agent coordination using Spring AI and Model Context Protocol (MCP)",
      "Dynamic tool-calling into live CRM, billing, and eSIM provisioning REST APIs",
      "Multi-step reasoning engine with autonomous plan-and-solve execution and memory",
      "Enterprise guardrails preventing prompt injection and unauthorized transactional actions"
    ],
    tech: ["Spring AI", "LangChain4j", "MCP Protocol", "Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    clientType: "Telecom Enterprise AI",
    icon: "brain"
  },
  {
    id: "crm-rag",
    title: "Enterprise CRM RAG Knowledge & Intelligence Engine",
    category: "ai",
    badge: "Enterprise RAG Pipeline",
    description: "High-throughput semantic intelligence and RAG retrieval pipeline powering instant, context-aware answers from enterprise CRM customer history and corporate documentation.",
    features: [
      "PostgreSQL + pgvector semantic vector store with HNSW index and hybrid search",
      "Asynchronous document ingestion pipeline with semantic chunking and embedding generation",
      "Context-aware prompt synthesis with sub-200ms retrieval and hallucination mitigation",
      "Integrated with Spring Boot microservices and secured via OAuth2 JWT tokens"
    ],
    tech: ["Spring Boot", "pgvector", "PostgreSQL", "Spring AI", "Docker", "RAG Pipeline"],
    clientType: "CRM & Enterprise AI",
    icon: "server"
  },
  {
    id: "kafka-ai-pipeline",
    title: "Event-Driven AI Streaming & Anomaly Detection Pipeline",
    category: "java",
    badge: "Distributed Event Streaming",
    description: "Real-time event processing architecture streaming customer telemetry and transactional logs through Apache Kafka to trigger automated AI diagnosis and self-healing microservice workflows.",
    features: [
      "High-throughput Apache Kafka event bus partitioned for concurrent consumer groups",
      "Real-time anomaly detection triggering LLM diagnostic evaluation and auto-remediation",
      "Dockerized and orchestrated on Kubernetes with automated horizontal pod autoscaling",
      "Telemetry streaming and distributed tracing via OpenTelemetry and Prometheus"
    ],
    tech: ["Apache Kafka", "Spring Kafka", "Kubernetes", "Docker", "Spring Boot", "OpenTelemetry"],
    clientType: "High-Scale Distributed Systems",
    icon: "code"
  },
  {
    id: "ieims",
    title: "BANBEIS IEIMS - National Education Management",
    category: "java",
    badge: "Enterprise Government System",
    description: "Architected and delivered the Foreign Scholarship (FS) microservice and core backend modules for the national Integrated Education Information Management System under the Ministry of Education, Bangladesh.",
    features: [
      "High-throughput Spring Boot microservice handling nationwide student records",
      "Robust relational database schema tuning and transaction optimization across MySQL/PostgreSQL",
      "Drastic reduction in processing overhead through query tuning and service decoupling",
      "Exhaustive SRS & SDD documentation with full UML architecture for 13 system modules"
    ],
    tech: ["Java", "Spring Boot", "Microservices", "MySQL", "PostgreSQL", "UML", "SRS/SDD"],
    clientType: "Government / Enterprise",
    icon: "server"
  },
  {
    id: "banglabook",
    title: "BanglaBook - NLP Sentiment Analysis Pipeline",
    category: "ai",
    badge: "ACL '23 Published Research",
    description: "Complete machine learning pipeline for low-resource Bengali sentiment analysis, featuring web crawlers, preprocessing tokenizers, and fine-tuned Transformer models.",
    features: [
      "Custom web scrapers built with Scrapy and Selenium for large-scale text harvesting",
      "Text preprocessing, normalization, and tokenization for Bengali script nuances",
      "Model fine-tuning using PyTorch, Hugging Face Transformers, and BanglaBERT",
      "Interactive sentiment classification playground and evaluation metrics"
    ],
    tech: ["Python", "PyTorch", "Transformers", "NLP", "Scrapy", "HuggingFace"],
    clientType: "AI Research & Analytics",
    icon: "brain"
  },
  {
    id: "ota-booking",
    title: "Enterprise OTA & Hotel Booking Microservices",
    category: "java",
    badge: "Commercial Travel Platform",
    description: "Robust booking transaction engine powering user reservations, inventory locking, and payment flows for high-traffic Online Travel Agency platforms.",
    features: [
      "Distributed caching with Redis for instant hotel search queries and room availability",
      "Idempotent payment processing integration and automated booking receipt generation",
      "Spring Security with JWT role-based access control (Admin, Partner, Customer)",
      "Fault-tolerant microservice endpoints with REST standard compliance"
    ],
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Hibernate", "REST APIs"],
    clientType: "Commercial OTA / E-Commerce",
    icon: "code"
  },
  {
    id: "iot-power",
    title: "IoT Smart Power Attribute Monitor & Protection",
    category: "robotics",
    badge: "ICERIE '19 Hardware System",
    description: "Hardware-to-cloud IoT monitoring solution that continuously monitors electrical parameters and triggers automated protection relays.",
    features: [
      "NodeMCU ESP8266 and Arduino microcontroller hardware design",
      "Sensor fusion for voltage, current, power factor, and thermal levels",
      "Instantaneous automated circuit protection to prevent equipment damage",
      "Cloud telemetry dashboard with live graphs and SMS anomaly alerts"
    ],
    tech: ["Arduino", "NodeMCU ESP8266", "IoT Cloud", "C/C++", "Sensors"],
    clientType: "Industrial IoT & Hardware",
    icon: "robot"
  },
  {
    id: "portfolio-hub",
    title: "Dynamic High-Performance Portfolio Hub",
    category: "react",
    badge: "Modern Web Application",
    description: "Modern, responsive personal portfolio built with React and custom glassmorphism design tokens, showcasing career milestones, research, and client solutions.",
    features: [
      "100% responsive cross-device layout with ultra-sleek obsidian dark theme",
      "Interactive project filtering, expandable career accordions, and live clipboard toasts",
      "Direct CV download integration, WhatsApp chat CTA, and inquiry generator",
      "Zero heavyweight CSS frameworks: ultra-fast pure CSS architecture"
    ],
    tech: ["React.js", "Vanilla CSS", "React Icons", "SEO", "Responsive Design"],
    clientType: "Personal Brand & Freelance Hub",
    icon: "web"
  },
  {
    id: "android-library",
    title: "Android Digital PDF Library & Reader",
    category: "java",
    badge: "Mobile Application",
    description: "Native Android application featuring offline document reading, bookmarks, text search, and organized library management.",
    features: [
      "Smooth PDF rendering engine with dual-page and night reading modes",
      "SQLite local database caching for book metadata, reading progress, and highlights",
      "Clean Material Design UI optimized for phones and tablets"
    ],
    tech: ["Android SDK", "Java", "SQLite", "XML Layouts"],
    clientType: "Mobile Utility",
    icon: "phone"
  }
];

export const educationData = [
  {
    degree: "Master of Science in Computer Science & Engineering",
    institution: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    period: "2017 – 2024",
    result: "CGPA: 3.33 / 4.00",
    description: "Specialized in Artificial Intelligence, Natural Language Processing, and Distributed Systems. Completed M.Sc. thesis resulting in research publication at ACL Findings 2023 (Toronto, Canada).",
    badge: "M.Sc. CSE"
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "2012 – 2016",
    result: "CGPA: 3.22 / 4.00",
    description: "Focused on Software Engineering, Algorithms, Database Systems, and Bioinformatics. Completed B.Sc. thesis on Gene Regulatory Networks published at ICIEV Japan.",
    badge: "B.Sc. CSE"
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Sylhet Cadet College",
    location: "Sylhet, Bangladesh",
    period: "2010 – 2011",
    result: "GPA: 5.00 / 5.00 (Golden)",
    description: "Military boarding cadet education emphasizing extreme self-discipline, time management, leadership under pressure, and academic excellence.",
    badge: "Ex-Cadet (HSC)"
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Sylhet Cadet College",
    location: "Sylhet, Bangladesh",
    period: "2008 – 2009",
    result: "GPA: 5.00 / 5.00 (Golden)",
    description: "Rigorous cadet training instilling physical fitness, ethical integrity, public speaking, and strong analytical problem-solving foundation.",
    badge: "Ex-Cadet (SSC)"
  }
];

export const extraCurriculars = [
  {
    title: "RUET IEEE Robo-Droid Mobile App Contest",
    type: "Competition",
    year: "2016",
    description: "Competed in the national app innovation challenge developing Android automation solutions for robotic controls."
  },
  {
    title: "RUET IEEE Robotics Competition",
    type: "Robotics Contest",
    year: "2015",
    description: "Designed, engineered, and operated autonomous line-following and obstacle-avoidance robots."
  },
  {
    title: "Dhaka University IT Fest Mobile App Contest",
    type: "Hackathon",
    year: "2014",
    description: "Pitched and showcased innovative mobile software utilities at the national university level."
  },
  {
    title: "British Council Book Reading Competition",
    type: "Award",
    year: "2012",
    description: "Recognized for critical reading, analytical comprehension, and literary analysis."
  },
  {
    title: "Wall Magazine & Editorial Lead",
    type: "Cadet Leadership",
    year: "2012",
    description: "Authored and designed scientific articles and editorial columns at Sylhet Cadet College."
  },
  {
    title: "BRACU-Prothom Alo Career Fair",
    type: "Volunteer Service",
    year: "Volunteer",
    description: "Assisted corporate delegates and prospective graduates across multi-company recruitment drives."
  }
];

export const hobbiesAndPassions = [
  {
    title: "Traveling & Adventure Expeditions",
    icon: "plane",
    description: "Passionate explorer who loves trekking across unexplored hills, beaches, and historic landscapes, embracing diverse cultures and perspectives."
  },
  {
    title: "Nature & Street Photography",
    icon: "camera",
    description: "Keen eye for capturing vivid natural scenery, wildlife, macro flora, and spontaneous urban moments."
  },
  {
    title: "Book Reviews & In-Depth Writing",
    icon: "book",
    description: "Avid reader of technology, philosophy, history, and science. This lifelong reading passion directly inspired the curated BanglaBook ACL dataset."
  },
  {
    title: "Cosmology, Astronomy & Deep History",
    icon: "globe",
    description: "Fascinated by astrophysics, cosmic evolution, quantum theories, and the grand civilizational timeline of human history."
  }
];

export const bookReviews = [
  {
    id: "ddia",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Architecture",
    rating: 5,
    yearRead: "2023",
    tag: "Distributed Systems",
    gradient: "linear-gradient(135deg, #0284c7 0%, #1e3a8a 100%)",
    quote: "Reliable, scalable, and maintainable systems don't happen by accident—they are designed through disciplined trade-off analysis.",
    summary: "The definitive architectural bible for distributed systems. Explores consensus protocols, replication models, and partition tolerance that directly informed my microservices work at BANBEIS IEIMS.",
    takeaways: [
      "Data models dictate which queries are natural versus painful",
      "Eventual consistency requires explicit failure-mode handling",
      "Separating stateful persistence from stateless compute is the foundation of scale"
    ],
    fullReview: "Martin Kleppmann's masterpiece is arguably the most essential reading for any backend engineer aspiring to architect scalable systems. Rather than focusing on ephemeral frameworks, Kleppmann dissects timeless storage engines (LSM-trees vs B-trees), encoding protocols, and replication models (single-leader, multi-leader, leaderless). Reading this completely transformed how I framed distributed consistency, idempotency, and asynchronous event streams in Spring Boot microservices."
  },
  {
    id: "geb",
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas R. Hofstadter",
    category: "Philosophy",
    rating: 5,
    yearRead: "2022",
    tag: "Cognitive Science & AI",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
    quote: "Meaning lies in the network of relationships between symbols, not within isolated tokens.",
    summary: "A dazzling intellectual journey interweaving Bach's fugues, Escher's paradoxical prints, and Gödel's incompleteness theorem to investigate consciousness, recursion, and formal systems.",
    takeaways: [
      "Self-referential 'Strange Loops' underpin conscious thought",
      "Isomorphism connects abstract formal rules with human semantics",
      "Emergent semantics cannot be solved by brute-force reductionism alone"
    ],
    fullReview: "GEB is an intellectual feast. As an NLP researcher working on deep semantic embeddings, Hofstadter's exploration of symbol-level syntax versus emergent conceptual understanding deeply resonated with me. The witty dialogues between Achilles and the Tortoise unpack complex mathematical paradoxes with unmatched pedagogical elegance."
  },
  {
    id: "lalshalu",
    title: "Lalshalu (লালসালু)",
    author: "Syed Waliullah",
    category: "Literature",
    rating: 5,
    yearRead: "2021",
    tag: "Bengali Classic",
    gradient: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    quote: "শস্যহীন জনপদে ধর্মের মুখোশ আর মানুষের বেঁচে থাকার নির্মম লড়াই।",
    summary: "A watershed achievement in Bengali existential literature dissecting religious dogma, fear-driven power dynamics, and the survival instinct of rural agrarian society.",
    takeaways: [
      "Unflinching examination of institutional superstition as a survival mechanism",
      "Majeed is rendered not merely as a villain, but as a prisoner of his own myth",
      "Sparse, evocative prose that echoes European existentialism in an East Bengal landscape"
    ],
    fullReview: "Waliullah's Lalshalu is one of the most psychologically piercing novels in modern Bengali literature. Majeed's fabrication of the red-draped shrine (Mazar) at Mahabbatpur is a harrowing portrayal of how systemic poverty and spiritual dread induce communities to embrace their own manipulation. Jamila's quiet defiance stands as an enduring symbol of spiritual resistance."
  },
  {
    id: "clean-code",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "Engineering",
    rating: 4.5,
    yearRead: "2021",
    tag: "Software Craftsmanship",
    gradient: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    quote: "Clean code always looks like it was written by someone who cares.",
    summary: "Timeless guidance on intentional naming, small single-responsibility functions, readable error handling, and writing code that speaks for itself.",
    takeaways: [
      "Functions should do one thing, and do it exceedingly well",
      "The Boy Scout rule: leave the codebase cleaner than you found it",
      "Expressive naming reduces cognitive load and redundant commenting"
    ],
    fullReview: "While certain idioms reflect early Java conventions, Uncle Bob's central thesis remains irrefutable: software engineers spend over 80% of their time reading existing code. Prioritizing expressive function signatures, cohesive class responsibilities, and deterministic error flows directly correlates with reduced defect rates and happier developer teams."
  },
  {
    id: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Philosophy",
    rating: 4.5,
    yearRead: "2020",
    tag: "Evolution & History",
    gradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    quote: "We did not domesticate wheat. Wheat domesticated us.",
    summary: "A sweeping synthesis of anthropology and history illustrating how shared imaginative fictions enabled Homo sapiens to cooperate flexibly in large groups.",
    takeaways: [
      "The Cognitive Revolution gave humans the unique capability to believe in fictions",
      "Money, legal corporations, and nations exist entirely in inter-subjective reality",
      "Large-scale human cooperation relies on collective narrative consensus"
    ],
    fullReview: "Harari's ability to compress millennia of biological and social evolution into lucid prose is remarkable. For software engineers, his concept of 'inter-subjective reality'—constructs that exist because millions believe in them—offers a profound lens on how we design enterprise protocols, money networks, and software abstractions."
  },
  {
    id: "deep-learning",
    title: "Deep Learning (Adaptive Computation and Machine Learning)",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    category: "Architecture",
    rating: 5,
    yearRead: "2022",
    tag: "AI & Research",
    gradient: "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",
    quote: "Applied mathematics is the foundational language through which neural architectures uncover hidden representations.",
    summary: "The definitive textbook on mathematical foundations of deep learning: linear algebra, probability, loss manifolds, and sequence representation learning that grounded my thesis.",
    takeaways: [
      "Deep understanding of optimization landscapes is non-negotiable for AI research",
      "Representation learning enables generalization across disparate linguistic domains",
      "Self-attention removes recurring bottlenecks in sequence modeling"
    ],
    fullReview: "Known throughout academia as the 'Bible of Deep Learning', this comprehensive work provided the theoretical bedrock for my machine learning coursework at IUT and our research published at ACL Findings '23. Understanding loss geometry, regularization nuances, and gradient dynamics proved essential when fine-tuning transformer models on resource-constrained language datasets."
  }
];



