export const projects = [
  {
    id: 1,
    title: "EzyHelpers",
    slug: "ezyhelpers-case-study",
    subtitle:
      "On-Demand Home Services Platform — Booking, Matching & Payments",
    description:
      "EzyHelpers connects households with vetted home service professionals — cleaning, elder care, cooking, plumbing, and daily assistance — through a mobile app and web platform. We built the full product: real-time booking with provider matching, in-app payments, provider verification workflows, service tracking, and a rating system that builds trust on both sides.",
    category: ["MOBILE", "WEB"],
    tech: ["Flutter", "Node.js", "Firebase", "Razorpay"],
    image: "/projects/project1.svg",
    imageAlt:
      "EzyHelpers home services mobile app — booking screen, service categories, and provider profiles",
  },
  {
    id: 2,
    title: "KarIOT",
    slug: "kariot-case-study",
    subtitle:
      "AI-Powered Smart Water Management — Real-Time Monitoring, Leak Detection & Predictive Maintenance",
    description:
      "KarIOT is a smart water management platform that uses IoT sensors and AI-driven forecasting to monitor water usage, detect leaks, and predict maintenance needs. We built the data pipeline, the AI forecasting models, the real-time monitoring dashboard, and the alerting system. In pilot deployments, our models achieved 12-18% reduction in non-revenue water loss.",
    category: ["AI / ML", "MOBILE", "WEB"],
    tech: ["Python", "TensorFlow", "AWS", "IoT", "React"],
    image: "/projects/project2.svg",
    imageAlt:
      "KarIOT smart water management platform — IoT sensors and AI-driven monitoring dashboard",
  },
  {
    id: 3,
    title: "Xaber",
    slug: "xaber-case-study",
    subtitle:
      "White-Label Ride-Hailing Platform — Real-Time Booking, Driver Tracking & Fare Management",
    description:
      "Xaber is a white-label ride-hailing platform built for startups and taxi businesses. We developed the rider app, driver app, and admin dashboard with real-time GPS tracking, intelligent fare calculation, driver assignment algorithms, in-app payments, trip history, and surge pricing logic. Built to handle thousands of concurrent rides with sub-second location updates.",
    category: ["MOBILE", "WEB"],
    tech: ["Flutter", "Node.js", "Google Maps API", "Socket.io", "MongoDB"],
    image: "/projects/project3.svg",
    imageAlt:
      "Xaber ride-hailing mobile app — rider booking screen and driver tracking interface",
  },
  {
    id: 4,
    title: "Mocial",
    slug: "mocial-case-study",
    subtitle:
      "Monolith to Microservices Migration — EC2 to EKS with CI/CD & Full Observability",
    description:
      "Mocial is a social super app combining streaming, networking, and sharing. The original monolith couldn't handle growing load. We migrated to microservices on Amazon EKS with Docker containers, Codefresh CI/CD with canary deployments, OpenTelemetry observability with per-service SLOs, and horizontal pod autoscaling. The team went from dreading deployments to shipping multiple times per week.",
    category: ["DEVOPS & CLOUD"],
    tech: ["AWS EKS", "Docker", "Kubernetes", "Codefresh", "Terraform", "OpenTelemetry"],
    image: "/projects/project4.svg",
    imageAlt:
      "Mocial social platform — app interface and DevOps cloud migration architecture",
  },
];
