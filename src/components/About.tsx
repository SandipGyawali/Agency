import React from "react";

const AboutUs = () => {
  return (
    <section className="py-32 section-padding w-full">
      <div className="bigger-container">
        {/* Mission */}
        <div className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12">
          <p className="col-span-3 font-medium">About Us</p>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <h1 className="text-2xl font-medium tracking-tight">
              We transform ideas into digital experiences that inspire and engage.
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something extraordinary that leaves a
              lasting impact.
            </h1>

            <p className="w-fit text-lg text-foreground/40 lg:translate-y-2">
              Our approach: Research deeply, design thoughtfully, and deliver
              excellence. We believe in the power of collaboration, continuous
              learning, and staying ahead of industry trends.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="my-20 grid grid-cols-2 items-center gap-4">
          <img
            alt=""
            className="h-150 w-full object-cover saturate-0"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png"
          />
          <img
            alt=""
            className="h-150 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png"
          />
        </div>

        {/* What drives us */}
        <div className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12">
          <p className="col-span-3 font-medium">What drives us</p>

          <div className="col-span-4 ml-auto max-w-4xl space-y-10 lg:pl-15">
            <h1 className="text-2xl font-medium tracking-tight">
              We are a team of creators, thinkers, and builders who believe in
              crafting experiences that truly connect. Our story is built on
              passion, innovation, and the drive to bring meaningful ideas to
              life.
            </h1>

            <p className="w-fit text-lg text-foreground/40 lg:translate-y-2">
              We ask: What's the goal? Who's it for? How do we make it effortless?
              <br className="hidden lg:block" />
              We begin with why, who, and how to make it better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
