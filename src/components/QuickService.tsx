import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const services = [
  {
    id: "01",
    title: "DevOps & Cloud Engineering",
    description:
      "We design, implement, and manage scalable cloud infrastructure with modern DevOps practices to ensure reliability, security, and high performance.",
    capabilities: [
      "CI/CD Pipeline Setup",
      "Cloud Architecture (AWS, Azure, GCP)",
      "Infrastructure as Code (Terraform)",
      "Monitoring & Observability",
    ],
  },
  {
    id: "02",
    title: "SaaS Product Development",
    description:
      "From idea to launch, we build scalable SaaS platforms with multi-tenant architecture, subscription systems, and seamless user experiences.",
    capabilities: [
      "Multi-tenant Architecture",
      "Subscription & Billing Systems",
      "API Development",
      "Scalable Backend Systems",
    ],
  },
  {
    id: "03",
    title: "Custom Application Development",
    description:
      "We create robust web and mobile applications tailored to your business needs using modern frameworks and clean, maintainable code.",
    capabilities: [
      "Web Application Development",
      "Mobile App Development",
      "UI/UX Implementation",
      "System Integrations",
    ],
  },
  {
    id: "04",
    title: "AI & Intelligent Automation",
    description:
      "Leverage AI and automation to streamline operations, improve decision-making, and unlock new growth opportunities.",
    capabilities: [
      "AI Model Integration",
      "Process Automation",
      "Chatbots & AI Assistants",
      "Data Analytics & Insights",
    ],
  },
  {
    id: "05",
    title: "Business Strategy & Transformation",
    description:
      "Help organizations define clear strategies, drive transformation initiatives, and achieve sustainable growth.",
    capabilities: [
      "Strategic Planning",
      "Organizational Design",
      "Change Management",
      "Market & Competitor Analysis"
    ]
  }
];

export const QuickServicesSection = () => {
  return (
    <Container>
      <div className="mx-auto mt-32">
        
        {/* Mission */}
        <div
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <div className="col-span-3 font-medium">
            <div className="border border-foreground/20 w-fit bg-white px-2 py-0.5">
              <p>Services</p>
            </div>
          </div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <h1
              className="text-2xl font-medium tracking-tight"
            >
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something extraordinary that leaves a
              lasting impact.
            </h1>

            <p
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              Our approach: Research deeply, design thoughtfully, and deliver
              excellence. We believe in the power of collaboration, continuous
              learning, and staying ahead of industry trends.
            </p>
          </div>
        </div>


        {/* Services */}
        <div className="mt-10 w-full bg-white py-20 border border-muted-foreground/20">
          <div className="grid gap-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-7"
              >
                {/* Number */}
                <div className="flex items-start justify-center md:col-span-1">
                  <div className="bg-primary text-primary-foreground flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold">
                    {service.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:col-span-6">
                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-4">
                    <h4 className="text-muted-foreground mb-3 text-sm font-medium">
                      Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.capabilities.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="text-primary text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="group text-primary flex items-center text-sm font-medium hover:underline"
                  >
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

