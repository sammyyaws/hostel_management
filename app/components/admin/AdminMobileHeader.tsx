type AdminMobileHeaderProps = {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
};

export default function AdminMobileHeader({
  title,
  subtitle,
  onMenuClick,
}: AdminMobileHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-outline-variant bg-surface px-4 py-3 md:hidden">
      <button
        type="button"
        onClick={onMenuClick}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-low text-on-surface"
        aria-label="Open menu"
      >
        ☰
      </button>

      <div className="flex-1 px-3 text-left">
        <h1 className="text-lg font-semibold text-on-surface">{title}</h1>
        {subtitle && <p className="text-xs text-on-surface-variant">{subtitle}</p>}
      </div>

      <div className="h-9 w-9 rounded-full bg-primary-container text-center text-sm font-semibold leading-9 text-primary">
        A
      </div>
    </header>
  );
}
