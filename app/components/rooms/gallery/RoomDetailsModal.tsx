
"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import RoomCoverflow from "./RoomCoverflow";
import type {
  GalleryCategory,
  GallerySlide,
} from "./roomGallery.types";

interface RoomDetailsModalProps {
  open: boolean;
  roomName: string;
  price: number;
  slides: GallerySlide[];
  onClose: () => void;
  onBook: () => void;
}

const categories: GalleryCategory[] = [
  "Bedroom",
  "Kitchen",
  "Washroom",
  "Video Tour",
];

export default function RoomDetailsModal({
  open,
  roomName,
  price,
  slides,
  onClose,
  onBook,
}: RoomDetailsModalProps) {
  const [category, setCategory] =
    useState<GalleryCategory>("Bedroom");

  const [activeSlide, setActiveSlide] =
    useState<GallerySlide | null>(null);

  const [swiper, setSwiper] =
    useState<SwiperType | null>(null);

  const categorySlides = slides.filter(
    (slide) => slide.category === category
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    setActiveSlide(categorySlides[0] ?? null);
  }, [category, slides]);

  useEffect(() => {
    if (!open) {
      setSwiper(null);
      return;
    }

    setCategory("Bedroom");
    setSwiper(null);
  }, [open, roomName]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="room-modal-title"
        className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-white shadow-2xl"
      >
        {/* Header */}
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-teal-400">
              Room details
            </p>

            <h2
              id="room-modal-title"
              className="text-xl font-semibold"
            >
              {roomName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close room details"
            className="rounded-full px-3 py-2 text-2xl text-gray-300 hover:bg-white/10 hover:text-white"
          >
            &times;
          </button>
        </header>

        {/* Category tabs */}
        <nav
          aria-label="Room gallery categories"
          className="flex gap-2 overflow-x-auto px-5 pt-4"
        >
          {categories.map((item) => {
            const count = slides.filter(
              (slide) => slide.category === item
            ).length;

            return (
              <button
                key={item}
                type="button"
                disabled={count === 0}
                onClick={() => {
                  setCategory(item);
                  setSwiper(null);
                }}
                aria-pressed={category === item}
                className={`whitespace-nowrap rounded-xl px-4 items-center justify-center pb-1 text-sm transition ${
                  category === item
                    ? "bg-teal-500 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                } disabled:cursor-not-allowed disabled:opacity-30`}
              >
                {item}
                {count > 0 && (
                  <span className="ml-2 text-xs opacity-75">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Gallery */}
        <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4 sm:px-5">
          {categorySlides.length > 0 ? (
            <>
              <RoomCoverflow
                key={category}
                slides={categorySlides}
                onSwiper={setSwiper}
                onSlideChange={setActiveSlide}
              />

              {/* Active slide details */}
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs text-teal-400">
                  {activeSlide?.category ?? category}
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  {activeSlide?.title ??
                    (category === "Video Tour"
                      ? "Room video tour"
                      : "Room photo")}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {activeSlide?.description ?? ""}
                </p>
              </div>

              {/* Thumbnail strip */}
              <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                {categorySlides.map((slide, index) => {
                  const isActive =
                    activeSlide?.id === slide.id;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        swiper?.slideTo(index);
                        setActiveSlide(slide);
                      }}
                      aria-label={`View ${slide.title}`}
                      aria-pressed={isActive}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-28 ${
                        isActive
                          ? "border-teal-400 opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {slide.type === "video" ? (
                        <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-slate-800 text-teal-400">
                          <span aria-hidden="true">▶</span>
                          <span className="text-xs">
                            Video Tour
                          </span>
                        </span>
                      ) : (
                        <img
                          src={slide.src}
                          alt={slide.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex min-h-56 items-center justify-center text-center text-sm text-gray-400">
              {category === "Video Tour"
                ? "No room tour video available yet."
                : `No ${category.toLowerCase()} photos available yet.`}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-3 border-t border-white/10 bg-slate-900 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-gray-400">
              Room price
            </p>

            <p className="text-xl font-bold text-teal-400">
              GH₵ {price.toLocaleString()}
            </p>
          </div>

          <button
            type="button"
            onClick={onBook}
            className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
          >
            Book This Room
          </button>
        </footer>
      </section>
    </div>
  );
}
