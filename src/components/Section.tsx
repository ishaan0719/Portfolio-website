import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24 lg:py-28"
    >
      <div data-reveal className="mb-10 md:mb-12">
        {eyebrow && (
          <p className="text-muted mb-2 text-sm font-medium tracking-wide uppercase">{eyebrow}</p>
        )}
        <h2 id={`${id}-title`} className="text-ink font-serif text-3xl font-medium md:text-4xl">
          {title}
        </h2>
        <span aria-hidden="true" className="bg-ochre mt-4 block h-px w-12" />
      </div>
      {children}
    </section>
  );
}
