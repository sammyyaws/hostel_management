"use client";

import AccommodationCard from "./AccommodationCard";
import PaymentStatusCard from "./PaymentStatusCard";
import RecentAnnouncements, {
  Announcement,
} from "./RecentAnnouncements";

interface StudentDashboardProps {
  studentName?: string;
}

export default function StudentDashboard({
  studentName = "Samuel",
}: StudentDashboardProps) {
  /*
   * Temporary mock data.
   *
   * Later this will come from the authenticated student's API response.
   */
  const accommodation = {
    room: "A102",
    bed: "Bed 3",
    status: "Active" as const,
    academicYear: "2026/27 Academic Year",
  };

  const payment = {
    amountPaid: 2000,
    totalAmount: 3000,
    outstandingAmount: 1000,
    status: "Pending Balance" as const,
  };

  const announcements: Announcement[] = [
    {
      id: 1,
      date: "Sept 10, 2026",
      title: "Hostel reopens Sept 15",
      description:
        "Please ensure all initial payments are cleared before check-in. Key collection begins at 8:00 AM at the main reception.",
    },
    {
      id: 2,
      date: "Sept 08, 2026",
      title: "Water maintenance on Friday",
      description:
        "There will be an interruption in water supply across block A from 10:00 AM to 2:00 PM for routine pump maintenance.",
    },
  ];

  const handleMakePayment = () => {
    console.log("Navigate to payment page");
  };

  const handleViewAnnouncements = () => {
    console.log("Navigate to announcements");
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Greeting */}
      <header className="mb-8 mt-2 md:mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#191c1d]">
          Good morning, {studentName} 👋
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2">
          Here is a quick overview of your stay at TYB Hostel.
        </p>
      </header>

      {/* Accommodation + Payment */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        <AccommodationCard accommodation={accommodation} />

        <PaymentStatusCard
          payment={payment}
          onMakePayment={handleMakePayment}
        />
      </div>

      {/* Announcements */}
      <RecentAnnouncements
        announcements={announcements}
        onViewAll={handleViewAnnouncements}
      />
    </div>
  );
}