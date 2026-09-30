import { FaBed, FaCalendarAlt } from "react-icons/fa";

interface AccommodationData {
  room: string;
  bed: string;
  status: "Active" | "Pending" | "Inactive";
  academicYear: string;
}

interface AccommodationCardProps {
  accommodation: AccommodationData;
}

export default function AccommodationCard({
  accommodation,
}: AccommodationCardProps) {
  return (
    <div className="md:col-span-4 flex flex-col gap-4">
      {/* Room Assignment */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#006d77] text-white flex items-center justify-center">
            <FaBed />
          </div>

          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
              accommodation.status === "Active"
                ? "bg-green-50 text-green-700 border-green-200"
                : accommodation.status === "Pending"
                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {accommodation.status}
          </span>
        </div>

        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
          Room Assignment
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          {accommodation.room}, {accommodation.bed}
        </h2>
      </div>

      {/* Academic Period */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center">
          <FaCalendarAlt />
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
            Period
          </p>

          <h3 className="text-lg font-semibold text-gray-900">
            {accommodation.academicYear}
          </h3>
        </div>
      </div>
    </div>
  );
}