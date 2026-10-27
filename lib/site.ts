// Central place for business details. Empty strings hide the related links.
export const site = {
  name: "Santlar Labs",
  owner: "Daniel Santiago",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://santlarlabs.com",
  // Switch to hello@santlarlabs.com once the domain's email is set up.
  email: "dann.santlar@gmail.com",
  linkedin: "https://www.linkedin.com/in/narciso-santiago/",
  github: "https://github.com/DannSant",
  // e.g. a Calendly or Cal.com link. When empty, "Book a call" scrolls to the contact form.
  bookingUrl: "",
  // Formspree form id (https://formspree.io). When empty, the form opens the visitor's email app instead.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
