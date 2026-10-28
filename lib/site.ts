// Central place for business details. Empty strings hide the related links.
export const site = {
  name: "Santlar Labs",
  owner: "Daniel Santiago",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://santlarlabs.com",
  // Forwarded to Gmail by Cloudflare Email Routing.
  email: "contact@santlarlabs.com",
  linkedin: "https://www.linkedin.com/in/narciso-santiago/",
  github: "https://github.com/DannSant",
  // Calendly event per language. An empty value makes "Book a call" scroll to the contact form instead.
  bookingUrl: {
    en: "https://calendly.com/santlar-labs/discovery-call",
    es: "https://calendly.com/santlar-labs/llamada-inicial",
  },
  // Formspree form id (https://formspree.io). When empty, the form opens the visitor's email app instead.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
