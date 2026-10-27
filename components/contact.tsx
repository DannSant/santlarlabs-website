import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { icons } from "./icons";
import { Logo } from "./logo";

export function Contact({ contact }: { contact: Dictionary["contact"] }) {
  const Mail = icons.mail;
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{contact.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{contact.subtitle}</p>
          <p className="mt-10 text-sm text-faint">{contact.emailLabel}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-flex items-center gap-2 break-all font-display text-lg text-ink transition hover:text-teal"
          >
            <Mail className="size-5 shrink-0 text-teal" />
            {site.email}
          </a>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.linkedin, label: "LinkedIn" },
              { href: site.github, label: "GitHub" },
            ]
              .filter((s) => s.href)
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line-strong px-4 py-2 text-sm text-muted transition hover:border-ink/40 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>
        <div className="reveal ring-gradient rounded-2xl bg-surface/90 p-6 backdrop-blur sm:p-8">
          <ContactForm form={contact.form} email={site.email} formspreeId={site.formspreeId} />
        </div>
      </div>
    </section>
  );
}

export function Footer({ footer, lang }: { footer: Dictionary["footer"]; lang: string }) {
  const social = [
    { href: site.linkedin, label: "LinkedIn" },
    { href: site.github, label: "GitHub" },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-faint">{footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          {social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">
              {s.label}
            </a>
          ))}
          <a href={lang === "en" ? "/es" : "/en"} className="hover:text-ink">
            {lang === "en" ? "Español" : "English"}
          </a>
          <span className="text-faint">
            © 2026 {site.name}. {footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
