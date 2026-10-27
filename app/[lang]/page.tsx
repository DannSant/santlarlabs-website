import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { hasLocale, site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About, Faq, Process, Services, Trust, Work } from "@/components/sections";
import { Contact, Footer } from "@/components/contact";
import { RevealObserver } from "@/components/reveal-observer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: `${site.url}/${lang}`,
    description: dict.meta.description,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    sameAs: [site.linkedin, site.github].filter(Boolean),
    areaServed: ["United States", "Latin America"],
    availableLanguage: ["English", "Spanish"],
  };

  return (
    <>
      <SiteHeader lang={lang} nav={dict.nav} bookingUrl={site.bookingUrl} />
      <main>
        <Hero hero={dict.hero} />
        <Trust label={dict.trust.label} />
        <Services services={dict.services} />
        <Work work={dict.work} />
        <Process process={dict.process} engagement={dict.engagement} />
        <About about={dict.about} />
        <Faq faq={dict.faq} />
        <Contact contact={dict.contact} lang={lang} />
      </main>
      <Footer footer={dict.footer} lang={lang} />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
