export function Tag({ children }: { children: string }) {
  return (
    <span className="border-line text-muted inline-flex items-center rounded-md border px-2 py-0.5 text-[13px]">
      {children}
    </span>
  );
}
