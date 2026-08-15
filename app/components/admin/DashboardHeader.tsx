type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
};

export default function DashboardHeader({
  title,
  subtitle,
  actions,
}: DashboardHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
          Overview
        </p>
        <h2 className="mt-1 text-2xl font-bold text-on-surface md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-on-surface-variant">{subtitle}</p>}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
