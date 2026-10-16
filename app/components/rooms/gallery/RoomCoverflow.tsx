
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Keyboard,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import type { GallerySlide } from "./roomGallery.types";

interface RoomCoverflowProps {
  slides: GallerySlide[];
  onSlideChange?: (slide: GallerySlide) => void;
  onSwiper?: (swiper: SwiperType) => void;
}

export default function RoomCoverflow({
  slides,
  onSlideChange,
  onSwiper,
}: RoomCoverflowProps) {
  return (
    <div className="room-coverflow-container">
      <Swiper
        modules={[EffectCoverflow, Navigation, Keyboard]}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        initialSlide={0}
        loop={false}
        grabCursor
        navigation
        keyboard={{ enabled: true }}
        watchSlidesProgress
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 250,
          modifier: 1.2,
          slideShadows: true,
        }}
        onSwiper={onSwiper}
        onSlideChange={(swiper) => {
          const slide = slides[swiper.activeIndex];
          if (slide) onSlideChange?.(slide);
        }}
        className="room-coverflow"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="room-coverflow-slide"
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                controls
                playsInline
                preload="metadata"
                aria-label={slide.title}
                draggable={false}
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.title}
                draggable={false}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
