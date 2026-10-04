// Single source of content for the portfolio.
// To add or edit a project, a role or a certification, change this file only.

export const profile = {
  name: "Daniela Samo",
  role: "Data & AI Engineer",
  tagline: "I bring data and AI into production, and test it on the people it is meant to serve.",
  email: "chouakedaniela@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniela-samo",
  github: "https://github.com/Danesamo",
  signature: "From Africa, for Africa. As a builder, not a spectator.",
};

export const about = [
  "I build data and AI systems for production: streaming pipelines that stay correct under load, language-model applications grounded in real documents, and scoring systems that can explain their decisions.",
  "My path started in research, in an IoT laboratory in Hanoi and a research master's in intelligent systems, then moved into production with an NGO data team, where I built change data capture, analytical pipelines and LLM classification of citizen texts.",
  "One question guides my work: does this system understand the people it serves? Many African languages and realities are still missing from the data. I build with that gap in mind, for organizations in Africa and beyond.",
];

export const proof = [
  { value: 500, suffix: "x", decimals: 0, label: "faster geolocation lookups in production" },
  { value: 7700, prefix: "~", suffix: "/s", decimals: 0, label: "citizen expressions through an idempotent ETL" },
  { value: 15721, suffix: "", decimals: 0, label: "legal articles indexed for LLM retrieval" },
  { value: 80.7, suffix: "%", decimals: 1, label: "inter-annotator agreement in an LLM evaluation" },
];

export type Case = {
  slug: string;
  title: string;
  tag: string;
  origin: "Professional" | "Personal project";
  summary: string;
  pipeline: string[];
  details: { label: string; text: string }[];
  stack: string[];
  link?: { href: string; label: string };
  featured?: boolean;
};

export const cases: Case[] = [
  {
    slug: "llm-evaluation",
    title: "Choosing a language model on evidence, not reputation",
    tag: "LLM evaluation",
    origin: "Professional",
    featured: true,
    summary: "Benchmarks rarely include African civic language. So I built the test set first.",
    pipeline: ["139 texts", "2 annotators", "3 LLMs", "Evidence"],
    details: [
      { label: "What I built", text: "An evaluation protocol comparing three open-source LLMs (Llama 3.2 3B, Llama 3.1 8B, Mistral 7B) on 139 texts annotated twice, with 80.7% inter-annotator agreement." },
      { label: "What it showed", text: "Size did not predict quality: the 3B model outperformed the 8B one. Mistral 7B was selected (macro F1 0.56, sentiment accuracy 78%)." },
      { label: "Why it matters", text: "Tested on a sentence in Fon, a leading model called it Yoruba and read distress as neutral. Evaluation on local data is not optional." },
    ],
    stack: ["Llama", "Mistral", "Annotation", "Evaluation"],
  },
  {
    slug: "change-data-capture",
    title: "Real-time change data capture platform",
    tag: "Data platform",
    origin: "Professional",
    featured: true,
    summary: "Keeping analytics in step with operational data, without loading the production database.",
    pipeline: ["PostgreSQL", "Debezium", "Kafka", "ClickHouse"],
    details: [
      { label: "What I built", text: "A multi-VM streaming architecture from PostgreSQL (OLTP) to ClickHouse (OLAP) through Debezium and Kafka 3.6.1 in KRaft mode, with WAL logical replication and replication slots." },
      { label: "How", text: "Full handling of create, read, update, delete and soft delete events, and ClickHouse materialized views turning raw JSON into typed columns." },
      { label: "Result", text: "An analytical copy of operational data, continuously updated and ready for reporting." },
    ],
    stack: ["PostgreSQL", "Debezium", "Kafka", "ClickHouse"],
  },
  {
    slug: "llm-classification-rag",
    title: "LLM classification of citizen texts, with legal retrieval",
    tag: "LLM systems",
    origin: "Professional",
    summary: "Reading thousands of citizen expressions and linking them to the law that applies.",
    pipeline: ["Citizen text", "6-stage LLM", "Legal RAG", "Recommendation"],
    details: [
      { label: "What I built", text: "A six-stage NLP pipeline: category, sub-category, topic, type and sentiment, legal analysis through retrieval, then recommendations. About 1.3 seconds per text." },
      { label: "How", text: "A four-level taxonomy of 4,161 topics, and a retrieval layer over 15,721 legal articles indexed in ChromaDB with multilingual embeddings." },
      { label: "Result", text: "A full application (FastAPI, PostgreSQL, Redis, React) covered by 25 automated tests." },
    ],
    stack: ["LLMs", "RAG", "ChromaDB", "FastAPI"],
  },
  {
    slug: "analytical-pipelines",
    title: "Analytical pipelines for national reporting",
    tag: "Data engineering",
    origin: "Professional",
    summary: "Turning several operational sources into one reliable analytical model.",
    pipeline: ["Sources", "Airflow", "ClickHouse", "Superset"],
    details: [
      { label: "What I built", text: "Multi-source extractors (PostgreSQL, Cassandra) feeding a ClickHouse warehouse of 14 partitioned tables: dimensions, facts and materialized views." },
      { label: "How", text: "Three Airflow DAGs (daily, hourly, weekly), designed to be fully idempotent so any run can be replayed safely." },
      { label: "Result", text: "About 7,700 expressions per second, and three Superset dashboards used for national-level monitoring." },
    ],
    stack: ["Airflow", "ClickHouse", "Cassandra", "Superset"],
  },
  {
    slug: "explainable-credit-scoring",
    featured: true,
    title: "Credit scoring that explains every decision",
    tag: "Explainable ML",
    origin: "Personal project",
    summary: "A score means little to a borrower or a regulator without the reasons behind it.",
    pipeline: ["Application", "XGBoost", "SHAP", "Decision"],
    details: [
      { label: "What I built", text: "An end-to-end default prediction system trained on the public Home Credit dataset: 307,000 applications and 225 engineered features. XGBoost tuned with Optuna (AUC 0.78, recall 0.70)." },
      { label: "How", text: "A FastAPI service returning the SHAP factors behind each score, a multilingual and multi-currency interface, Airflow orchestration and Prometheus and Grafana monitoring." },
      { label: "Engineering", text: "31 unit tests and six Docker services." },
    ],
    stack: ["XGBoost", "SHAP", "FastAPI", "Airflow"],
    link: { href: "https://github.com/Danesamo/credit-risk-scoring-pipeline", label: "View the repository" },
  },
  {
    slug: "distributed-nlp-cascade",
    title: "Distributed NLP cascade on Apache Spark",
    tag: "NLP at scale",
    origin: "Professional",
    summary: "Letting simple methods handle simple cases, and saving heavy models for the hard ones.",
    pipeline: ["Rules", "NER", "Vector search", "Zero-shot"],
    details: [
      { label: "What I built", text: "A port of a monolithic NLP orchestrator to Apache Spark, as a five-level cascade: rules, named entities (spaCy), vector search (OpenSearch), sentiment (RoBERTa) and zero-shot classification (CamemBERT)." },
      { label: "How", text: "Each level only passes forward what it cannot resolve with confidence. Configuration moved from static YAML files to ClickHouse." },
      { label: "Target", text: "Under 500 ms per request." },
    ],
    stack: ["PySpark", "spaCy", "Transformers", "OpenSearch"],
  },
];

export const also = [
  { title: "Access control and traceable delivery.", text: "Directory-based authentication with automatic group-to-role mapping, and dashboards delivered through continuous integration so every change stays traceable and reversible." },
  { title: "Geolocation service.", text: "247 countries across four administrative levels in ClickHouse, latency cut from 500 ms to under 1 ms, a 500-fold gain with no change to application code." },
  { title: "Data modeling with dbt.", text: "Staging and marts layers with automated tests.", link: { href: "https://github.com/Danesamo/dbt-fundamentals", label: "Repository" } },
  { title: "Fraud detection.", text: "A hybrid machine learning and deep learning approach on imbalanced data.", link: { href: "https://github.com/Danesamo/Fraud_project", label: "Repository" } },
];

// "How a system comes together": the four steps behind every project
export const steps = [
  { title: "Capture", text: "Events are captured as they happen, from change data capture to streaming, so nothing is lost and nothing is counted twice.", tools: "Debezium, Kafka" },
  { title: "Shape", text: "Idempotent pipelines model the data into something teams can trust, tested and monitored from the first version.", tools: "Airflow, dbt, ClickHouse" },
  { title: "Evaluate", text: "Models are tested on annotated local data before anyone relies on them. A benchmark is not the people a system will serve.", tools: "Annotation, LLM evaluation" },
  { title: "Explain", text: "When a model decides for a person, the reasons behind the decision are visible to them and to the team.", tools: "SHAP, monitoring" },
];

export const experience = [
  { time: "2025 to 2026", title: "Data Engineer", where: "SMATFLOW NGO, remote", text: "Real-time data capture, analytical pipelines, distributed NLP and access governance.", stack: ["Kafka", "ClickHouse", "Airflow", "PySpark"] },
  { time: "2024 to 2025", title: "Machine Learning Engineer, internship", where: "SMATFLOW NGO, remote", text: "LLM classification of citizen texts, legal retrieval and model evaluation.", stack: ["LLMs", "RAG", "FastAPI", "ChromaDB"] },
  { time: "2023 to 2024", title: "IoT Research Intern", where: "AIRC-ITI Laboratory, Hanoi", text: "Behavioral data from connected devices for personalised learning. Co-author of a published paper.", stack: ["IoT", "Data analysis", "Research"] },
];

export const education = [
  { time: "2025 to 2027", title: "Master's in Financial Engineering", where: "WorldQuant University, currently enrolled" },
  { time: "2023 to 2025", title: "Master's in Intelligent Systems, double degree", where: "VNU Hanoi and La Rochelle University" },
  { time: "2020 to 2021", title: "Bachelor's in Computer Science", where: "University of Douala" },
];

export const certifications = [
  { name: "Agentic AI: PoC to Production on AWS", issuer: "BeSA Cloud Academy" },
  { name: "dbt Fundamentals", issuer: "dbt Labs" },
  { name: "Prompt Engineering with the OpenAI API", issuer: "DataCamp" },
  { name: "AI Fluency: Framework and Foundations", issuer: "Anthropic Academy" },
];
