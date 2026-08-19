const experiences = [
  {
    dates: "Jul 2026 – Present",
    company: "Choate Wealth",
    role: "Data Analytics Co-op",
    location: "Boston, MA",
    description:
      "Description",
    skills: ["Python", "SQL", "Excel", "Analytics"],
    status: "Current",
  },
  {
    dates: "Jul 2025 – Dec 2025",
    company: "Ropes & Gray LLP",
    role: "Data Governance Analyst",
    location: "Boston, MA",
    description:
      "Built a firm-wide Data Governance Library with 500+ standardized terms and created dashboards and reports using SQL, Python, and MicroStrategy.",
    skills: ["SQL", "Python", "MicroStrategy", "Data Governance", "Microsoft Excel"],
  },
  {
    dates: "Sep 2024 – May 2026",
    company: "Scout",
    role: "Senior Strategist & Designer",
    location: "Boston, MA",
    description:
      "Created data visualizations and community asset maps in ArcGIS while partnering with healthcare organizations to assess needs and improve community impact.",
    skills: ["ArcGIS", "Strategy", "Data Visualization", "Healthcare Management"],
  },
    {
    dates: "Sep 2024 – May 2025",
    company: "Khoury College of Computer Sciences",
    role: "Teaching Assistant for First Year Seminar (CS 1200)",
    location: "Boston, MA",
    description:
      "Delivered technical mentorship to first-year computer science students through structured discussion facilitation, individualized guidance, and resource navigation, fostering collaborative problem-solving and successful academic transition.",
    skills: ["Communication", "Technical Mentorship & Coaching", "Problem Solving", "Cross-functional Collaboration"],
  },
]

const leadership = [
  {
    title: "Northeastern Women in Tech",
    role: "President",
    description:
      "Leading a community of 735+ members, building industry partnerships, and creating professional development opportunities.",
  },
  {
    title: "Healthcare Management & Consulting Club",
    role: "President",
    description:
      "Leading programming and strategy for a 260+ member student organization focused on healthcare and consulting.",
  },
  {
    title: "John Martinson Honors Program",
    role: "Honors Ambassador",
    description:
      "Representing Northeastern's honors community through panels, mentoring, campus programs, and student outreach.",
  },
]

const certifications = [
  
]

const skills = [
  "Python",
  "SQL",
  "Excel",
  "MicroStrategy",
  "ArcGIS",
  "Machine Learning",
  "Data Governance",
  "Data Visualization",
  "Product Strategy",
  "Healthcare Analytics",
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#fafafa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-serif text-2xl font-bold text-blue-600">
            cathreen paul
          </a>

          <nav className="hidden gap-7 text-sm text-zinc-600 md:flex">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#leadership" className="hover:text-blue-600">Leadership</a>
            <a href="#certifications" className="hover:text-blue-600">Certifications</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
          </nav>

          <a
            href="mailto:paulcathreen@gmail.com"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      </header>

      <div
        id="top"
        className="mx-auto grid max-w-[1500px] lg:grid-cols-[360px_minmax(0,1fr)]"
      >
        <aside className="border-b border-zinc-200 bg-gradient-to-b from-white to-blue-100/70 px-6 py-14 lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] lg:border-r lg:border-b-0 lg:px-10">
          <div className="flex h-full flex-col">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                DATA · STRATEGY · TECHNOLOGY
              </div>

              <h1 className="mt-10 font-serif text-6xl leading-none tracking-tight">
                Cathreen
                <br />
                <span className="text-blue-600">Paul</span>
              </h1>

              <p className="mt-6 max-w-sm leading-7 text-zinc-600">
                Data Science and Business Administration student building
                thoughtful solutions across analytics, financial services,
                healthcare, and technology.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#experience"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
                >
                  View my work →
                </a>

                <a
                  href="put resume"
                  download
                  className="rounded-xl border border-blue-300 px-5 py-3 text-center font-medium text-blue-700 transition hover:bg-blue-50"
                >
                  Download resume ↓
                </a>
              </div>
            </div>

            <div className="mt-12 space-y-4 text-sm text-zinc-600 lg:mt-auto">
              <p>📍 Boston, MA</p>
              <a
                href="mailto:paulcathreen@gmail.com"
                className="block hover:text-blue-600"
              >
                ✉ paulcathreen@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/cathreenpaul"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-blue-600"
              >
                in linkedin.com/in/cathreenpaul
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 px-6 py-14 md:px-10 lg:px-14">
          <section id="about" className="scroll-mt-28">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
       
            </p>

            <div className="mt-4 grid gap-8 xl:grid-cols-2 xl:items-end">
              <h2 className="font-serif text-5xl leading-tight tracking-tight">
      
                <br />
             
                <br />
                <span className="text-blue-600"> </span>
              </h2>

              <p className="leading-7 text-zinc-600">
              
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["2", "Professional co-ops"],
                ["5", "Clubs & Organizations"],
                ["735+", "Community members led"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <p className="text-3xl font-bold text-blue-600">{value}</p>
                  <p className="mt-2 text-sm text-zinc-600">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="scroll-mt-28 pt-24">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              EXPERIENCE
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight">
              Work that builds
              <br />
              <span className="text-blue-600">perspective.</span>
            </h2>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[7px] top-0 w-px bg-blue-200 sm:left-[150px]" />

              <div className="space-y-8">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.company}-${experience.role}`}
                    className="relative grid gap-5 sm:grid-cols-[120px_1fr] sm:gap-10"
                  >
                    <div className="pl-8 text-sm font-medium leading-6 text-blue-600 sm:pl-0">
                      {experience.dates}
                    </div>

                    <div className="absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-100 sm:left-[143px]" />

                    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {experience.role}
                        </h3>

                        {experience.status && (
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            {experience.status}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 font-medium text-zinc-700">
                        {experience.company} · {experience.location}
                      </p>

                      <p className="mt-5 leading-7 text-zinc-600">
                        {experience.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-28 pt-24">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              SELECTED PROJECTS
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight">
              Things I have
              <br />
              <span className="text-blue-600">built and explored.</span>
            </h2>
          </section>
          // insert projects //

          <section id="leadership" className="scroll-mt-28 pt-24">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              LEADERSHIP
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight">
              Building communities
              <br />
              <span className="text-blue-600">with purpose.</span>
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {leadership.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    ✦
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 font-medium text-blue-600">{item.role}</p>
                  <p className="mt-4 leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

          </section>

          <section id="certifications" className="scroll-mt-28 pt-24">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              CERTIFICATIONS
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight">
              Continuous learning
              <br />
              <span className="text-blue-600">drives impact.</span>
            </h2>
            </section>
            // insert certifications //

          <section id="skills" className="scroll-mt-28 pt-24">
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-8">
              <h2 className="font-serif text-4xl">Skills & tools</h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                Technical, analytical, strategic, and communication skills
                developed through professional experience, coursework, and
                leadership.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-24">
            <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-12">
              <p className="text-sm font-semibold tracking-widest text-blue-200">
                LET&apos;S CONNECT
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                I&apos;m always open to learning, collaborating, and creating
                meaningful impact.
              </h2>

              <a
                href="mailto:paulcathreen@gmail.com"
                className="mt-8 inline-block rounded-xl bg-white px-5 py-3 font-medium text-blue-700 transition hover:bg-blue-50"
              >
                Send me an email →
              </a>
            </div>
          </section>

          <footer className="mt-20 flex flex-col gap-2 border-t border-zinc-200 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
            <p>© 2026 Cathreen Paul</p>
          </footer>
        </div>
      </div>
    </main>
  )
}