import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "School Playground Installation",
    location: "Accra, Ghana",
    category: "School Playground",
    image: "/images/projects/project-1.jpg",
    accent: "var(--delux-green)",
  },
  {
    title: "Children's Recreational Space",
    location: "Accra, Ghana",
    category: "Recreational Facility",
    image: "/images/projects/project-2.jpg",
    accent: "var(--delux-orange)",
  },
  {
    title: "Funfair & Entertainment Event",
    location: "Ghana",
    category: "Kids Entertainment",
    image: "/images/projects/project-3.jpg",
    accent: "var(--delux-red)",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="container-delux">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow">Our Work</span>

            <h2 className="text-4xl font-black leading-tight text-[var(--delux-blue)] sm:text-5xl">
              Bringing Ideas
              <span className="block text-[var(--delux-green)]">
                to Life.
              </span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Explore some of the playgrounds, recreational spaces and
              children's experiences created by Delux Kidzplay.
            </p>
          </div>

          <a
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[var(--delux-blue)] px-5 py-3 text-sm font-black text-[var(--delux-blue)] transition hover:bg-[var(--delux-blue)] hover:text-white"
          >
            View All Projects
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[30px] bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--delux-green-light)]">
                <div className="flex h-full items-center justify-center px-6 text-center">
                  <div>
                    <div
                      className="mx-auto mb-4 h-16 w-16 rounded-full"
                      style={{ background: project.accent }}
                    />

                    <p className="font-bold text-[var(--delux-blue)]">
                      Project Photograph
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Real Delux Kidzplay image coming soon
                    </p>
                  </div>
                </div>

                {/* Category */}
                <span
                  className="absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-black text-white shadow"
                  style={{ background: project.accent }}
                >
                  {project.category}
                </span>

                {/* Hover button */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-[var(--delux-blue)] opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-black text-[var(--delux-blue)]">
                  {project.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <div
                  className="mt-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ background: project.accent }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}