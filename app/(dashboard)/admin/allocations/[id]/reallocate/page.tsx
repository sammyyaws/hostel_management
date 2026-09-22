import ReallocateBed from "@/components/dashboard/admin/allocations/ReallocateBed";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <ReallocateBed allocationId={id} />;
}