import AnnouncementsPage from "@/app/components/dashboard/admin/announcements/AnnouncementsPage";

export default function Page() {
  return (
    <AnnouncementsPage
      basePath="/porter/announcements"
      showStats={true}
      canCreate={true}
    />
  );
}