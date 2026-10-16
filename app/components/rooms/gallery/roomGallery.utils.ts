
import type { Room } from "@/features/rooms/roomsSlice";
import type {
  GalleryCategory,
  GallerySlide,
} from "./roomGallery.types";

export function buildRoomGallery(room: Room): GallerySlide[] {
  const slides: GallerySlide[] = [];

  const addPhotos = (
    photos: string[],
    category: Exclude<GalleryCategory, "Video Tour">
  ) => {
    photos.forEach((src, index) => {
      if (!src) return;

      slides.push({
        id: `${category.toLowerCase()}-${room.id}-${index}`,
        src,
        type: "image",
        category,
        title: `${room.room} ${category.toLowerCase()} photo ${index + 1}`,
        description: `${category} photo of ${room.room}`,
      });
    });
  };

  addPhotos(room.bedroomPhotos ?? [], "Bedroom");
  addPhotos(room.kitchenPhotos ?? [], "Kitchen");
  addPhotos(room.washroomPhotos ?? [], "Washroom");

  if (room.roomVideo) {
    slides.push({
      id: `video-${room.id}`,
      src: room.roomVideo,
      type: "video",
      category: "Video Tour",
      title: `${room.room} Video Tour`,
      description: `Take a virtual tour of ${room.room}`,
    });
  }

  return slides;
}
