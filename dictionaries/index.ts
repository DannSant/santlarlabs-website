import type { Locale } from "@/lib/site";

const dictionaries = {
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
export type { Dictionary } from "./en";
