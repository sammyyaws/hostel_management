import PaymentDetails from "@/components/dashboard/admin/payments/PaymentDetails";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <PaymentDetails paymentId={id} />;
}