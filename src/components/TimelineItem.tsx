import { Award } from "lucide-react";
import type { Experience } from "@/content";
import { RichText } from "./RichText";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <li data-reveal className="relative pb-12 pl-8 last:pb-0 md:pl-10">
      <span
        aria-hidden="true"
        className="border-ochre bg-bg absolute top-2 left-0 size-3 rounded-full border-2"
      />
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <h3 className="text-ink font-serif text-xl font-medium md:text-2xl">
          {item.role}
          <span className="text-muted block font-sans text-base font-medium md:mt-1">
            {item.org}
          </span>
        </h3>
        <p className="text-muted shrink-0 text-sm tabular-nums">{item.dates}</p>
      </div>
      {item.note && (
        <p className="text-ink mt-3 inline-flex items-center gap-2 text-sm font-medium">
          <Award size={16} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
          {item.note}
        </p>
      )}
      <ul className="text-ink/90 mt-4 max-w-[70ch] space-y-2.5 text-base leading-relaxed md:text-[17px]">
        {item.bullets.map((b) => (
          <li key={b} className="relative pl-5">
            <span aria-hidden="true" className="bg-ochre absolute top-[0.7em] left-0 h-px w-2.5" />
            <RichText text={b} />
          </li>
        ))}
      </ul>
    </li>
  );
}
