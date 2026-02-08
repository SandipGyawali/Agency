const logos = [
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/white' },
  { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/white' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Bun', url: 'https://cdn.simpleicons.org/bun/white' },
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/white' },
  { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/white' },
  { name: 'Claude', url: 'https://cdn.simpleicons.org/anthropic/white' },
  { name: 'Django', url: 'https://cdn.simpleicons.org/django/white' },
  { name: 'Javascript', url: 'https://cdn.simpleicons.org/javascript/white' },
  { name: 'FastAPI', url: 'https://cdn.simpleicons.org/fastapi/white' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/white' },
  { name: 'MongoDB', url: 'https://cdn.simpleicons.org/mongodb/white' },
  { name: 'GitHub Actions', url: 'https://cdn.simpleicons.org/githubactions/white' },
  { name: 'Git', url: 'https://cdn.simpleicons.org/git/white' },
  { name: 'Nginx', url: 'https://cdn.simpleicons.org/nginx/white' },
  { name: 'Typescript', url: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Linux', url: 'https://cdn.simpleicons.org/linux/white' },
]


const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-20">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="relative mt-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="flex w-max gap-20 animate-logo-cloud">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                className="h-10 w-28 px-2 opacity-30 brightness-0 dark:invert"
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default AnimatedLogoCloud