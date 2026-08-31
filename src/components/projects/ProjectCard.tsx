import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <a href={`/projects/${project.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--delux-green-light)]">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <div>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[var(--delux-green)]" />

              <p className="font-bold text-[var(--delux-blue)]">
                Project Photograph
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Client project image
              </p>
            </div>
          </div>

          <span className="absolute left-5 top-5 rounded-full bg-[var(--delux-green)] px-4 py-2 text-xs font-black text-white shadow">
            {project.category}
          </span>

          <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-[var(--delux-blue)] opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={19} />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-black text-[var(--delux-blue)]">
            {project.title}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} />
            {project.location}
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-black text-[var(--delux-green-dark)]">
            View Project
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </a>
    </article>
  );
}