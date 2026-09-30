import AccommodationOverview, {
  AccommodationData,
} from "@/components/dashboard/student/accommodation/AccommodationOverview";

export default function StudentAccommodationPage() {
  // Temporary mock data.
  // This will later come from the authenticated student's API.
  const accommodation: AccommodationData = {
    status: "Active",
    hostel: "TYB Hostel",
    block: "Block A",
    room: "A102",
    bed: "Bed 3",
    roomType: "4-in-1",
    academicYear: "2026/27",
    allocationDate: "September 12, 2026",
    roommates: [
      {
        id: 1,
        name: "John Mensah",
        bed: "Bed 1",
      },
      {
        id: 2,
        name: "Daniel Owusu",
        bed: "Bed 2",
      },
      {
        id: 3,
        name: "Michael Asare",
        bed: "Bed 4",
      },
    ],
  };

  return <AccommodationOverview accommodation={accommodation} />;
}