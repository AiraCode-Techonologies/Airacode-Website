export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: "ai-systems" | "cloud-data" | "modernization";
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  architectureHighlights: string[];
  enterpriseUseCases: string[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  servicesUsed: string[];
  quote: string;
  author: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-website-dev",
    slug: "ai-website-development",
    title: "AI-based Website Development",
    category: "ai-systems",
    tagline: "Intelligent, Hyper-Personalized & Cognitive Web Applications",
    description:
      "Building modern, highly responsive, and intelligent web applications powered by cutting-edge artificial intelligence, personalization engines, smart search capabilities, and dynamic user experience frameworks.",
    badge: "Cognitive Frontend",
    iconName: "Globe",
    metrics: [
      { label: "Lighthouse Score", value: "99+" },
      { label: "Personalization Lift", value: "+42%" },
      { label: "Search Latency", value: "<18ms" },
    ],
    deliverables: [
      "Semantic vector search & RAG-driven discovery",
      "Dynamic real-time user personalization engine",
      "Sub-second Core Web Vitals optimized frontend architecture",
      "Headless CMS integration with automated AI copywriting pipelines",
      "Voice, multimodal, and interactive conversational copilots",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Pinecone", "WebSockets", "Vercel Edge"],
    architectureHighlights: [
      "Edge-rendered dynamic interfaces with instant personalization",
      "Hybrid client-server streaming for real-time AI responses",
      "Zero-layout-shift tactile clay aesthetic with GPU acceleration",
    ],
    enterpriseUseCases: [
      "Enterprise SaaS portals with conversational copilots",
      "E-commerce platforms with visual and semantic neural search",
      "Knowledge bases with conversational citation retrieval",
    ],
  },
  {
    id: "ai-product-dev",
    slug: "ai-product-development",
    title: "AI Product Development",
    category: "ai-systems",
    tagline: "End-to-End AI-Driven SaaS & Intelligent Software Engineering",
    description:
      "Architecting and engineering complete end-to-end AI-driven software products, SaaS solutions, and intelligent applications custom-tailored to solve complex business challenges.",
    badge: "Enterprise SaaS",
    iconName: "Sparkles",
    metrics: [
      { label: "Time to MVP", value: "3 Weeks" },
      { label: "User Retention", value: "+68%" },
      { label: "Inference Cost Cut", value: "54%" },
    ],
    deliverables: [
      "Full-stack AI SaaS platforms with enterprise tenant isolation",
      "Integrated billing, tiered seat licensing & token consumption tracking",
      "Proprietary model evaluation and regression benchmarking suite",
      "Scalable REST & GraphQL APIs with rate-limiting and audit trails",
      "Production-ready telemetry, user feedback loops, and observability",
    ],
    techStack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker", "Stripe", "OpenTelemetry"],
    architectureHighlights: [
      "Multi-tenant data isolation with row-level security",
      "Asynchronous background worker queues for heavy AI processing",
      "Automated prompt versioning, canary testing, and continuous eval",
    ],
    enterpriseUseCases: [
      "AI-driven automated legal document analyzers",
      "Medical diagnostic intelligence copilot suites",
      "Predictive financial portfolio risk simulation SaaS",
    ],
  },
  {
    id: "web-maintenance-opt",
    slug: "website-maintenance-optimization",
    title: "Website Maintenance & Optimization",
    category: "modernization",
    tagline: "24/7 Resilience, Zero-Downtime Upgrades & Peak Performance",
    description:
      "Ensuring high availability, automated performance optimization, proactive security updates, infrastructure monitoring, and 24/7 technical support for legacy and web platforms.",
    badge: "24/7 SRE & Ops",
    iconName: "ShieldCheck",
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Incident Resolution", value: "<12m" },
      { label: "Speed Gain", value: "3.4x" },
    ],
    deliverables: [
      "24/7 automated synthetic uptime & latency monitoring",
      "Continuous vulnerability scanning, WAF management, and automated patching",
      "Asset minification, Brotli compression, and image edge caching",
      "Zero-downtime rolling deploys with automated rollback safety",
      "Dedicated Site Reliability Engineering (SRE) support team",
    ],
    techStack: ["Datadog", "Cloudflare Enterprise", "Grafana", "Prometheus", "Kubernetes", "Sentry", "PagerDuty"],
    architectureHighlights: [
      "Multi-region CDN caching with intelligent invalidation rules",
      "Automated failover clusters across redundant availability zones",
      "Continuous load testing to handle sudden 10x traffic spikes",
    ],
    enterpriseUseCases: [
      "High-traffic financial news and trading portals",
      "Mission-critical e-commerce platforms during peak sales seasons",
      "Government and enterprise portals requiring rigorous uptime SLAs",
    ],
  },
  {
    id: "ai-fine-tuning",
    slug: "ai-fine-tuning-model-optimization",
    title: "AI Fine-Tuning & Model Optimization",
    category: "ai-systems",
    tagline: "Domain-Specific Model Distillation, LoRA & Low-Latency Quantization",
    description:
      "Customizing, fine-tuning, and aligning Large Language Models (LLMs) and generative AI foundation architectures on domain-specific datasets for high precision, reduced latency, and enterprise reliability.",
    badge: "Deep Learning",
    iconName: "Cpu",
    metrics: [
      { label: "Latency Drop", value: "-62%" },
      { label: "Domain Accuracy", value: "98.4%" },
      { label: "VRAM Savings", value: "70%" },
    ],
    deliverables: [
      "LoRA / QLoRA parameter-efficient domain adaptation pipelines",
      "Model distillation from large frontier models to edge-optimized SLMs",
      "vLLM, TensorRT-LLM, and ONNX Runtime deployment configurations",
      "RLHF and DPO alignment for brand tone, safety, and strict schema compliance",
      "Private on-premise and VPC dedicated GPU inference clusters",
    ],
    techStack: ["PyTorch", "Hugging Face", "vLLM", "TensorRT-LLM", "Ray Train", "NVIDIA CUDA", "Weights & Biases"],
    architectureHighlights: [
      "4-bit and 8-bit quantization (AWQ/GPTQ) preserving 99% accuracy",
      "Continuous synthetic data generation with hallucination filters",
      "Self-hosted private inference protecting confidential enterprise IP",
    ],
    enterpriseUseCases: [
      "Proprietary biomedical and clinical research analysis models",
      "High-security financial compliance and audit reasoning engines",
      "Automated code generation tailored to internal corporate frameworks",
    ],
  },
  {
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure-multi-cloud",
    title: "Cloud Infrastructure & Multi-Cloud Deployments",
    category: "cloud-data",
    tagline: "Resilient Cloud-Native Architectures across AWS, GCP & Azure",
    description:
      "Designing cloud-native architectures, managing containerized infrastructure, and executing seamless deployments across AWS, Google Cloud Platform (GCP), and Microsoft Azure.",
    badge: "Cloud-Native",
    iconName: "Cloud",
    metrics: [
      { label: "Cloud Cost Cut", value: "38%" },
      { label: "Deploy Velocity", value: "10x Faster" },
      { label: "Recovery Time", value: "<30s" },
    ],
    deliverables: [
      "Infrastructure as Code (IaC) with modular Terraform and OpenTofu",
      "Enterprise Kubernetes (EKS, GKE, AKS) orchestration and service mesh",
      "Multi-cloud disaster recovery architectures and data replication",
      "Zero-Trust network architecture, IAM segregation & secret management",
      "Automated CI/CD GitOps pipelines with progressive delivery (ArgoCD)",
    ],
    techStack: ["Terraform", "Kubernetes", "AWS", "Google Cloud (GCP)", "Microsoft Azure", "ArgoCD", "Vault"],
    architectureHighlights: [
      "Stateless autoscaling nodes adjusting dynamically to load spikes",
      "Multi-region active-active topology eliminating single points of failure",
      "Granular FinOps tagging and automated idle resource termination",
    ],
    enterpriseUseCases: [
      "Global banking systems requiring strict multi-cloud redundancy",
      "Healthcare networks governed by sovereign data residency rules",
      "High-throughput media streaming backends handling millions of connections",
    ],
  },
  {
    id: "data-engineering",
    slug: "data-analysis-data-engineering",
    title: "Data Analysis & Data Engineering",
    category: "cloud-data",
    tagline: "Resilient Data Pipelines, Lakehouses & Strategic Intelligence",
    description:
      "Building resilient data pipelines, scalable data warehouses, and enterprise intelligence platforms to convert unstructured business data into actionable strategic insights.",
    badge: "Big Data & BI",
    iconName: "Database",
    metrics: [
      { label: "Query Speed", value: "14x Faster" },
      { label: "Pipeline SLA", value: "99.98%" },
      { label: "Throughput", value: "100k+ ev/s" },
    ],
    deliverables: [
      "Streaming and batch ETL/ELT pipelines using Apache Kafka and Spark",
      "Enterprise Lakehouse architectures on Snowflake, BigQuery, and Databricks",
      "Automated data quality assertions, schema validation, and lineage tracking",
      "Interactive executive dashboards and real-time anomaly detection",
      "Unstructured-to-structured vector embeddings conversion pipelines",
    ],
    techStack: ["Snowflake", "Google BigQuery", "Apache Kafka", "dbt", "Apache Spark", "Airflow", "ClickHouse"],
    architectureHighlights: [
      "Medallion data architecture (Bronze, Silver, Gold) for guaranteed data purity",
      "Real-time Change Data Capture (CDC) from operational databases",
      "Columnar storage optimization with automated partition pruning",
    ],
    enterpriseUseCases: [
      "Supply chain logistics real-time tracking and delivery ETA prediction",
      "Customer lifetime value (LTV) and churn prediction for digital brands",
      "Enterprise fraud analytics correlating multi-channel transactional streams",
    ],
  },
  {
    id: "workflow-automation",
    slug: "enterprise-workflow-automation",
    title: "Enterprise Workflow Automation",
    category: "modernization",
    tagline: "Intelligent Pipeline Orchestration with n8n, Zapier & Make",
    description:
      "Automating repetitive operational workflows, interconnecting software ecosystems, and building automated pipelines using platforms like n8n, Zapier, and Make.",
    badge: "Automation Ops",
    iconName: "Workflow",
    metrics: [
      { label: "Labor Saved", value: "85% Saved" },
      { label: "Cycle Time", value: "-90%" },
      { label: "Error Reduction", value: "99.4%" },
    ],
    deliverables: [
      "Self-hosted secure n8n enterprise instances with custom node integrations",
      "Complex multi-app webhooks connecting ERP, CRM, Slack, and accounting stacks",
      "Intelligent exception handling, automated retry logic, and alerting",
      "AI-augmented document parsing, OCR routing, and data extraction",
      "Comprehensive run-history logging, security auditing, and compliance records",
    ],
    techStack: ["n8n", "Make", "Zapier Enterprise", "Node.js", "Webhooks", "REST APIs", "PostgreSQL"],
    architectureHighlights: [
      "Self-hosted workflow nodes executing inside private enterprise VPCs",
      "Idempotent execution pipelines preventing duplicate event processing",
      "Dynamic human-in-the-loop approval triggers via Slack/Teams",
    ],
    enterpriseUseCases: [
      "Automated customer onboarding and KYC document verification",
      "Cross-platform inventory reconciliation between ERP and Shopify/Amazon",
      "Automated enterprise IT provisioning and user lifecycle management",
    ],
  },
  {
    id: "agentic-ai",
    slug: "agentic-ai-autonomous-workflows",
    title: "Agentic AI & Autonomous Workflows",
    category: "ai-systems",
    tagline: "Sophisticated Multi-Agent Swarms, Tool Calling & Self-Correcting Logic",
    description:
      "Engineering sophisticated multi-agent AI systems capable of executing multi-step business logic, autonomous decision-making, task orchestration, and context-aware tool usage.",
    badge: "Agentic Swarms",
    iconName: "Bot",
    metrics: [
      { label: "Task Success", value: "96.7%" },
      { label: "Decision Latency", value: "<1.2s" },
      { label: "Op Overhead", value: "-78%" },
    ],
    deliverables: [
      "Hierarchical multi-agent architectures (Planner, Researcher, Executor, Critic)",
      "Dynamic tool calling with strict schema sandboxing and API authentication",
      "Persistent memory graph engines combining vector, episodic, and semantic recall",
      "Self-correcting code generation, automated verification, and retry loops",
      "Enterprise guardrails, human intervention gateways, and audit telemetry",
    ],
    techStack: ["LangGraph", "LlamaIndex", "CrewAI", "Anthropic Claude 3.7", "Gemini 2.5", "Pinecone", "Temporal"],
    architectureHighlights: [
      "Stateful distributed event loops managed by durable execution engines",
      "Dynamic context compression keeping agent memory within optimal token bounds",
      "Deterministic safety sandboxes intercepting unsafe system actions",
    ],
    enterpriseUseCases: [
      "Autonomous customer support agents resolving tier-2 technical inquiries",
      "Automated financial report auditing and reconciliation agents",
      "Autonomous software code review, bug triage, and patch generation swarms",
    ],
  },
];

export const clientCaseStudies: CaseStudyItem[] = [
  {
    id: "apex-fintech",
    client: "Apex Financial Core",
    industry: "FinTech & Banking",
    headline: "Sub-Second AI Fraud Detection & Legacy Mainframe Deconstruction",
    summary:
      "AIRACODE modernized a 14-year-old transactional architecture into an event-driven microservices stack on AWS & Google Cloud, integrating an autonomous AI risk evaluation agent.",
    metrics: [
      { label: "Query Latency", value: "74% Drop" },
      { label: "Fraud Detection", value: "<85ms" },
      { label: "Cost Savings", value: "$1.8M Saved" },
    ],
    servicesUsed: ["Agentic AI", "Cloud Infrastructure", "Data Engineering"],
    quote: "AIRACODE transformed our core systems without a single second of transactional downtime.",
    author: "Chief Technology Officer, Apex Financial",
  },
  {
    id: "synthetix-health",
    client: "Synthetix Health Network",
    industry: "HealthTech & Diagnostics",
    headline: "HIPAA-Compliant Agentic Clinical Record Synthesis & Triage",
    summary:
      "Designed a private VPC fine-tuned medical intelligence model that cross-references unstructured EHR records, cutting manual clinical triage backlogs by 80%.",
    metrics: [
      { label: "Triage Backlog", value: "80% Cut" },
      { label: "Clinical Precision", value: "99.1%" },
      { label: "Compliance Score", value: "100% HIPAA" },
    ],
    servicesUsed: ["AI Fine-Tuning", "AI Product Development", "Enterprise Workflow Automation"],
    quote: "The autonomous agent workflows engineered by AIRACODE set a new benchmark for clinical reliability.",
    author: "Head of Medical Informatics, Synthetix Health",
  },
  {
    id: "strata-retail",
    client: "Strata Global Retail",
    industry: "Omnichannel Commerce",
    headline: "AI-Powered Headless Frontend & Multi-Cloud Kubernetes Cluster",
    summary:
      "Built a high-performance Next.js cognitive web application backed by an automated n8n workflow ecosystem handling 50M+ events during Black Friday with 100% uptime.",
    metrics: [
      { label: "Peak Volume", value: "52M Events/Day" },
      { label: "Conversion Lift", value: "+34%" },
      { label: "Peak Uptime", value: "100.0%" },
    ],
    servicesUsed: ["AI-based Website Development", "Cloud Infrastructure", "Website Maintenance & Optimization"],
    quote: "Our frontend feels instantaneous. Customer engagement surged across every key market.",
    author: "VP of Digital Engineering, Strata Retail",
  },
  {
    id: "omni-freight",
    client: "OmniLogistics Worldwide",
    industry: "Supply Chain & Freight",
    headline: "Autonomous Multi-Agent Dispatch & Real-Time Data Pipeline",
    summary:
      "Replaced 4 disconnected manual tracking systems with an autonomous multi-agent coordination swarm and real-time Kafka-Snowflake streaming lakehouse.",
    metrics: [
      { label: "Annual Savings", value: "$4.2M" },
      { label: "Dispatch Auto", value: "92%" },
      { label: "ETA Accuracy", value: "99.4%" },
    ],
    servicesUsed: ["Agentic AI", "Enterprise Workflow Automation", "Data Analysis & Data Engineering"],
    quote: "AIRACODE turned our chaotic logistics tracking into an autonomous, self-orchestrating machine.",
    author: "Chief Operations Officer, OmniLogistics",
  },
];
