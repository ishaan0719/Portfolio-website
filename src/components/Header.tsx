"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/content";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the nav link for the last section whose top has passed 40% of the viewport.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      setActive(atBottom ? (sections.at(-1)?.id ?? current) : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) =>
    `relative inline-flex min-h-11 items-center px-3 text-[15px] transition-colors duration-150 hover:text-ink ${
      active === href.slice(1) ? "text-ink font-medium" : "text-muted"
    }`;

  return (
    <header className="border-line bg-bg/90 supports-[backdrop-filter]:bg-bg/80 sticky top-0 z-40 border-b backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="text-ink inline-flex min-h-11 items-center font-serif text-lg font-medium"
        >
          {profile.name}
        </a>

        <div className="hidden items-center md:flex">
          <ul className="flex items-center">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={linkClass(n.href)}
                  aria-current={active === n.href.slice(1) ? "true" : undefined}
                >
                  {n.label}
                  {active === n.href.slice(1) && (
                    <span
                      aria-hidden="true"
                      className="bg-accent absolute right-3 bottom-2 left-3 h-px"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="bg-line mx-2 h-5 w-px" />
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-ink hover:bg-accent-soft inline-flex size-11 items-center justify-center rounded-lg transition-colors duration-150"
          >
            {open ? (
              <X size={20} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-line bg-bg border-t md:hidden">
          <ul className="mx-auto max-w-[1100px] px-4 py-2 sm:px-6">
            {nav.map((n) => (
              <li key={n.href} className="border-line border-b last:border-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-12 items-center text-base ${
                    active === n.href.slice(1) ? "text-accent font-medium" : "text-ink"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
