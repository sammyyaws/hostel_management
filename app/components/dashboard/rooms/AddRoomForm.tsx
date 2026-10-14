
"use client";

import * as Yup from "yup";
import { useFormikContext, getIn } from "formik";
import PhotoUploadField from "@/app/components/form/PhotoUploadField";
import FormikForm from "@/app/components/form/FormikForm";
import FormInput from "@/app/components/form/FormInput";
import FormCheckbox from "@/app/components/form/FormCheckbox";

export type AddRoomFormValues = {
  roomName: string;
  block: string;
  floor: string;
  roomType: string;
  price: number;
  capacity: number;
  bedroomPhotos: string[];
  kitchenPhotos: string[];
  washroomPhotos: string[];
  published: boolean;
};

type AddRoomFormProps = {
  onSubmit: (values: AddRoomFormValues) => void | Promise<void>;
};

const initialValues: AddRoomFormValues = {
  roomName: "",
  block: "",
  floor: "",
  roomType: "",
  price: 0,
  capacity: 1,
  bedroomPhotos: [],
  kitchenPhotos: [],
  washroomPhotos: [],
  published: true,
};

const validationSchema = Yup.object({
  roomName: Yup.string().trim().required("Room name is required"),
  block: Yup.string().trim().required("Block is required"),
  floor: Yup.string().trim().required("Floor is required"),
  roomType: Yup.string().trim().required("Room type is required"),
  price: Yup.number()
    .typeError("Enter a valid price")
    .min(0, "Price cannot be negative")
    .required("Price is required"),
  capacity: Yup.number()
    .typeError("Enter the number of beds")
    .integer("Capacity must be a whole number")
    .min(1, "A room must have at least one bed")
    .required("Bed capacity is required"),
  bedroomPhotos: Yup.array()
    .of(Yup.string().required())
    .min(1, "Upload at least one bedroom photo"),
  kitchenPhotos: Yup.array().of(Yup.string().required()),
  washroomPhotos: Yup.array().of(Yup.string().required()),
  published: Yup.boolean().required(),
});



export default function AddRoomForm({ onSubmit }: AddRoomFormProps) {
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await onSubmit(values);
        console.log(values);
      }}
    >
      <div className="space-y-8">
        {/* Room details */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-on-surface">
              Room Details
            </h2>
            <p className="text-sm text-on-surface-variant">
              Enter the actual room information.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormInput placeholder="eg. A1  " name="roomName" label="Room Name / Number" />
            <FormInput placeholder="eg. Anex or Enter 1 if there are no seperate blocks"name="block" label="Block" />
            <FormInput placeholder="eg. first/second/third"  name="floor" label="Floor" />
            <FormInput placeholder="eg. 1 or 2 in 1  " name="roomType" label="Room Type" />
            <FormInput
              name="price"
              label="Price per bed (GH₵)"
              type="number"
            />
            <FormInput
              name="capacity"
              label="Number of Beds"
              type="number"
            />
          </div>
        </section>

        {/* Room photos */}
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold text-on-surface">
              Room Photos
            </h2>
            <p className="text-sm text-on-surface-variant">
              Add photos that students can view before booking.
            </p>
          </div>

          <PhotoUploadField
            name="bedroomPhotos"
            label="Bedroom Photos"
            description="At least one photo is required."
          />

          <PhotoUploadField
            name="kitchenPhotos"
            label="Kitchen Photos"
            description="Upload photos of the kitchen available to residents."
          />

          <PhotoUploadField
            name="washroomPhotos"
            label="Washroom Photos"
            description="Upload photos of the washroom facilities."
          />
        </section>

        {/* Visibility */}
        <section className="rounded-xl border border-outline-variant p-4">
          <FormCheckbox
            name="published"
            label="Publish this room on the student portal"
          />
          <p className="mt-1 text-sm text-on-surface-variant">
            Unpublished rooms should remain hidden from students.
          </p>
        </section>

        <div className="flex flex-col-reverse gap-3 border-t border-outline-variant pt-5 sm:flex-row sm:justify-end">
          <button
            type="reset"
            className="rounded-xl border border-outline-variant px-5 py-3 text-sm font-medium text-on-surface hover:bg-surface-container"
          >
            Reset Form
          </button>

          <button
            type="submit"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Save Room
          </button>
        </div>
      </div>
    </FormikForm>
  );
}