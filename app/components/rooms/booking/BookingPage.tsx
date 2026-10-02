"use client";

import { useState } from "react";

import BookingHeader from "./BookingHeader";
import RoomDetailsCard from "./RoomDetailsCard";
import BedSelection from "./BedSelection";
import AllocationGuidelines from "./AllocationGuidelines";
import BookingSummary from "./BookingSummary";

import type { Bed } from "./BedCard";

interface BookingPageProps {
  room: {
    roomNumber: string;
    roomType: string;
    image: string;
    location: string;
    price: string;
    period: string;
    capacity: number;
    academicYear: string;
    residenceType: string;
    availableBeds: number;
    inspectionMessage: string;
  };

  amenities: {
    id: string;
    name: string;
    icon?: React.ReactNode;
  }[];

  beds: Bed[];
}

export default function BookingPage({
  room,
  amenities,
  beds,
}: BookingPageProps) {
  const [selectedBedId, setSelectedBedId] =
    useState<string | null>(null);

  const selectedBed =
    beds.find((bed) => bed.id === selectedBedId) ?? null;

  const handleSelectBed = (bed: Bed) => {
    if (bed.status === "reserved") return;

    setSelectedBedId(
      bed.id === selectedBedId ? null : bed.id
    );
  };

  const handleContinue = () => {
    if (!selectedBed) return;

    // Later:
    // open account/booking form
    // or navigate to the next booking step.
    console.log("Selected bed:", selectedBed);
  };

  const handleChooseDifferentRoom = () => {
    window.location.href = "/rooms";
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <BookingHeader
        academicYear={room.academicYear}
        residenceType={room.residenceType}
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          <RoomDetailsCard
            image={room.image}
            roomType={room.roomType}
            roomNumber={room.roomNumber}
            location={room.location}
            price={room.price}
            period={room.period}
            amenities={amenities}
            inspectionMessage={room.inspectionMessage}
            availableBeds={room.availableBeds}
          />

          <BedSelection
            beds={beds}
            selectedBedId={selectedBedId}
            onSelectBed={handleSelectBed}
            capacity={room.capacity}
            roomNumber={room.roomNumber}
          />

          <AllocationGuidelines
            message="Bed allocations are locked to verified students for the academic period. Changing an allocated space after check-in requires residential warden approval and administrative processing."
          />
        </div>

        {/* RIGHT */}
        <aside className="lg:sticky lg:top-24 lg:col-span-4">
          <BookingSummary
            room={`Block A • Room ${room.roomNumber}`}
            bed={
              selectedBed
                ? `${selectedBed.name} (${selectedBed.position})`
                : null
            }
            occupancy={`${room.capacity}-in-1 Shared`}
            duration="1 Academic Year"
            accommodationFee={room.price}
            cautionDeposit="GH₵ 150"
            utilities="Included"
            total={room.price}
            onContinue={handleContinue}
            onChooseDifferentRoom={
              handleChooseDifferentRoom
            }
            disabled={!selectedBed}
          />
        </aside>
      </div>
    </main>
  );
}