"use client";

import { useState } from "react";
import Image from "next/image";

// Tailwind purge-safe: class strings must be constants, not template literals
const TAB_ACTIVE =
  "cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 flex items-center justify-between bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/30";
const TAB_INACTIVE =
  "cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 hover:translate-x-2";

const toolsTabs = [
  {
    name: "AI / ML",
    icon: "/icons/Tools/ai.svg",
    tools: [
      { name: "Python",           icon: "/icons/Tools/python.svg",       alt: "Python AI development" },
      { name: "TensorFlow",       icon: "/icons/Tools/tensorflow.svg",   alt: "TensorFlow machine learning" },
      { name: "PyTorch",          icon: "/icons/Tools/pytorch.svg",      alt: "PyTorch deep learning" },
      { name: "OpenAI",           icon: "/icons/Tools/openai.svg",       alt: "OpenAI API integration" },
      { name: "LangChain",        icon: "/icons/Tools/langchain.svg",    alt: "LangChain AI framework" },
      { name: "FastAPI",          icon: "/icons/Tools/fastapi.svg",      alt: "FastAPI backend development" },
      { name: "Anthropic Claude", icon: "/icons/Tools/anthropic.svg",    alt: "Anthropic Claude AI" },
      { name: "Vertex AI",        icon: "/icons/Tools/vertexai.svg",     alt: "Google Vertex AI platform" },
      { name: "Hugging Face",     icon: "/icons/Tools/huggingface.svg",  alt: "Hugging Face ML models" },
      { name: "Prophet",          icon: "/icons/Tools/prophet.svg",      alt: "Prophet forecasting" },
    ],
  },
  {
    name: "Frontend",
    icon: "/icons/Tools/frontend.svg",
    tools: [
      { name: "React.js",      icon: "/icons/Tools/react.svg",        alt: "React.js frontend development" },
      { name: "Next.js",       icon: "/icons/Tools/nextjs.svg",       alt: "Next.js web framework" },
      { name: "Vue.js",        icon: "/icons/Tools/vuejs.svg",        alt: "Vue.js frontend framework" },
      { name: "Angular",       icon: "/icons/Tools/angular.svg",      alt: "Angular web development" },
      { name: "TypeScript",    icon: "/icons/Tools/typescript.svg",   alt: "TypeScript development" },
      { name: "JavaScript",    icon: "/icons/Tools/javascript.svg",   alt: "JavaScript programming" },
      { name: "Flutter",       icon: "/icons/Tools/flutter.svg",      alt: "Flutter cross-platform development" },
      { name: "React Native",  icon: "/icons/Tools/reactnative.svg",  alt: "React Native mobile development" },
      { name: "Tailwind CSS",  icon: "/icons/Tools/tailwindcss.svg",  alt: "Tailwind CSS styling" },
      { name: "Figma",         icon: "/icons/Tools/figma.svg",        alt: "Figma UI/UX design" },
    ],
  },
  {
    name: "Backend",
    icon: "/icons/Tools/backend.svg",
    tools: [
      { name: "Node.js",    icon: "/icons/Tools/nodejs.svg",      alt: "Node.js backend development" },
      { name: "Python",     icon: "/icons/Tools/python.svg",      alt: "Python backend development" },
      { name: "PHP",        icon: "/icons/Tools/php.svg",         alt: "PHP web development" },
      { name: "Java",       icon: "/icons/Tools/java.svg",        alt: "Java enterprise development" },
      { name: ".NET / C#",  icon: "/icons/Tools/dotnet.svg",      alt: ".NET C# development" },
      { name: "Go",         icon: "/icons/Tools/golang.svg",      alt: "Golang backend development" },
      { name: "FastAPI",    icon: "/icons/Tools/fastapi.svg",     alt: "FastAPI Python framework" },
      { name: "Express.js", icon: "/icons/Tools/expressjs.svg",   alt: "Express.js Node framework" },
      { name: "GraphQL",    icon: "/icons/Tools/graphql.svg",     alt: "GraphQL API development" },
      { name: "REST API",   icon: "/icons/Tools/restapi.svg",     alt: "REST API integration" },
    ],
  },
  {
    name: "Database",
    icon: "/icons/Tools/database.svg",
    tools: [
      { name: "PostgreSQL",    icon: "/icons/Tools/postgresql.svg",    alt: "PostgreSQL database" },
      { name: "MongoDB",       icon: "/icons/Tools/mongodb.svg",       alt: "MongoDB NoSQL database" },
      { name: "MySQL",         icon: "/icons/Tools/mysql.svg",         alt: "MySQL database" },
      { name: "Redis",         icon: "/icons/Tools/redis.svg",         alt: "Redis in-memory cache" },
      { name: "Snowflake",     icon: "/icons/Tools/snowflake.svg",     alt: "Snowflake data warehouse" },
      { name: "BigQuery",      icon: "/icons/Tools/bigquery.svg",      alt: "Google BigQuery analytics" },
      { name: "Firebase",      icon: "/icons/Tools/firebase.svg",      alt: "Firebase backend platform" },
      { name: "Elasticsearch", icon: "/icons/Tools/elasticsearch.svg", alt: "Elasticsearch search engine" },
      { name: "Supabase",      icon: "/icons/Tools/supabase.svg",      alt: "Supabase backend platform" },
      { name: "DynamoDB",      icon: "/icons/Tools/dynamodb.svg",      alt: "AWS DynamoDB NoSQL" },
    ],
  },
  {
    name: "Digital Marketing",
    icon: "/icons/digital.svg",
    tools: [
      { name: "Google Analytics", icon: "/icons/Tools/googleanalytics.svg", alt: "Google Analytics tracking" },
      { name: "Google Ads",       icon: "/icons/Tools/googleads.svg",       alt: "Google Ads PPC management" },
      { name: "Meta Ads",         icon: "/icons/Tools/metaads.svg",         alt: "Meta Facebook advertising" },
      { name: "SEMrush",          icon: "/icons/Tools/semrush.svg",         alt: "SEMrush SEO tool" },
      { name: "Ahrefs",           icon: "/icons/Tools/ahrefs.svg",          alt: "Ahrefs SEO analysis" },
      { name: "HubSpot",          icon: "/icons/Tools/hubspot.svg",         alt: "HubSpot marketing automation" },
      { name: "Mailchimp",        icon: "/icons/Tools/mailchimp.svg",       alt: "Mailchimp email marketing" },
      { name: "Hootsuite",        icon: "/icons/Tools/hootsuite.svg",       alt: "Hootsuite social media management" },
      { name: "LinkedIn Ads",     icon: "/icons/Tools/linkedinads.svg",     alt: "LinkedIn advertising" },
      { name: "Hotjar",           icon: "/icons/Tools/hotjar.svg",          alt: "Hotjar user analytics" },
    ],
  },
  {
    name: "Cloud",
    icon: "/icons/Tools/cloud.svg",
    tools: [
      { name: "AWS",          icon: "/icons/Tools/aws.svg",         alt: "AWS cloud infrastructure" },
      { name: "Azure",        icon: "/icons/Tools/azure.svg",       alt: "Microsoft Azure cloud" },
      { name: "Google Cloud", icon: "/icons/Tools/gcp.svg",         alt: "Google Cloud Platform" },
      { name: "AWS EKS",      icon: "/icons/Tools/awseks.svg",      alt: "AWS EKS Kubernetes" },
      { name: "AWS Lambda",   icon: "/icons/Tools/awslambda.svg",   alt: "AWS Lambda serverless" },
      { name: "AWS S3",       icon: "/icons/Tools/awss3.svg",       alt: "AWS S3 storage" },
      { name: "CloudFront",   icon: "/icons/Tools/cloudfront.svg",  alt: "AWS CloudFront CDN" },
      { name: "Terraform",    icon: "/icons/Tools/terraform.svg",   alt: "Terraform infrastructure as code" },
      { name: "Kubernetes",   icon: "/icons/Tools/kubernetes.svg",  alt: "Kubernetes container orchestration" },
      { name: "Serverless",   icon: "/icons/Tools/serverless.svg",  alt: "Serverless framework" },
    ],
  },
  {
    name: "DevOps",
    icon: "/icons/Tools/devops.svg",
    tools: [
      { name: "Docker",          icon: "/icons/Tools/docker.svg",        alt: "Docker containerization" },
      { name: "Kubernetes",      icon: "/icons/Tools/kubernetes.svg",    alt: "Kubernetes DevOps automation" },
      { name: "Jenkins",         icon: "/icons/Tools/jenkins.svg",       alt: "Jenkins CI/CD pipeline" },
      { name: "GitHub Actions",  icon: "/icons/Tools/githubactions.svg", alt: "GitHub Actions CI/CD" },
      { name: "GitLab CI",       icon: "/icons/Tools/gitlabci.svg",      alt: "GitLab CI/CD pipeline" },
      { name: "Terraform",       icon: "/icons/Tools/terraform.svg",     alt: "Terraform IaC" },
      { name: "Ansible",         icon: "/icons/Tools/ansible.svg",       alt: "Ansible automation" },
      { name: "Prometheus",      icon: "/icons/Tools/prometheus.svg",    alt: "Prometheus monitoring" },
      { name: "Grafana",         icon: "/icons/Tools/grafana.svg",       alt: "Grafana observability dashboard" },
      { name: "Codefresh",       icon: "/icons/Tools/codefresh.svg",     alt: "Codefresh GitOps platform" },
    ],
  },
];

export function ToolsSection() {
  const [activeTab, setActiveTab] = useState("AI / ML");

  return (
    <section className="bg-[#f4f5f7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            TOOLS AND TECHNOLOGIES
          </h2>

          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            The Tech Stack Behind Every Product We Build.
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            We work with battle-tested, carefully chosen technologies — not
            because they&apos;re trending, but because they&apos;re the right fit for
            building products that perform, scale, and last. Here&apos;s what our
            engineers use every day.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row md:items-stretch">
          {/* LEFT PANEL — Category tabs */}
          <div className="space-y-3 bg-gradient-to-b from-[#2d6ea3] to-[#1f5f8b] p-6 text-white md:w-[38%] md:p-10">
            {toolsTabs.map((tab) => (
              <div
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={activeTab === tab.name ? TAB_ACTIVE : TAB_INACTIVE}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={tab.icon}
                    alt={tab.name}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-sm font-medium sm:text-base">
                    {tab.name}
                  </span>
                </div>
                <span aria-hidden="true">→</span>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL — Tools grid (all tabs in DOM for SEO) */}
          <div className="flex-1 p-6 sm:p-8 md:p-10">
            {toolsTabs.map((tab) => (
              <div
                key={tab.name}
                className={activeTab === tab.name ? "block" : "hidden"}
                aria-label={`${tab.name} tools`}
              >
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                  {tab.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-gray-50"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 p-2">
                        <Image
                          src={tool.icon}
                          alt={tool.alt}
                          width={36}
                          height={36}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <span className="text-center text-xs font-medium text-gray-700 sm:text-sm leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
