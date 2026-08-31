"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-black transition ${
                  active
                    ? "bg-[var(--delux-green)] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-[var(--delux-green-light)] hover:text-[var(--delux-green-dark)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[30px] bg-white p-12 text-center">
            <p className="font-bold text-slate-600">
              No projects are available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}