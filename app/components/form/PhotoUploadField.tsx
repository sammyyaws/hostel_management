
"use client";

import { useRef } from "react";
import { getIn, useFormikContext } from "formik";
import { FaImage } from "react-icons/fa";

type PhotoUploadFieldProps = {
  name: string;
  label: string;
  description: string;
  required?: boolean;
};

export default function PhotoUploadField({
  name,
  label,
  description,
  required = false,
}: PhotoUploadFieldProps) {
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();

  const photos = (getIn(values, name) as string[] | undefined) ?? [];
  const error = getIn(errors, name);
  const wasTouched = getIn(touched, name);

  function handleFiles(files: FileList | null) {
    if (!files) return;

    const selectedFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    const newPhotos = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setFieldValue(name, [...photos, ...newPhotos]);
    setFieldTouched(name, true, false);
  }

  function removePhoto(index: number) {
    const photoToRemove = photos[index];

    if (photoToRemove?.startsWith("blob:")) {
      URL.revokeObjectURL(photoToRemove);
    }

    setFieldValue(
      name,
      photos.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-on-surface">
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </label>

        <p className="mt-1 text-sm text-on-surface-variant">
          {description}
        </p>
      </div>

      {/* Hidden gallery input */}
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(event) => {
          handleFiles(event.currentTarget.files);
          event.currentTarget.value = "";
        }}
      />

      {/* Upload action */}
      <button
        type="button"
        onClick={() => galleryInputRef.current?.click()}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-outline-variant px-4 py-4 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
      >
        <FaImage className="text-xl" aria-hidden="true" />
        Choose from Gallery
      </button>

      {/* Photo previews */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo, index) => (
            <div key={`${photo}-${index}`} className="relative">
              <img
                src={photo}
                alt={`${label} ${index + 1}`}
                className="h-32 w-full rounded-xl object-cover"
              />

              <button
                type="button"
                onClick={() => removePhoto(index)}
                aria-label={`Remove ${label} ${index + 1}`}
                className="absolute right-2 top-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white hover:bg-black"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {photos.length > 0 && (
        <p className="text-xs text-on-surface-variant">
          {photos.length} photo{photos.length === 1 ? "" : "s"} selected
        </p>
      )}

      {wasTouched && typeof error === "string" && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}