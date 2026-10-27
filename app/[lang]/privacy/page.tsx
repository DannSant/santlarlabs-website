import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { hasLocale, site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/contact";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.privacy.metaTitle,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { en: "/en/privacy", es: "/es/privacy" },
    },
  };
}

// Paragraphs use "{email}" as a placeholder for a mailto link.
function withEmail(text: string) {
  const [before, after] = text.split("{email}");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <a href={`mailto:${site.email}`} className="text-teal hover:text-ink">
        {site.email}
      </a>
      {after}
    </>
  );
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { privacy } = dict;

  return (
    <>
      <SiteHeader lang={lang} nav={dict.nav} bookingUrl={site.bookingUrl[lang]} />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <Link href={`/${lang}`} className="text-sm text-muted hover:text-ink">
          ← {privacy.back}
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{privacy.title}</h1>
        <p className="mt-3 font-mono text-xs text-faint">{privacy.updated}</p>
        <p className="mt-8 text-lg leading-relaxed text-muted">{privacy.intro}</p>

        <div className="mt-12 space-y-10">
          {privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{withEmail(paragraph)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer footer={dict.footer} lang={lang} path="/privacy" />
    </>
  );
}
