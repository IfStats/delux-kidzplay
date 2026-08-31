"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { gallery, galleryCategories } from "@/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof galleryCategories)[number]>("All");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => {
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

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredGallery.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item.image)}
              className="group relative aspect-square overflow-hidden rounded-[24px] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Temporary image placeholder */}
              <div className="flex h-full items-center justify-center bg-[var(--delux-green-light)] p-5 text-center">
                <div>
                  <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-[var(--delux-green)]" />

                  <p className="text-sm font-black text-[var(--delux-blue)]">
                    Gallery Image
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <div>
                  <p className="text-sm font-black text-white">
                    {item.title}
                  </p>

                  <p className="text-xs text-white/80">
                    {item.category}
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--delux-blue)]">
                  <Maximize2 size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="mt-10 rounded-[30px] bg-white p-12 text-center">
            <p className="font-bold text-slate-600">
              No gallery images are available in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[400px] min-w-[300px] items-center justify-center rounded-xl bg-[var(--delux-green-light)] px-8 text-center">
              <div>
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[var(--delux-green)]" />

                <p className="font-black text-[var(--delux-blue)]">
                  Client Image
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  The selected project photograph will appear here.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}