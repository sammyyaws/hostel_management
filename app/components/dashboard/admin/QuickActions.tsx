import React from "react";
import {
  FaPlus,
  FaUsers,
  FaWallet,
  FaChartBar,
} from "react-icons/fa";

type Action = {
  title: string;
  description: string;
  icon?: React.ElementType;
};

type QuickActionsProps = {
  actions?: Action[];
};

const defaultActions: Action[] = [
  {
    title: "Add Room",
    description: "Create a new room listing",
    icon: FaPlus,
  },
  {
    title: "Manage Students",
    description: "Review applicants and residents",
    icon: FaUsers,
  },
  {
    title: "Payments",
    description: "Track invoices and collections",
    icon: FaWallet,
  },
  {
    title: "Reports",
    description: "Generate occupancy and revenue reports",
    icon: FaChartBar,
  },
];

export default function QuickActions({
  actions = defaultActions,
}: QuickActionsProps) {
  return (
    <section className="rounded-2xl bg-surface-container-lowest p-6 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-on-surface">
          Quick Actions
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="flex items-start gap-3 rounded-xl bg-surface p-4 text-left shadow-sm transition transform duration-200 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-surface-variant focus:outline-none focus:shadow-lg focus:scale-105 focus:ring-2 focus:ring-primary/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-lg text-primary">
                {Icon ? <Icon /> : "•"}
              </div>

              <div>
                <p className="font-semibold text-on-surface">
                  {action.title}
                </p>

                <p className="mt-1 text-sm text-on-surface-variant">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}