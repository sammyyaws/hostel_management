
"use client";

import { useRef } from "react";
import { useFormikContext } from "formik";
import { FaVideo, FaTrash } from "react-icons/fa";

type VideoFormValues = {
  roomVideo: string | null;
};

type VideoUploadFieldProps = {
  name?: "roomVideo";
  label?: string;
  description?: string;
};

export default function VideoUploadField({
  name = "roomVideo",
  label = "Room Tour Video",
  description = "Optionally upload a short video showing the room.",
}: VideoUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { values, setFieldValue } =
    useFormikContext<VideoFormValues>();

  const video = values[name];

  function handleVideoChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.currentTarget.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Please select a valid video file.");
      event.currentTarget.value = "";
      return;
    }

    // Release the previous temporary preview URL when replacing it.
    if (video?.startsWith("blob:")) {
      URL.revokeObjectURL(video);
    }

    const previewUrl = URL.createObjectURL(file);
    void setFieldValue(name, previewUrl);

    // Allow selecting the same file again later.
    event.currentTarget.value = "";
  }

  function removeVideo() {
    if (video?.startsWith("blob:")) {
      URL.revokeObjectURL(video);
    }

    void setFieldValue(name, null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-on-surface">
          {label}
          <span className="ml-2 text-xs font-normal text-on-surface-variant">
            (Optional)
          </span>
        </label>

        <p className="mt-1 text-sm text-on-surface-variant">
          {description}
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleVideoChange}
      />

      {!video ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-outline-variant px-4 py-5 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
        >
          <FaVideo className="text-xl" aria-hidden="true" />
          Choose Room Video
        </button>
      ) : (
        <div className="space-y-3 rounded-xl border border-outline-variant p-3">
          <video
            key={video}
            src={video}
            controls
            playsInline
            preload="metadata"
            className="max-h-80 w-full rounded-lg bg-black"
          >
            Your browser does not support video playback.
          </video>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface hover:bg-surface-container"
            >
              Replace Video
            </button>

            <button
              type="button"
              onClick={removeVideo}
              className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <FaTrash aria-hidden="true" />
              Remove Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
