"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  form: Dictionary["contact"]["form"];
  email: string;
  formspreeId: string;
  privacyHref: string;
};

const field =
  "w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-ink placeholder:text-faint outline-none transition focus:border-teal/60 focus:ring-2 focus:ring-teal/20";

export function ContactForm({ form, email, formspreeId, privacyHref }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl)) as Record<string, string>;

    // Without a form service configured, hand the message to the visitor's email app.
    if (!formspreeId) {
      const body = [
        `${form.name}: ${data.name}`,
        `${form.email}: ${data.email}`,
        data.company && `${form.company}: ${data.company}`,
        `${form.projectType}: ${data.projectType}`,
        `${form.budget}: ${data.budget}`,
        "",
        data.message,
      ]
        .filter((line) => line !== undefined && line !== "")
        .join("\n");
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        `Santlar Labs — ${data.projectType}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          // Formspree uses _subject for the notification email; language tells you which to reply in.
          _subject: `Santlar Labs — ${data.projectType} — ${data.name}`,
          language: document.documentElement.lang === "es" ? "Español" : "English",
        }),
      });
      setState(res.ok ? "sent" : "error");
      if (res.ok) formEl.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center text-ink" role="status">
        {form.success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot: hidden from people, bots fill it in and Formspree drops the submission. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="grid gap-2 text-sm text-muted">
        {form.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        {form.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 text-sm text-muted sm:col-span-2">
        {form.company}
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        {form.projectType}
        <select name="projectType" className={field}>
          {form.projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-muted">
        {form.budget}
        <select name="budget" className={field}>
          {form.budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-muted sm:col-span-2">
        {form.message}
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <p className="text-xs text-faint sm:col-span-2">
        {form.consentBefore}{" "}
        <a href={privacyHref} className="text-muted underline underline-offset-2 hover:text-ink">
          {form.consentLink}
        </a>
        .
      </p>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-faint" role={state === "error" ? "alert" : undefined}>
          {state === "error" ? <span className="text-amber">{form.error}</span> : !formspreeId && form.mailtoNote}
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition hover:bg-teal disabled:opacity-60"
        >
          {state === "sending" ? form.sending : form.submit}
        </button>
      </div>
    </form>
  );
}
