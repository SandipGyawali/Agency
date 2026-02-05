"use client";
import Container from "./Container";

function Contact() {
  return (
    <section className="py-32 bg-black m-1 sm:m-4">
      <Container className="container">
        <span className="text-white text-xs">GET STARTED /</span>
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:grid-rows-[min-content_1fr]">
          <h2 className="text-white font-semibold order-1 text-5xl tracking-tight md:order-none md:text-6xl">
            Get in touch
          </h2>
          <div className="order-2 md:order-none md:row-span-2">
            <div className="bg-muted border-border rounded-lg border p-6">
              <form className="grid gap-6 sm:grid-cols-2">
                <div data-slot="form-item" className="grid gap-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    First Name
                  </label>
                  <input
                    onChange={() => {}}
                    data-slot="form-control"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    placeholder="Alex"
                    id="«Rqifetb»-form-item"
                    aria-describedby="«Rqifetb»-form-item-description"
                    aria-invalid="false"
                    name="firstName"
                    value=""
                  />
                </div>
                <div data-slot="form-item" className="grid gap-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={() => {}}
                    data-slot="form-control"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    placeholder="Smith"
                    id="«R1aifetb»-form-item"
                    aria-describedby="«R1aifetb»-form-item-description"
                    aria-invalid="false"
                    name="lastName"
                    value=""
                  />
                </div>
                <div data-slot="form-item" className="grid gap-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    Email
                  </label>
                  <input
                    onChange={() => {}}
                    data-slot="form-control"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    placeholder="alex.smith@example.com"
                    id="«R1qifetb»-form-item"
                    aria-describedby="«R1qifetb»-form-item-description"
                    aria-invalid="false"
                    name="email"
                    value=""
                  />
                </div>
                <div data-slot="form-item" className="grid gap-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    Project Budget
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-«R1aaifetb»"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    data-slot="form-control"
                    data-size="default"
                    className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-full"
                    id="«R2aifetb»-form-item"
                    aria-describedby="«R2aifetb»-form-item-description"
                    aria-invalid="false"
                  >
                    <span data-slot="select-value">Select budget range</span>
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
                      className="lucide lucide-chevron-down size-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <select
                    aria-hidden="true"
                    tabIndex={-1}
                    // style={"position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
                  >
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-30k">$15K - $30K</option>
                    <option value="30k-50k">$30K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k+">$250K+</option>
                  </select>
                </div>
                <div data-slot="form-item" className="grid gap-2 sm:col-span-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    Message
                  </label>
                  <textarea
                    data-slot="form-control"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    name="message"
                    placeholder="Tell us about your project..."
                    id="«R2qifetb»-form-item"
                    aria-describedby="«R2qifetb»-form-item-description"
                    aria-invalid="false"
                  ></textarea>
                </div>
                <div data-slot="form-item" className="grid gap-2 sm:col-span-2">
                  <label
                    data-slot="form-label"
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                    data-error="false"
                  >
                    How did you find us?
                  </label>
                  <input
                    data-slot="form-control"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    placeholder="Google / Referral"
                    id="«R3aifetb»-form-item"
                    aria-describedby="«R3aifetb»-form-item-description"
                    aria-invalid="false"
                    name="referrer"
                    value=""
                  />
                </div>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-black text-white shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 sm:col-span-2"
                  type="submit"
                >
                  Submit
                </button>
                <p className="text-muted-foreground text-xs sm:col-span-2">
                  You acknowledge that you've reviewed and agreed to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="order-3 my-6 md:order-none">
            <ul className="text-muted space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="bg-background flex size-6 shrink-0 items-center justify-center rounded-full">
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
                    className="lucide lucide-check size-4"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                Share your project goals and requirements
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-background flex size-6 shrink-0 items-center justify-center rounded-full">
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
                    className="lucide lucide-check size-4"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                Receive a tailored proposal
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-background flex size-6 shrink-0 items-center justify-center rounded-full">
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
                    className="lucide lucide-check size-4"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                Schedule a strategy consultation
              </li>
            </ul>
            <p className="my-6 text-muted font-bold">
              Trusted by +3000 businesses worldwide
            </p>
            <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
              <img
                src="https://library.shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://library.shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:gap-12 lg:w-1/2 lg:grid-cols-2">
          <div>
            <h3 className="mb-1.5 font-bold text-white">FAQ</h3>
            <p className="text-muted text-sm">
              Browse our collection of{" "}
              <a
                href="#"
                className="text-white underline hover:underline font-semibold"
              >
                Frequently Asked Questions
              </a>{" "}
              about our process and project delivery.
            </p>
          </div>
          <div>
            <h3 className="mb-1.5 font-bold text-white">Resources</h3>
            <p className="text-muted text-sm">
              Access our library and connect with designers in our{" "}
              <a
                href="#"
                className="text-white underline hover:underline font-semibold"
              >
                resource center
              </a>{" "}
              filled with whitepapers and tutorials.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
