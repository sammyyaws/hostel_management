import PaymentStats from "./PaymentStats";
import PaymentFilters from "./PaymentFilters";
import PaymentTable from "./PaymentTable";

export default function PaymentsPage() {
  return (
    <section className="overflow-hidden  bg-surface-container-lowest shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-outline-variant p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">Payments</h1>

          <p className="mt-1 text-sm text-on-surface-variant">
            Review payment submissions and manage resident payments.
          </p>
        </div>

        <button className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-container">
          Export Payments
        </button>
      </div>

      {/* Stats */}
      <div className="p-5 ">
        <PaymentStats />
      </div>

      {/* Filters (no border) */}
      <div className="p-5">
        <PaymentFilters />
      </div>

      {/* Table */}
      <div className="p-5">
        <PaymentTable />
      </div>

    </section>
  );
}