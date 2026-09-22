import StaffManagement from "./StaffManagement";

export default function SettingsPage() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your hostel settings and staff access.
        </p>
      </div>

      <StaffManagement />
    </div>
  );
}