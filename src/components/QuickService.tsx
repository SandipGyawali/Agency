import React from "react";
import Container from "./Container";
import { 
  Briefcase, 
  Cloud, 
  Code, 
  Cpu, 
  Server, 
  Users 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "DevOps & Cloud Engineering",
    icon: Cloud,
    description:
      "Scalable cloud infrastructure with CI/CD pipeline setup, cloud architecture (AWS, Azure, GCP), Infrastructure as Code (Terraform), and monitoring & observability.",
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
    icon: Server,
    description:
      "End-to-end SaaS platforms with multi-tenant architecture, subscription & billing systems, API development, and scalable backend systems.",
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
    icon: Code,
    description:
      "Custom web and mobile applications with modern UI/UX implementation, clean architecture, and seamless system integrations.",
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
    icon: Cpu,
    description:
      "AI-powered solutions including AI model integration, process automation, chatbots & AI assistants, and data analytics & insights.",
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
    icon: Briefcase,
    description:
      "Strategic growth through strategic planning, organizational design, change management, and market & competitor analysis.",
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
    icon: Users,
    description:
      "Dedicated engineers with agile project management, flexible engagement models, and long-term technical partnership.",
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
    <Container className="pt-28 pb-20">
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
            {services.map((service) => {
              const Icon = service.icon;
              
              return (
                <div
                  key={service.id}
                  className="bg-white border border-foreground/10 space-y-6 p-8"
                >
                  <div className="p-2 bg-[#f8f8f4] border w-fit border-foreground/10">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
  
  
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

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                      What's Included
                    </h4>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                      {
                        service.capabilities.map(cap => (
                          <div key={cap} className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                            <span className="text-xs font-medium text-muted-foreground">{cap}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </Container>
  );
};

