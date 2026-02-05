import Link from 'next/link'

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    }
]

export default function Teams() {
    return (
        <section className="my-5 md:py-20">
            <div className="mx-auto px-6">
                <div className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12">
                  <div className="col-span-3 font-medium">
                    <div className='border border-foreground/20 bg-white w-fit px-2 py-0.5'>
                      <p>Our Teams</p>
                    </div>
                  </div>
                  <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
                    <h1 className="text-2xl font-medium tracking-tight">
                      A team of passionate creators, thinkers, and problem-solvers dedicated to crafting meaningful digital experiences.                     
                    </h1>
              
                    <p className="w-fit text-lg text-foreground/40 lg:translate-y-2">
                      We combine creativity, collaboration, and technical expertise to turn ideas into solutions that inspire, engage, and leave a lasting impact. Every project is a chance to innovate and push boundaries together.
                    </p>
                  </div>
                </div>
                {/* images */}
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                  className="w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                  src={member.avatar}
                                  alt="team member"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}