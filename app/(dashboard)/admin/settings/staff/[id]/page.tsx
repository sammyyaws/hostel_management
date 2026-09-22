import StaffDetails from "@/components/dashboard/admin/settings/StaffDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <StaffDetails staffId={id} />;
}