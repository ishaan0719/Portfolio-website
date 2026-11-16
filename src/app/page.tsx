import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import {
  about,
  beyondWork,
  contact,
  experience,
  featuredProjects,
  leadership,
  moreProjects,
  profile,
  site,
  skills,
} from "@/content";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ProtectedLink } from "@/components/ProtectedLink";
import { RevealObserver } from "@/components/RevealObserver";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { TimelineItem } from "@/components/TimelineItem";

const lastUpdated = new Date().toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.university },
  sameAs: [profile.linkedin, profile.github],
};

const socialLinkClass =
  "inline-flex min-h-11 items-center gap-2 text-ink transition-colors duration-150 hover:text-accent";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="bg-accent text-on-accent sr-only z-50 rounded-lg px-4 py-3 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <div id="top" className="hero-vignette">
          <div className="mx-auto flex min-h-[calc(88svh-4rem)] max-w-[1100px] flex-col justify-center px-4 py-20 sm:px-6 md:py-28">
            <h1 className="text-ink font-serif text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="text-ink/85 mt-6 max-w-[32ch] text-xl leading-snug sm:text-2xl md:text-[28px]">
              {profile.headline}
            </p>
            <p className="text-muted mt-5 text-[15px]">{profile.meta}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="bg-accent text-on-accent shadow-card hover:bg-accent-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 font-medium transition duration-200 ease-out hover:-translate-y-0.5"
              >
                View Work
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border-ink/20 text-ink hover:border-accent hover:text-accent inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-6 font-medium transition duration-200 ease-out hover:-translate-y-0.5"
              >
                <Download size={18} strokeWidth={1.5} aria-hidden="true" />
                Download Resume
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <Section id="about" title="About">
          <div className="grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:gap-14 lg:gap-16">
            <div data-reveal className="max-w-[200px] md:max-w-none">
              <Image
                src={profile.headshot.src}
                alt={profile.headshot.alt}
                width={profile.headshot.width}
                height={profile.headshot.height}
                sizes="(min-width: 768px) 260px, 200px"
                className="border-line shadow-card aspect-[4/5] h-auto w-full rounded-xl border object-cover"
              />
            </div>
            <div>
              <div
                data-reveal
                className="text-ink/90 max-w-[65ch] space-y-5 text-[17px] leading-relaxed md:text-lg"
              >
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl
                data-reveal
                className="border-line bg-line mt-10 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-3"
              >
                {about.achievements.map((a) => (
                  <div key={a.label} className="bg-surface px-5 py-4">
                    <dt className="text-muted text-sm">{a.label}</dt>
                    <dd className="text-accent mt-0.5 font-serif text-xl font-medium">{a.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <ol className="before:bg-line relative before:absolute before:top-3 before:bottom-3 before:left-[5px] before:w-px">
            {experience.map((e) => (
              <TimelineItem key={e.org} item={e} />
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected projects">
          <div className="grid gap-6 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <h3 data-reveal className="text-ink mt-20 mb-8 font-serif text-2xl font-medium">
            More projects
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p) => (
              <ProjectCard key={p.title} project={p} variant="compact" />
            ))}
          </div>
        </Section>

        {/* Leadership & entrepreneurship */}
        <Section id="leadership" title="Leadership">
          <ol className="before:bg-line relative before:absolute before:top-3 before:bottom-3 before:left-[5px] before:w-px">
            {leadership.roles.map((r) => (
              <TimelineItem key={r.role} item={r} />
            ))}
          </ol>

          <h3 data-reveal className="text-ink mt-20 mb-8 font-serif text-2xl font-medium">
            Entrepreneurship
          </h3>
          <ol className="relative">
            <TimelineItem item={leadership.venture} />
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.label} data-reveal>
                <h3 className="text-muted mb-3 text-sm font-medium tracking-wide uppercase">
                  {g.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Beyond work */}
        <Section id="beyond" title="Beyond work">
          <ul
            data-reveal
            className="text-ink/90 grid max-w-[75ch] gap-3 text-[17px] leading-relaxed"
          >
            {beyondWork.map((b) => (
              <li key={b} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="bg-ochre absolute top-[0.75em] left-0 h-px w-2.5"
                />
                {b}
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title={contact.heading}>
          <div data-reveal className="max-w-[60ch]">
            <p className="text-ink/90 text-[17px] leading-relaxed md:text-lg">{contact.body}</p>
            <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-8">
              <li>
                <ProtectedLink
                  kind="email"
                  className={`${socialLinkClass} text-accent hover:text-accent-hover font-medium`}
                />
              </li>
              <li>
                <ProtectedLink kind="phone" className={socialLinkClass} />
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkClass}
                >
                  <LinkedinIcon />
                  LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkClass}
                >
                  <GithubIcon />
                  GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="border-line border-t">
        <div className="text-muted mx-auto flex max-w-[1100px] flex-col gap-4 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-ink font-serif text-base">{profile.name}</p>
            <p className="mt-1">
              © 2026 {profile.name} · Last updated {lastUpdated}
            </p>
          </div>
          <ul className="flex gap-1">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="hover:bg-accent-soft hover:text-ink inline-flex size-11 items-center justify-center rounded-lg transition-colors duration-150"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="hover:bg-accent-soft hover:text-ink inline-flex size-11 items-center justify-center rounded-lg transition-colors duration-150"
              >
                <GithubIcon />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
