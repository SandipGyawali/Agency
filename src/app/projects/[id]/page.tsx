import React from "react";

const Page = () => {

  const items = [
    {
      title: "Coastal Reflections",
      client: "MERIDIAN FILMS",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
      video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/3571264-hd_1280_720_30fps.mp4",
      alt: "Coastal Reflections",
    },
    {
      title: "Ethereal Moments",
      client: "ZENITH VISUALS",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
      video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/1448735-hd_1366_720_24fps.mp4",
      alt: "Ethereal Moments",
    },
    {
      title: "Deserted Frontiers",
      client: "NEXUS CREATIVE",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg",
      video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/19348567-hd_1280_720_25fps.mp4",
      alt: "Deserted Frontiers",
    },
    {
      title: "Nature's Symphony",
      client: "PRISM STUDIOS",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
      video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/9882072-hd_1280_720_30fps.mp4",
      alt: "Nature's Symphony",
    },
  ];


  return (
    <section className="pb-20 w-full">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-2 w-2 bg-foreground"></div>
              <span className="text-sm font-medium text-muted-foreground">
                PROJECT SHOWCASE
              </span>
            </div>
            <h1 className="font-serif text-6xl leading-[0.85] font-light tracking-tight text-foreground md:text-8xl lg:text-9xl">
              DIGITAL
              <br />
              ARTISANS
            </h1>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">YEAR</div>
              <div className="mt-1 text-lg text-foreground">[2024]</div>
            </div>
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">CATEGORY</div>
              <div className="mt-1 text-lg text-foreground">[BRAND IDENTITY]</div>
            </div>
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">CLIENT</div>
              <div className="mt-1 text-lg text-foreground">[CREATIVE STUDIO]</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-20">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src="https://www.techfinitive.com/wp-content/uploads/2024/11/happy-development-team.jpg"
              decoding="async"
              loading="eager"
              alt="Creative workspace with coffee and design elements"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-muted-foreground">
              Artistic portrait with glitch-inspired overlays and ethereal lighting
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <div className="sticky top-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 bg-foreground"></div>
                  <h2 className="text-lg font-medium text-foreground">PROJECT OVERVIEW</h2>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-12">
                <div className="relative">
                  <h3 className="text-3xl leading-tight font-light text-foreground md:text-4xl">
                    A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.
                  </h3>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.
                  </p>
                </div>
                <div className="flex justify-start">
                  <button
                    data-slot="button"
                    data-variant="outline"
                    data-size="default"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-black text-white font-semibold shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* project images */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-2 w-2 bg-foreground"></div>
            <span className="text-sm font-medium text-muted-foreground">
              PROJECT IMAGES
            </span>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative h-[50vh] w-full cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
                />
      
                {/* Video */}
                <video
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
      
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/20"></div>
      
                {/* Text */}
                <div className="absolute inset-0 bottom-12 flex items-end">
                  <div className="px-6 text-left text-white sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <p className="mb-2 text-xs font-medium tracking-wider uppercase opacity-80 sm:mb-3 sm:text-sm md:mb-4 md:text-base">
                      {item.client}
                    </p>
                    <h2 className="max-w-md text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:max-w-lg">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
