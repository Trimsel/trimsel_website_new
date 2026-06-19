// faqData.js
export const faqData = {
  devops: [
    {
      question: "How do I choose the best DevOps consulting company in India?",
      answer:
        "Look for a team with real production deployments — not just tool certifications. At Trimsel, we've built 60+ CI/CD pipelines with 99.95% uptime targets — including the Mocial EC2-to-EKS migration documented in a public case study. Our 92% client retention rate reflects how that approach works.",
    },
    {
      question: "How much do DevOps consulting services cost in India?",
      answer:
        "A focused CI/CD pipeline setup typically ranges from ₹3–8 lakhs. Full DevOps transformation including IaC, Kubernetes, monitoring, and DevSecOps ranges from ₹10–30 lakhs. Enterprise-scale implementations vary beyond that. We give a clear estimate after an infrastructure audit.",
    },
    {
      question: "How long does DevOps implementation take?",
      answer:
        "A CI/CD pipeline for a single application can be implemented in 2–4 weeks. A full DevOps foundation typically takes 6–12 weeks. Enterprise transformations with microservices migration are implemented in phases over 3–6 months.",
    },
    {
      question: "What's the difference between CI/CD and DevOps?",
      answer:
        "CI/CD automates the build, test, and deployment process — one component of DevOps. DevOps is broader — including CI/CD plus infrastructure as code, monitoring, security automation, incident response, and the engineering practices that make teams ship reliably.",
    },
    {
      question: "Should we use Kubernetes or is it overkill for our application?",
      answer:
        "Kubernetes makes sense when you're running multiple services needing independent scaling, automated recovery, and rolling deployments. If you have a single monolithic application with steady traffic, simpler deployment on EC2 or ECS might be more appropriate. We assess your actual workload patterns before recommending.",
    },
    {
      question: "What is Infrastructure as Code and do we need it?",
      answer:
        "Infrastructure as Code means managing servers, networks, and cloud resources through code (Terraform, CloudFormation, Ansible) instead of manual console clicks. If your team is still provisioning infrastructure manually, IaC is the single highest-impact DevOps improvement you can make.",
    },
    {
      question: "What is DevSecOps and how does it differ from traditional security?",
      answer:
        "Traditional security reviews happen after code is built. DevSecOps integrates security checks directly into the CI/CD pipeline — automated vulnerability scanning, container image checks, secrets detection, and compliance validation run on every commit. Issues caught in minutes, not weeks.",
    },
    {
      question: "Can you set up monitoring and observability for our existing infrastructure?",
      answer:
        "Yes — we implement Prometheus and Grafana for metrics, ELK Stack or Loki for logs, OpenTelemetry for distributed tracing, and PagerDuty for alerting — integrated with your existing infrastructure. Most teams see 40–60% reduction in mean time to detection within the first month.",
    },
    {
      question: "Do you provide ongoing managed DevOps support?",
      answer:
        "Yes — every engagement includes post-implementation support. For long-term managed operations, we provide 24/7 monitoring, incident response, security patching, pipeline maintenance, and cost optimisation on agreed SLAs. Dedicated DevOps contact, not a ticket queue.",
    },
    {
      question: "Why choose Trimsel for DevOps consulting services?",
      answer:
        "Three things: 60+ production pipelines with 99.95% uptime targets including the documented Mocial migration. Vendor-neutral tooling recommendations based on your needs. And we stay involved after implementation with managed support and training. 92% client retention rate.",
    },
  ],

  mobile: [
    {
      question:
        "How do I choose the best mobile app development company in Chennai?",
      answer:
        "Look for three things — a portfolio of shipped apps with real store ratings, technical depth in your required platform (iOS, Android, or Flutter), and a team that stays accountable after launch. At Trimsel, our 200+ launched apps, 4.8★ average store rating, and 92% client retention reflect exactly that. We start every project by understanding your business — not by recommending the most expensive solution.",
    },
    {
      question: "How much does mobile app development cost in Chennai?",
      answer:
        "Cost depends on platform, features, integrations, and complexity. A basic single-platform MVP typically starts from ₹5–10 lakhs. A cross-platform app with backend integrations ranges from ₹10–25 lakhs. Complex enterprise apps with AI features, custom APIs, or multi-role systems vary significantly beyond that. We provide a detailed scope and cost estimate after a free consultation — no generic quotes, no hidden extras.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "A simple MVP on a single platform typically takes 6–10 weeks. A cross-platform app with more features takes 10–16 weeks. Complex enterprise mobile apps with multiple integrations and custom backend systems can take 4–6 months. We use two-week agile sprints so you see working progress throughout — not just a final handover at the end.",
    },
    {
      question: "Do you develop apps for both Android and iOS?",
      answer:
        "Yes, we build native Android apps using Kotlin, native iOS apps using Swift, and cross-platform apps using Flutter or React Native. For cross-platform development, a single Flutter or React Native codebase delivers native-like performance on both platforms simultaneously — reducing development time and cost without compromising user experience.",
    },
    {
      question: "What is the difference between Flutter and React Native?",
      answer:
        "Both are cross-platform frameworks that build iOS and Android apps from a single codebase. Flutter — built by Google using the Dart language — compiles to native code, offering slightly better performance and more consistent UI across platforms. React Native — built by Meta using JavaScript — has a larger developer ecosystem and easier integration with existing JavaScript codebases. For most new projects we recommend Flutter. For teams with existing JavaScript knowledge, React Native is often the faster choice.",
    },
    {
      question: "Can you upgrade or rebuild my existing mobile application?",
      answer:
        "Yes, app modernisation is a significant part of what we do. Whether your app has performance issues, an outdated interface, compatibility problems with newer iOS or Android versions, or simply needs new features — our team can audit your existing codebase and recommend the most cost-effective path forward. Sometimes that’s targeted improvements. Sometimes a rebuild from scratch is faster and cheaper long-term. We’ll give you an honest assessment either way.",
    },
    {
      question: "Should I build a native app or a cross-platform app?",
      answer:
        "Native apps — built specifically for iOS using Swift or Android using Kotlin — offer maximum performance and full access to platform-specific features like Face ID, Apple Pay, and Android widgets. Choose native when your app requires complex animations, device hardware access, or the absolute best performance. Cross-platform apps built with Flutter or React Native are faster to build, more cost-effective, and reach both platforms simultaneously — ideal for MVPs, startups with budget constraints, or apps where performance differences won’t be noticeable. We help you choose based on your actual requirements and timeline.",
    },
    {
      question: "Do you provide app maintenance after launch?",
      answer:
        "Yes, post-launch support is included in every project. We provide bug fixes, OS compatibility updates when new iOS or Android versions release, performance monitoring, feature enhancements, and App Store and Google Play re-submissions. You get a dedicated support contact — not a ticket queue — and we operate on agreed response SLAs so you always know when to expect a resolution.",
    },
    {
      question:
        "Will you help publish my mobile app on the App Store and Google Play?",
      answer:
        "Yes, we handle the complete app submission process for both platforms — including preparing store listings, screenshots, descriptions, compliance checks, and release approvals. This ensures your application is launched correctly and meets platform requirements without delays.",
    },
    {
      question:
        "Can you integrate third-party services into my mobile application?",
      answer:
        "Yes, we integrate payment gateways, maps, analytics tools, CRMs, chat systems, APIs, and cloud services based on your business needs. These integrations help extend your app’s functionality and improve the overall user experience. Book a free consultation to discuss your specific integration requirements.",
    },
  ],
  web: [
    {
      question: "How much does website development cost in Chennai?",
      answer:
        "Cost depends on project type, complexity, and features. A standard business website typically starts from ₹1–3 lakhs. A custom web application with backend integrations and user authentication ranges from ₹5–20 lakhs. Enterprise platforms with complex workflows, API integrations, and compliance requirements vary significantly beyond that. We provide a detailed scope and cost estimate after a free consultation no generic quotes.",
    },
    {
      question: "How long does it take to build a business website?",
      answer:
        "A standard business website with 5–15 pages takes 2–4 weeks. A custom web application with user authentication, dashboards, and API integrations takes 8–16 weeks. Complex enterprise platforms can take 4–6 months. We use two-week agile sprints so you see working progress throughout, not just a final handover at the end.",
    },
    {
      question: "How do I choose the best web development company in Chennai?",
      answer:
        "Look for three things a portfolio of live, working websites (not just screenshots), technical depth across frontend and backend, and a team that provides post-launch support rather than disappearing after delivery. At Trimsel, our 180+ delivered web projects, 95% on-time delivery rate, and dedicated post-launch support reflect an approach that starts with your business problem and stays accountable until the outcome is right.",
    },
    {
      question:
        "Can you redesign my existing website without losing SEO rankings?",
      answer:
        "Yes, Website redesign with SEO preservation is one of our core capabilities. Before any redesign we audit your current URL structure, metadata, internal linking, indexed pages, and backlink profile. During migration we implement 301 redirects for every changed URL, preserve existing meta titles and descriptions where they're performing well, and maintain your sitemap and robots.txt configuration. Post-launch we monitor Google Search Console for crawl errors and ranking changes for 4–6 weeks to catch any issues early.",
    },
    {
      question:
        "Which platform is best for my website WordPress, custom-built, or Shopify?",
      answer:
        "It depends on your business needs. WordPress is ideal for content-heavy business websites where your team needs to update pages regularly without developer help. Shopify is best for e-commerce businesses that want a quick, reliable online store without heavy customisation. Custom-built solutions using React, Next.js, or Node.js are right when you need advanced functionality, complex user flows, or integrations that off-the-shelf platforms can't support. We help you choose based on your actual requirements not what's easiest for us to build.",
    },
    {
      question:
        "Why should I choose Trimsel as my web development company in Chennai?",
      answer:
        "Three things set us apart. First, We've delivered 180+ web projects with a 95% on-time delivery rate, so you're working with a team that has consistently shipped real products under real deadlines. Second, We don't hand off your project to junior developers or offshore it after scoping. The team that plans your project is the team that builds it. Third, We stay involved after launch with dedicated support, agreed SLAs, and proactive maintenance. Our 92% client retention rate reflects how that approach works in practice.",
    },
    {
      question: "Do you provide ecommerce website development in Chennai?",
      answer:
        "Yes, We build e-commerce platforms on WooCommerce, Shopify, and custom solutions with secure payment gateway integration, product catalogue management, inventory tracking, and conversion-optimised checkout flows. Every e-commerce build is tested under simulated peak traffic before launch. We've delivered online stores for retail, D2C brands, and B2B wholesale businesses.",
    },
    {
      question: "Will my website be SEO-friendly after development?",
      answer:
        "Yes, SEO is built into our development process, not added as an afterthought. Every website we deliver includes clean URL structures, semantic HTML markup, optimised meta tags, fast page load speeds targeting Core Web Vitals thresholds, mobile-first responsive design, structured data markup, XML sitemap generation, and proper robots.txt configuration. These technical foundations give your SEO strategy the strongest possible starting point.",
    },
    {
      question: "Can I hire dedicated web developers from Trimsel?",
      answer:
        "Yes, You can hire dedicated frontend developers, backend engineers, full-stack developers, or a complete web development team on a part-time or full-time basis. Your Trimsel developers work embedded in your workflow with shared tools, daily standups, and full accountability. No account managers in the middle — you communicate directly with the engineers building your product.",
    },
    {
      question: "Do you sign an NDA before discussing my web project?",
      answer:
        "Yes, Always. We sign a Non-Disclosure Agreement before any detailed project discussion. Your business logic, technical requirements, competitive advantages, and any sensitive information shared during scoping is fully protected from the moment we start talking. You can request the NDA before the first call.",
    },
  ],

  cloud: [
    {
      question: "How do I choose the best cloud consulting company in Chennai?",
      answer:
        "Look for a team that is vendor-neutral — meaning they recommend AWS, Azure, or GCP based on your actual workload needs, not their partnership incentives. At Trimsel, our cloud projects have delivered an average of 40% cost savings with 99.95% uptime across production environments — and we stay involved long after the migration is complete.",
    },
    {
      question: "How much does cloud migration cost in India?",
      answer:
        "Cost depends on infrastructure complexity, number of workloads, compliance requirements, and target platform. A focused migration of 2–5 applications typically ranges from ₹5–15 lakhs. Enterprise migrations can range from ₹15–50 lakhs or more. We provide a clear estimate after an infrastructure assessment.",
    },
    {
      question: "How long does cloud migration take?",
      answer:
        "A straightforward migration of a few applications typically takes 4–8 weeks. Complex enterprise migrations with multiple environments and compliance requirements can take 3–6 months. We use a phased approach with rollback plans — so your operations continue running throughout.",
    },
    {
      question: "Which cloud platform should I choose — AWS, Azure, or GCP?",
      answer:
        "Each platform has genuine strengths. AWS has the broadest service catalogue. Azure integrates deeply with Microsoft enterprise tools. GCP excels in data analytics, machine learning, and Kubernetes-native workloads. We assess your workloads, team skills, and budget before recommending — and we support all three.",
    },
    {
      question: "What is the difference between cloud migration and cloud-native development?",
      answer:
        "Cloud migration moves existing applications from on-premise to cloud — often with minimal code changes or moderate restructuring. Cloud-native builds new applications specifically for cloud using containers, microservices, and serverless architecture. We do both.",
    },
    {
      question: "Can you reduce our current cloud costs without affecting performance?",
      answer:
        "Yes — most businesses are overspending on cloud by 30–50% due to over-provisioned instances and unused resources. We run a cloud cost audit that identifies specific savings. Our clients see an average of 40% cost reduction within the first 90 days.",
    },
    {
      question: "Do you provide managed cloud support after migration?",
      answer:
        "Yes — every cloud project includes post-migration support. We provide 24/7 monitoring, security patching, performance optimisation, incident response, and cost management on agreed SLAs. You get a dedicated cloud operations contact.",
    },
    {
      question: "Is our data secure during and after cloud migration?",
      answer:
        "Security is built into every stage — encrypted data transfer, access controls, network isolation, and security validation before production cutover. Post-migration, we implement IAM policies, encryption, automated backups, and compliance monitoring for HIPAA, SOC 2, PCI-DSS, or GDPR.",
    },
    {
      question: "Can cloud infrastructure support AI and automation workloads?",
      answer:
        "Yes — modern cloud platforms are specifically designed for AI model training, data pipeline orchestration, and automation workflows. AWS SageMaker, Google Vertex AI, and Azure ML provide managed environments. We design cloud infrastructure that supports AI workloads from day one.",
    },
    {
      question: "Why choose Trimsel for cloud consulting services in Chennai?",
      answer:
        "Three things set us apart. We're vendor-neutral — recommending based on your needs, not partner margins. We've delivered 40% average cost savings with 99.95% uptime, including the Mocial EC2-to-EKS migration. And we stay involved after migration with dedicated cloud operations support. Our 92% client retention rate reflects how that approach works.",
    },
  ],

  digital: [
    {
      question: "How do I choose the best digital marketing company in Chennai?",
      answer:
        "Look for transparent reporting, proven results across multiple channels, and a team that understands attribution — not just social followers or impressions. Trimsel delivers 180% average traffic growth and 4.5x ROAS with full conversion tracking on every campaign.",
    },
    {
      question: "How much does digital marketing cost in India?",
      answer:
        "SEO retainers typically start from ₹25,000–60,000/month. Google Ads management starts from ₹15,000/month plus ad spend. Full-service digital marketing — SEO, paid, social, and content — ranges from ₹50,000–2,00,000/month depending on channels and scale. We give a clear breakdown after understanding your goals.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical SEO fixes show measurable impact in 4–8 weeks. Competitive keyword ranking improvements typically take 3–6 months. Paid channels like Google Ads and Meta Ads can generate leads within the first week of launch.",
    },
    {
      question: "Should I run Google Ads or focus on SEO first?",
      answer:
        "It depends on your timeline and budget. Google Ads generates immediate traffic and qualified leads. SEO builds long-term organic visibility at lower cost per click. Most businesses benefit from running both in parallel — paid for immediate leads, SEO for long-term compounding growth. We assess your situation and recommend the right mix.",
    },
    {
      question: "What is AEO and GEO and why does it matter?",
      answer:
        "AEO (Answer Engine Optimisation) targets featured snippets and voice search answers. GEO (Generative Engine Optimisation) ensures your brand appears in AI-generated answers from ChatGPT, Gemini, and Perplexity. As AI search grows, these are becoming as important as traditional SEO for brand visibility.",
    },
    {
      question: "Can you manage our social media accounts?",
      answer:
        "Yes — we handle strategy, content creation, scheduling, community management, and paid social across Instagram, LinkedIn, Facebook, and X (Twitter). Monthly reports show reach, engagement, and direct lead generation — not just vanity metrics.",
    },
    {
      question: "What is performance marketing and how is it different from digital marketing?",
      answer:
        "Digital marketing covers all online channels including SEO, content, social, and email. Performance marketing specifically refers to paid campaigns — Google Ads, Meta Ads, LinkedIn Ads — where you pay per click or conversion and results are directly measurable against ROI. We do both.",
    },
    {
      question: "Do you run Meta Ads (Facebook and Instagram) campaigns?",
      answer:
        "Yes — we run prospecting, retargeting, and lead generation campaigns across Facebook and Instagram. We use conversion-optimised creative, audience segmentation, lookalike audiences, and A/B testing to maximise ROAS and reduce cost per lead.",
    },
    {
      question: "Can digital marketing work for B2B businesses?",
      answer:
        "Yes — B2B digital marketing uses LinkedIn Ads, SEO for high-intent keywords, content marketing, and email nurturing to generate qualified leads. We align messaging with your sales funnel — top-of-funnel awareness through to bottom-of-funnel decision content.",
    },
    {
      question: "Why choose Trimsel for digital marketing services in Chennai?",
      answer:
        "We combine data-first strategy with full-channel execution — SEO, paid media, social, and content as one integrated team, not separate silos. Our engineering background means we understand the technical side of digital marketing that most agencies miss: Core Web Vitals, JavaScript rendering, and conversion tracking infrastructure. 180% traffic growth. 4.5x ROAS. 55% CPL reduction.",
    },
  ],

  ai: [
    {
      question: "How do I choose the best AI development company in India?",
      answer:
        "Look for a team with real AI deployments in production — not just POCs that never shipped. At Trimsel, our AI systems run in production across FinTech, IoT, and healthcare — including KarIOT which achieved 12-18% non-revenue water reduction using our AI-driven forecasting models.",
    },
    {
      question: "How much does building an AI system cost in India?",
      answer:
        "A focused chatbot or automation tool typically starts from ₹3–5 lakhs. A custom ML model with data pipeline and integration ranges from ₹8–20 lakhs. Enterprise-grade AI platforms vary beyond that. We give a clear estimate after a short discovery call — no vague 'it depends' answers.",
    },
    {
      question: "How long does an AI development project take?",
      answer:
        "A proof of concept can typically be delivered in 4–8 weeks. A full production-ready AI system takes 3–6 months depending on data availability, integration complexity, and models involved. We give a realistic timeline upfront.",
    },
    {
      question: "Do I need a lot of data to use AI?",
      answer:
        "Not always. Some models can be fine-tuned from pre-trained foundations with relatively small datasets. Others need substantial domain-specific data. We assess your data situation early and advise honestly before you commit.",
    },
    {
      question: "Can you integrate AI into our existing systems?",
      answer:
        "Yes — we specialise in integrating AI into existing CRM, ERP, mobile apps, web platforms, and internal tools — no full system rebuild required. Your team keeps using the tools they know, now with intelligence built in.",
    },
    {
      question: "What industries do you build AI for?",
      answer:
        "Healthcare, FinTech, retail, logistics, IoT, manufacturing, and education. The common thread is a real business problem — not the industry itself.",
    },
    {
      question: "What is the difference between machine learning and generative AI?",
      answer:
        "Machine learning models learn patterns from data to make predictions — like fraud detection or demand forecasting. Generative AI creates new content — text, images, code — based on prompts. We build both, depending on what your problem requires.",
    },
    {
      question: "Do you offer AI consulting before development begins?",
      answer:
        "Yes — we offer a discovery session where we assess your data, identify the highest-value AI opportunities, and create a practical roadmap before development starts.",
    },
    {
      question: "Will you maintain and update the AI model after launch?",
      answer:
        "Yes — AI models need ongoing monitoring and periodic retraining. We offer post-launch support including performance monitoring, accuracy tracking, model retraining, and infrastructure maintenance.",
    },
    {
      question: "Why work with a Chennai-based AI company rather than a larger firm?",
      answer:
        "With larger firms, AI projects often get staffed with junior engineers after the pitch. With us, you work directly with the engineers building your system. Our Chennai base means competitive pricing without compromising technical depth.",
    },
  ],

  default: [
    {
      question: "What services does Trimsel provide?",
      answer:
        "Trimsel is a full-service software development company in Chennai offering AI development, mobile app development, web development, cloud consulting, DevOps automation, and digital marketing. We work with startups, SMEs, and enterprise teams across India, UAE, and the US — handling every stage from product strategy and design through to post-launch support.",
    },
    {
      question: "How much does it cost to build a mobile app or website?",
      answer:
        "Cost depends on complexity, features, platform, and tech stack. A basic business website typically starts from ₹2–5 lakhs. A mobile app MVP ranges from ₹5–15 lakhs depending on platform and features. Complex enterprise platforms, AI-powered products, or multi-platform solutions vary significantly beyond that. We provide a detailed scope and cost estimate after a free consultation — no generic quotes.",
    },
    {
      question: "How long does software development take?",
      answer:
        "It depends on scope. A basic website takes 2–4 weeks. An MVP mobile app takes 6–10 weeks. A complex enterprise platform or AI solution can take 3–6 months. We use agile sprint-based delivery so you see working progress every two weeks — not just a final handover at the end.",
    },
    {
      question: "Do you work with startups or only large enterprises?",
      answer:
        "Both. We've helped seed-stage founders validate their first product within tight budgets and supported established enterprises replacing systems that no longer scaled. Our engagement models are designed to flex — a startup and a Fortune 500 company have very different needs, and we structure each engagement accordingly.",
    },
    {
      question:
        "Do you provide a free consultation before committing to a project?",
      answer:
        "Yes, completely free, no commitment required. Our initial consultation is a 30-minute conversation where we listen to your project idea, ask the right questions, and give you an honest assessment of what it would take to build it. You'll leave with clarity on scope, timeline, and approach — whether you decide to work with us or not.",
    },
    {
      question: "Can I hire dedicated developers from Trimsel?",
      answer:
        "Yes. You can hire dedicated developers, DevOps engineers, UI/UX designers, cloud architects, or a full cross-functional pod — on a part-time or full-time basis. Your Trimsel team works embedded in your workflow with shared tools, standups, and full accountability. No account managers in the middle.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, every project includes post-launch support. We monitor performance, apply security patches, ship feature updates, and respond to issues around the clock. You get a dedicated support channel — not a generic ticket queue. Our involvement doesn't end at go-live — it continues as your product grows.",
    },
    {
      question:
        "How do I choose the right software development company in Chennai?",
      answer:
        "Look for three things — a proven delivery track record, technical depth across your specific stack, and a team that stays accountable after launch. At Trimsel, our 92% client retention rate and 200+ projects delivered reflect an approach that starts with your business problem, not our preferred technology, and stays involved until the outcome is right.",
    },
    {
      question: "Do you sign an NDA before discussing project details?",
      answer:
        "Yes. We sign a Non-Disclosure Agreement before any detailed project discussion. Your idea, business logic, and technical requirements are fully protected from the moment we start talking. You can request an NDA before the first call — no questions asked.",
    },
    {
      question: "Which industries does Trimsel serve?",
      answer:
        "We've delivered projects across FinTech, HealthTech, on-demand services, IoT and smart systems, logistics, SaaS, e-commerce, real estate, and media. Our clients range from seed-stage startups to established enterprises — and our cross-industry experience means we bring relevant technical patterns and compliance awareness to each engagement.",
    },
  ],

  blog: [
    {
      question: "What topics does the Trimsel blog cover?",
      answer:
        "Our blog covers practical guides on mobile app development, web development, AI and machine learning, cloud computing, DevOps automation, digital marketing, and SEO — written by the engineers and strategists who build these systems for clients.",
    },
    {
      question: "How often do you publish new blog posts?",
      answer:
        "We publish 2-4 posts per month, focusing on quality over quantity. Every article is based on real project experience — not recycled content.",
    },
    {
      question: "Can I suggest a topic for the Trimsel blog?",
      answer:
        "Yes — reach out via our contact page with your suggestion and we'll consider it for an upcoming post.",
    },
    {
      question: "Are your blog posts written by AI or by your team?",
      answer:
        "Every post is written by our team — developers, architects, and strategists working on real client projects. We use AI tools for research and editing, but insights come from hands-on experience.",
    },
    {
      question: "Do you offer custom content or guest posts?",
      answer:
        "We occasionally collaborate on guest posts with industry partners. Reach out through our contact page if interested.",
    },
    {
      question: "Can I use your blog content for reference?",
      answer:
        "Yes — reference and cite with proper attribution and a link back to the original. Don't reproduce full articles without permission.",
    },
  ],

  contact: [
    {
      question: "What happens after I submit the contact form?",
      answer:
        "We confirm receipt immediately. A relevant engineer or strategist reviews your brief — typically within a few hours — and you receive a detailed proposal with scope, timeline, team structure, and pricing within 24 hours. No generic auto-response — you hear from the team that would actually work on your project.",
    },
    {
      question: "Is there a minimum project size to work with Trimsel?",
      answer:
        "We work with projects ranging from focused MVPs and single-feature builds (starting from ₹2-3 lakhs) to large-scale enterprise platforms. If your project scope is very small, we'll tell you honestly whether we're the right fit — and recommend alternatives if we're not.",
    },
    {
      question: "Do you sign NDAs before discussing project details?",
      answer:
        "Yes — we sign NDAs before any detailed discussion. Your ideas, data, and business information are protected from the first conversation. Every project we take on is NDA-protected by default.",
    },
    {
      question: "Can I schedule a call before submitting a full project brief?",
      answer:
        "Yes — use the 'Schedule a Call' option to book a free 30-minute consultation. We use this to understand your project at a high level and assess whether we're the right team — before you invest time writing a detailed brief.",
    },
    {
      question: "What services does Trimsel provide?",
      answer:
        "We provide mobile app development, web development, AI development (ML, NLP, computer vision, generative AI), DevOps consulting (CI/CD, Kubernetes, Terraform), cloud consulting (AWS, Azure, GCP), and digital marketing (SEO, Google Ads, Meta Ads, AEO/GEO). Every service is delivered by our 100% in-house team from Chennai.",
    },
    {
      question: "How quickly can you start on a new project?",
      answer:
        "For most projects, we can begin within 1-2 weeks of signing the agreement. If you need faster turnaround, let us know during the consultation — we'll tell you honestly what's feasible.",
    },
  ],

  ecommerce: [
    {
      question: "How much does e-commerce website development cost in India?",
      answer:
        "A standard e-commerce website (catalogue, cart, payments, admin panel) typically ranges from ₹3–8 lakhs. Feature-rich platforms with custom checkout flows, loyalty programs, and multi-vendor support range from ₹10–25 lakhs. Enterprise implementations with ERP integrations vary beyond that. We give a fixed-price quote after a requirements session — no hourly billing surprises.",
    },
    {
      question: "How long does it take to build an e-commerce website?",
      answer:
        "A production-ready e-commerce site takes 6–12 weeks depending on catalogue size, integrations, and custom features. Shopify-based projects with standard themes can go live in 3–4 weeks. Custom React/Next.js storefronts with headless commerce architecture take 10–16 weeks. We give you a realistic timeline upfront — not an optimistic one.",
    },
    {
      question: "Shopify, WooCommerce, or custom — which platform is best?",
      answer:
        "Shopify suits brands that want a fast launch, minimal technical overhead, and a proven ecosystem of apps — ideal for D2C brands under ₹10 Cr annual GMV. WooCommerce fits WordPress-based businesses needing flexibility without SaaS lock-in. Custom React/Next.js headless commerce is best for high-volume storefronts needing maximum performance, unique UX, and deep backend integrations. We recommend based on your traffic projections and team's technical capacity, not on which stack we prefer.",
    },
    {
      question: "Do you also build e-commerce mobile apps?",
      answer:
        "Yes — we build React Native e-commerce apps that share backend logic with your web store. This includes product browsing, cart, checkout, push notification campaigns, and real-time order tracking. A combined web + app project typically costs 40–60% less than building each platform separately, because of shared APIs and design systems.",
    },
    {
      question: "Which payment gateways do you integrate?",
      answer:
        "We integrate Razorpay, PayU, CCAvenue, Stripe, and PhonePe for Indian merchants. For international stores, Stripe and PayPal. We also implement EMI options (Razorpay BNPL), buy-now-pay-later flows, e-wallet support (Paytm, Amazon Pay), and UPI collect. All integrations are PCI-DSS compliant and include webhook-based order confirmation.",
    },
    {
      question: "What is included in post-launch e-commerce support?",
      answer:
        "Our standard support plan covers bug fixes, security patches, payment gateway updates, and performance monitoring. Extended plans include catalogue management assistance, SEO reporting, conversion rate analysis, and feature additions on a retainer basis. We don't disappear after launch — 92% of our clients continue with us beyond the initial project.",
    },
    {
      question: "Can you migrate my existing store to a new platform?",
      answer:
        "Yes — we've migrated Magento → Shopify, WooCommerce → headless Next.js, and custom PHP stores → modern stacks. Migration includes product data, customer records, order history, SEO redirects (301 rules to preserve rankings), and payment gateway reconfiguration. We run old and new platforms in parallel before cutover so there's zero downtime.",
    },
    {
      question: "How do you ensure my e-commerce site ranks on Google?",
      answer:
        "We build with Core Web Vitals from day one — server-side rendering, image optimisation, and Largest Contentful Paint under 2.5 seconds. Every product and category page gets unique meta titles, structured data (Product, BreadcrumbList, FAQPage schemas), and canonical tags. Our digital marketing team handles ongoing SEO including keyword-targeted category pages, link building, and Google Shopping feed optimisation.",
    },
  ],
};
