
export type GalleryCategory =
  | "Bedroom"
  | "Kitchen"
  | "Washroom"
  | "Video Tour";

export type GallerySlide = {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  description?: string;
  type: "image" | "video";
};
