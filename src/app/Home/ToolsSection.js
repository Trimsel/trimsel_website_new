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
      { name: "Python",           icon: "/icons/tools/python.svg",       alt: "Python AI development" },
      { name: "TensorFlow",       icon: "/icons/tools/tensorflow.svg",   alt: "TensorFlow machine learning" },
      { name: "PyTorch",          icon: "/icons/tools/pytorch.svg",      alt: "PyTorch deep learning" },
      { name: "OpenAI",           icon: "/icons/tools/openai.svg",       alt: "OpenAI API integration" },
      { name: "LangChain",        icon: "/icons/tools/langchain.svg",    alt: "LangChain AI framework" },
      { name: "FastAPI",          icon: "/icons/tools/fastapi.svg",      alt: "FastAPI backend development" },
      { name: "Anthropic Claude", icon: "/icons/tools/anthropic.svg",    alt: "Anthropic Claude AI" },
      { name: "Vertex AI",        icon: "/icons/tools/vertexai.svg",     alt: "Google Vertex AI platform" },
      { name: "Hugging Face",     icon: "/icons/tools/huggingface.svg",  alt: "Hugging Face ML models" },
      { name: "Prophet",          icon: "/icons/tools/prophet.svg",      alt: "Prophet forecasting" },
    ],
  },
  {
    name: "Frontend",
    icon: "/icons/Tools/frontend.svg",
    tools: [
      { name: "React.js",      icon: "/icons/tools/react.svg",        alt: "React.js frontend development" },
      { name: "Next.js",       icon: "/icons/tools/nextjs.svg",       alt: "Next.js web framework" },
      { name: "Vue.js",        icon: "/icons/tools/vuejs.svg",        alt: "Vue.js frontend framework" },
      { name: "Angular",       icon: "/icons/tools/angular.svg",      alt: "Angular web development" },
      { name: "TypeScript",    icon: "/icons/tools/typescript.svg",   alt: "TypeScript development" },
      { name: "JavaScript",    icon: "/icons/tools/javascript.svg",   alt: "JavaScript programming" },
      { name: "Flutter",       icon: "/icons/tools/flutter.svg",      alt: "Flutter cross-platform development" },
      { name: "React Native",  icon: "/icons/tools/reactnative.svg",  alt: "React Native mobile development" },
      { name: "Tailwind CSS",  icon: "/icons/tools/tailwindcss.svg",  alt: "Tailwind CSS styling" },
      { name: "Figma",         icon: "/icons/tools/figma.svg",        alt: "Figma UI/UX design" },
    ],
  },
  {
    name: "Backend",
    icon: "/icons/Tools/backend.svg",
    tools: [
      { name: "Node.js",    icon: "/icons/tools/nodejs.svg",      alt: "Node.js backend development" },
      { name: "Python",     icon: "/icons/tools/python.svg",      alt: "Python backend development" },
      { name: "PHP",        icon: "/icons/tools/php.svg",         alt: "PHP web development" },
      { name: "Java",       icon: "/icons/tools/java.svg",        alt: "Java enterprise development" },
      { name: ".NET / C#",  icon: "/icons/tools/dotnet.svg",      alt: ".NET C# development" },
      { name: "Go",         icon: "/icons/tools/golang.svg",      alt: "Golang backend development" },
      { name: "FastAPI",    icon: "/icons/tools/fastapi.svg",     alt: "FastAPI Python framework" },
      { name: "Express.js", icon: "/icons/tools/expressjs.svg",   alt: "Express.js Node framework" },
      { name: "GraphQL",    icon: "/icons/tools/graphql.svg",     alt: "GraphQL API development" },
      { name: "REST API",   icon: "/icons/tools/restapi.svg",     alt: "REST API integration" },
    ],
  },
  {
    name: "Database",
    icon: "/icons/Tools/database.svg",
    tools: [
      { name: "PostgreSQL",    icon: "/icons/tools/postgresql.svg",    alt: "PostgreSQL database" },
      { name: "MongoDB",       icon: "/icons/tools/mongodb.svg",       alt: "MongoDB NoSQL database" },
      { name: "MySQL",         icon: "/icons/tools/mysql.svg",         alt: "MySQL database" },
      { name: "Redis",         icon: "/icons/tools/redis.svg",         alt: "Redis in-memory cache" },
      { name: "Snowflake",     icon: "/icons/tools/snowflake.svg",     alt: "Snowflake data warehouse" },
      { name: "BigQuery",      icon: "/icons/tools/bigquery.svg",      alt: "Google BigQuery analytics" },
      { name: "Firebase",      icon: "/icons/tools/firebase.svg",      alt: "Firebase backend platform" },
      { name: "Elasticsearch", icon: "/icons/tools/elasticsearch.svg", alt: "Elasticsearch search engine" },
      { name: "Supabase",      icon: "/icons/tools/supabase.svg",      alt: "Supabase backend platform" },
      { name: "DynamoDB",      icon: "/icons/tools/dynamodb.svg",      alt: "AWS DynamoDB NoSQL" },
    ],
  },
  {
    name: "Digital Marketing",
    icon: "/icons/digital.svg",
    tools: [
      { name: "Google Analytics", icon: "/icons/tools/googleanalytics.svg", alt: "Google Analytics tracking" },
      { name: "Google Ads",       icon: "/icons/tools/googleads.svg",       alt: "Google Ads PPC management" },
      { name: "Meta Ads",         icon: "/icons/tools/metaads.svg",         alt: "Meta Facebook advertising" },
      { name: "SEMrush",          icon: "/icons/tools/semrush.svg",         alt: "SEMrush SEO tool" },
      { name: "Ahrefs",           icon: "/icons/tools/ahrefs.svg",          alt: "Ahrefs SEO analysis" },
      { name: "HubSpot",          icon: "/icons/tools/hubspot.svg",         alt: "HubSpot marketing automation" },
      { name: "Mailchimp",        icon: "/icons/tools/mailchimp.svg",       alt: "Mailchimp email marketing" },
      { name: "Hootsuite",        icon: "/icons/tools/hootsuite.svg",       alt: "Hootsuite social media management" },
      { name: "LinkedIn Ads",     icon: "/icons/tools/linkedinads.svg",     alt: "LinkedIn advertising" },
      { name: "Hotjar",           icon: "/icons/tools/hotjar.svg",          alt: "Hotjar user analytics" },
    ],
  },
  {
    name: "Cloud",
    icon: "/icons/Tools/cloud.svg",
    tools: [
      { name: "AWS",          icon: "/icons/tools/aws.svg",         alt: "AWS cloud infrastructure" },
      { name: "Azure",        icon: "/icons/tools/azure.svg",       alt: "Microsoft Azure cloud" },
      { name: "Google Cloud", icon: "/icons/tools/gcp.svg",         alt: "Google Cloud Platform" },
      { name: "AWS EKS",      icon: "/icons/tools/awseks.svg",      alt: "AWS EKS Kubernetes" },
      { name: "AWS Lambda",   icon: "/icons/tools/awslambda.svg",   alt: "AWS Lambda serverless" },
      { name: "AWS S3",       icon: "/icons/tools/awss3.svg",       alt: "AWS S3 storage" },
      { name: "CloudFront",   icon: "/icons/tools/cloudfront.svg",  alt: "AWS CloudFront CDN" },
      { name: "Terraform",    icon: "/icons/tools/terraform.svg",   alt: "Terraform infrastructure as code" },
      { name: "Kubernetes",   icon: "/icons/tools/kubernetes.svg",  alt: "Kubernetes container orchestration" },
      { name: "Serverless",   icon: "/icons/tools/serverless.svg",  alt: "Serverless framework" },
    ],
  },
  {
    name: "DevOps",
    icon: "/icons/Tools/devops.svg",
    tools: [
      { name: "Docker",          icon: "/icons/tools/docker.svg",        alt: "Docker containerization" },
      { name: "Kubernetes",      icon: "/icons/tools/kubernetes.svg",    alt: "Kubernetes DevOps automation" },
      { name: "Jenkins",         icon: "/icons/tools/jenkins.svg",       alt: "Jenkins CI/CD pipeline" },
      { name: "GitHub Actions",  icon: "/icons/tools/githubactions.svg", alt: "GitHub Actions CI/CD" },
      { name: "GitLab CI",       icon: "/icons/tools/gitlabci.svg",      alt: "GitLab CI/CD pipeline" },
      { name: "Terraform",       icon: "/icons/tools/terraform.svg",     alt: "Terraform IaC" },
      { name: "Ansible",         icon: "/icons/tools/ansible.svg",       alt: "Ansible automation" },
      { name: "Prometheus",      icon: "/icons/tools/prometheus.svg",    alt: "Prometheus monitoring" },
      { name: "Grafana",         icon: "/icons/tools/grafana.svg",       alt: "Grafana observability dashboard" },
      { name: "Codefresh",       icon: "/icons/tools/codefresh.svg",     alt: "Codefresh GitOps platform" },
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
