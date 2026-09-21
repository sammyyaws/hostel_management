import {
  FaMoneyBillWave,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Revenue",
    value: "GH₵ 485,000",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Pending Review",
    value: "18",
    icon: <FaClock />,
  },
  {
    title: "Confirmed",
    value: "324",
    icon: <FaCheckCircle />,
  },
  {
    title: "Rejected",
    value: "6",
    icon: <FaTimesCircle />,
  },
];

export default function PaymentStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-gray-200 bg-surface-container-lowest p-5 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              {stat.title}
            </p>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              {stat.icon}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}