import AllocationDetails from "@/components/dashboard/admin/allocations/AllocationDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <AllocationDetails allocationId={id} />;
}