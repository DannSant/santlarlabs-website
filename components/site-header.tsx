"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

type Props = {
  lang: string;
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    faq: string;
    cta: string;
    menu: string;
    language: string;
  };
  bookingUrl: string;
};

export function SiteHeader({ lang, nav, bookingUrl }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLang = lang === "en" ? "es" : "en";
  // Keep the visitor on the same page when switching language, e.g. /en/privacy -> /es/privacy.
  const switchHref = (usePathname() ?? `/${lang}`).replace(/^\/(en|es)/, `/${otherLang}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}#services`, label: nav.services },
    { href: `/${lang}#work`, label: nav.work },
    { href: `/${lang}#process`, label: nav.process },
    { href: `/${lang}#about`, label: nav.about },
    { href: `/${lang}#faq`, label: nav.faq },
  ];
  const ctaHref = bookingUrl || `/${lang}#contact`;
  const ctaExternal = Boolean(bookingUrl);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} aria-label="Santlar Labs" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={switchHref}
            hrefLang={otherLang}
            className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            {nav.language}
          </Link>
          <a
            href={ctaHref}
            {...(ctaExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-teal"
          >
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-base text-ink"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              {...(ctaExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-bg"
            >
              {nav.cta}
            </a>
            <Link
              href={switchHref}
              hrefLang={otherLang}
              className="rounded-full border border-line-strong px-4 py-3 text-sm text-ink"
            >
              {nav.language}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
