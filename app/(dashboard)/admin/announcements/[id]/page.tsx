import AnnouncementDetails from "@/components/dashboard/admin/announcements/AnnouncementDetails";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <AnnouncementDetails announcementId={id} />;
}