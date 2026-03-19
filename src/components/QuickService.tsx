import React from "react";
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
      "Market & Competitor Analysis",
    ],
  },
  {
    id: "06",
    title: "Dedicated Development Teams",
    description:
      "Scale your business with a dedicated team of experienced engineers, designers, and DevOps specialists who work as an extension of your organization.",
    capabilities: [
      "Full-Time Dedicated Engineers",
      "Agile Project Management",
      "Flexible Engagement Models",
      "Long-Term Technical Partnership",
    ],
  }
];

export const QuickServicesSection = () => {
  return (
    <Container className="py-28">
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
              className="text-xl md:text-2xl font-medium tracking-tight"
            >
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something extraordinary that leaves a
              lasting impact.
            </h1>

            <p
              className="font-medium w-fit text-sm sm:text-base md:text-lg text-foreground/40 lg:translate-y-2"
            >
              Our approach: Research deeply, design thoughtfully, and deliver
              excellence. We believe in the power of collaboration, continuous
              learning, and staying ahead of industry trends.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-16">
          <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-foreground/10 space-y-6 p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {service.id}. {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Static "What's Included" section preserved */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    What's Included
                  </h4>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {
                      service.capabilities.map(cap => (
                        <div key={cap} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-foreground"></div>
                          <span className="text-sm font-medium text-muted-foreground">{cap}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Container>
  );
};

