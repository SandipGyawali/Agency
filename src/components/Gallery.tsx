function Gallery() {
  return (
    <section className="relative h-full w-screen overflow-hidden py-32 md:h-screen">
      <div className="container relative flex h-full w-full flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center gap-5">
          <h1 className="max-w-xl text-center text-4xl font-medium uppercase tracking-tighter lg:text-6xl">
            exclusive shadcnblocks
          </h1>
          <p className="text-muted-foreground/70 max-w-md text-center text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <div className="mt-30 flex items-center justify-center border">
          <div
            className="hidden md:block z-1 right-3/5 -bottom-1/6 md:absolute md:h-48 md:w-60"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="md:w-38 size-47 -rotate-7 md:rotate-0 z-1 md:left-1/5 md:h-45 absolute md:-top-10"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="hidden md:block size-40 z-1 md:-top-42 md:h-42 absolute md:-right-10 md:w-60"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="md:w-55 hidden md:block z-1 top-1/5 md:h-65 md:absolute -right-10 lg:right-28"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="md:w-50 size-47 rotate-7 md:rotate-0 z-1 absolute md:-left-10 md:bottom-1/4 lg:left-0 md:h-72"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="md:w-50 size-45 z-1 md:right-2/5 absolute md:-top-40 md:h-52"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="md:w-50 hidden md:block z-1 md:h-78 md:absolute -bottom-5 -right-40"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
          <div
            className="hidden md:block z-1 right-1/5 md:absolute -bottom-1/4 md:h-48 md:w-60"
            draggable="false"
          >
            <img
              alt=""
              className="pointer-events-none h-full w-full cursor-grab object-cover shadow-lg active:cursor-grabbing"
              src="https://library.shadcnblocks.com/images/block/guri3/img6.jpeg"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1920 1081"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-356.326"
            y="-222.305"
            width="1041.41"
            height="1041.41"
            rx="520.707"
            stroke="#D9D9D9"
          ></rect>
          <rect
            x="1362.49"
            y="391.957"
            width="1041.41"
            height="1041.41"
            rx="520.707"
            stroke="#D9D9D9"
          ></rect>
        </svg>
      </div>
    </section>
  );
}

export default Gallery;
