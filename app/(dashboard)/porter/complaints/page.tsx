import ComplaintsPage from "@/app/components/dashboard/admin/complaints/ComplaintsPage";

export default function Page() {
  return (
    <ComplaintsPage
      basePath="/porter/complaints"
      showStats={false}
    />
  );
}