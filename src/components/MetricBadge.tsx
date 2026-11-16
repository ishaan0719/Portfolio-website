export function MetricBadge({ children }: { children: string }) {
  return (
    <span className="bg-accent-soft text-accent inline-flex items-center rounded-lg px-2.5 py-1 text-sm font-semibold">
      {children}
    </span>
  );
}
