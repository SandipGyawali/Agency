import {
  Users,
  Map,
  Pen,
  Palette,
  TestTube,
  BookOpen,
  Droplet,
  Code,
  Smartphone,
  PanelsTopLeft,
} from "lucide-react";

export const ServiceDetailSection = () => {
  return (
    <section className="py-16 w-full bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        
        {/* Hero */}
        <div className="mb-16 space-y-8">
          <div className="flex justify-start">
            <div className="rounded-full bg-muted p-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
                alt="UX/UI Design"
                className="h-16 dark:invert"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              UX/UI Design
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
              We believe that great design should be intuitive, accessible, and
              purposeful for every user who interacts with your product.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Our Expertise
            </h2>
            <p className="mt-2 text-muted-foreground">
              Professional tools and proven experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                name: "Adobe Creative Suite",
                desc: "Design proficiency",
                icon: "/adobe-icon.png",
              },
              { name: "Figma", desc: "Years experience", icon: "/figma-icon.svg" },
              { name: "Sketch", desc: "Projects completed", icon: "/sketch-icon.svg" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">{tool.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {tool.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm mb-16 max-w-none dark:prose-invert">
          <h2>Creating Meaningful Digital Experiences</h2>
          <p>
            We combine user research, information architecture, and visual
            design to deliver experiences that drive engagement and conversions.
          </p>

          <h2>Our UX/UI Design Services</h2>

          <div className="space-y-4">
            <ServiceItem icon={<Users className="h-5 w-5 text-primary" />} text="User research and persona development" />
            <ServiceItem icon={<Map className="h-5 w-5 text-primary" />} text="Information architecture and journey mapping" />
            <ServiceItem icon={<Pen className="h-5 w-5 text-primary" />} text="Wireframing and interactive prototyping" />
            <ServiceItem icon={<Palette className="h-5 w-5 text-primary" />} text="Visual design and brand integration" />
            <ServiceItem icon={<TestTube className="h-5 w-5 text-primary" />} text="Usability testing and validation" />
            <ServiceItem icon={<BookOpen className="h-5 w-5 text-primary" />} text="Design system creation" />
          </div>

          <h2>Strategic Design for Business Success</h2>
          <p>
            Our design philosophy centers on creating interfaces that bridge the
            gap between user needs and business objectives.
          </p>
        </div>

        {/* Related Services */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Related Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore our other design and development offerings
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <RelatedCard
              icon={<Droplet className="h-5 w-5" />}
              title="Brand Identity"
              description="Logo design and brand guidelines"
            />
            <RelatedCard
              icon={<Code className="h-5 w-5" />}
              title="Web Development"
              description="Custom website development"
            />
            <RelatedCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Mobile App Design"
              description="iOS and Android app interfaces"
            />
            <RelatedCard
              icon={<PanelsTopLeft className="h-5 w-5" />}
              title="Design Systems"
              description="Scalable component libraries"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const ServiceItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-3">
    {icon}
    <span>{text}</span>
  </div>
);

const RelatedCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group">
    <a
      href="#"
      className="block space-y-3 rounded-lg border p-6 transition-colors hover:bg-muted/50"
    >
      <div className="flex items-center gap-2">
        <div className="text-muted-foreground group-hover:text-primary">
          {icon}
        </div>
        <div className="font-medium group-hover:text-primary">{title}</div>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </div>
    </a>
  </div>
);



export default ServiceDetailSection