import { FaArrowRight, FaWallet } from "react-icons/fa";

interface PaymentData {
  amountPaid: number;
  totalAmount: number;
  outstandingAmount: number;
  status: "Paid" | "Pending Balance" | "Pending Verification";
}

interface PaymentStatusCardProps {
  payment: PaymentData;
  onMakePayment?: () => void;
}

export default function PaymentStatusCard({
  payment,
  onMakePayment,
}: PaymentStatusCardProps) {
  const progress =
    payment.totalAmount > 0
      ? (payment.amountPaid / payment.totalAmount) * 100
      : 0;

  return (
    <div className="md:col-span-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FaWallet className="text-[#fcab29]" />
              Payment Status
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Track your hostel fee payments for the academic year.
            </p>
          </div>

          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${
              payment.outstandingAmount > 0
                ? "bg-red-50 text-red-700 border-red-200"
                : "bg-green-50 text-green-700 border-green-200"
            }`}
          >
            {payment.status}
          </span>
        </div>

        {/* Payment Amounts */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-[#00535b]">
              Paid: GH₵{payment.amountPaid.toLocaleString()}
            </span>

            <span className="text-gray-500">
              Total: GH₵{payment.totalAmount.toLocaleString()}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00535b] rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />
          </div>

          <div className="flex justify-end mt-2">
            <span className="text-xs font-semibold text-red-600">
              Outstanding: GH₵
              {payment.outstandingAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onMakePayment}
          className="bg-[#fcab29] hover:bg-[#ffb957] text-[#694300] px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors"
        >
          Make Payment
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}