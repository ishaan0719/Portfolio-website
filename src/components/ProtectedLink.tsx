"use client";

import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { profile } from "@/content";

type Kind = "email" | "phone";

function resolve(kind: Kind) {
  if (kind === "email") {
    const address = `${profile.email.user}@${profile.email.domain}`;
    return { href: `mailto:${address}`, text: address };
  }
  return { href: `tel:${profile.phone.join("")}`, text: profile.phone.join(" ") };
}

const fallback: Record<Kind, string> = {
  email: `${profile.email.user} [at] ${profile.email.domain}`,
  phone: "Phone",
};

// Builds the mailto/tel link in the browser so the full address or number
// never appears as plain text in the static HTML scraped by bots.
export function ProtectedLink({ kind, className = "" }: { kind: Kind; className?: string }) {
  const [link, setLink] = useState<{ href: string; text: string } | null>(null);

  useEffect(() => {
    setLink(resolve(kind));
  }, [kind]);

  const Icon = kind === "email" ? Mail : Phone;

  return (
    <a href={link?.href} className={className}>
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
      <span>{link?.text ?? fallback[kind]}</span>
    </a>
  );
}
