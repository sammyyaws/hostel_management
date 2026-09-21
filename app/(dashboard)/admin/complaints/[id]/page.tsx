import ComplaintDetails from "@/components/dashboard/admin/complaints/ComplaintDetails";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <ComplaintDetails complaintId={id} />;
}