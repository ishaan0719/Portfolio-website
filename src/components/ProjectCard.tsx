import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content";
import { GithubIcon } from "./BrandIcons";
import { MetricBadge } from "./MetricBadge";
import { Tag } from "./Tag";

type ProjectCardProps = { project: Project; variant?: "featured" | "compact" };

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const featured = variant === "featured";
  const links = [
    project.github && { label: "Code", href: project.github, icon: "github" as const },
    project.demo && { label: "Demo", href: project.demo, icon: "arrow" as const },
    project.writeup && { label: "Write-up", href: project.writeup, icon: "arrow" as const },
  ].filter((l): l is { label: string; href: string; icon: "github" | "arrow" } => Boolean(l));

  return (
    <article
      data-reveal
      className={`border-line bg-surface shadow-card hover:shadow-lift flex h-full flex-col rounded-xl border transition duration-200 ease-out hover:-translate-y-0.5 ${
        featured ? "p-6 md:p-8" : "p-5 md:p-6"
      }`}
    >
      <p className="text-muted text-sm tabular-nums">{project.dates}</p>
      <h3 className={`text-ink mt-1.5 font-serif font-medium ${featured ? "text-2xl" : "text-xl"}`}>
        {project.title}
      </h3>
      <p className={`text-ink/85 mt-3 leading-relaxed ${featured ? "text-[17px]" : "text-[15px]"}`}>
        {project.summary}
      </p>
      {project.metrics.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key results">
          {project.metrics.map((m) => (
            <li key={m}>
              <MetricBadge>{m}</MetricBadge>
            </li>
          ))}
        </ul>
      )}
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-x-5 pt-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              {l.icon === "github" ? <GithubIcon size={16} /> : null}
              {l.label}
              <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">for {project.title} (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
