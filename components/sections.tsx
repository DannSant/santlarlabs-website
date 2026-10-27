import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { icons, type IconName } from "./icons";

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="reveal max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}

export function Trust({ label }: { label: string }) {
  const names = ["Norfolk Southern", "HSBC", "BBVA", "Telcel"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-center text-sm text-faint">{label}</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {names.map((n) => (
          <li key={n} className="font-display text-lg font-semibold tracking-tight text-muted/70 sm:text-xl">
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading {...services} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.items.map((s) => {
          const Icon = icons[s.icon as IconName];
          return (
            <article
              key={s.title}
              className="reveal group rounded-2xl border border-line bg-surface p-6 transition hover:border-line-strong hover:bg-surface-2 sm:p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-line-strong bg-gradient-to-br from-teal/15 to-violet/15 text-teal">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const statusStyle: Record<string, string> = {
  live: "bg-teal/10 text-teal ring-teal/25",
  building: "bg-amber/10 text-amber ring-amber/25",
  enterprise: "bg-violet/10 text-violet ring-violet/25",
};

export function Work({ work }: { work: Dictionary["work"] }) {
  const ImageIcon = icons.image;
  const Arrow = icons.arrow;
  return (
    <section id="work" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading {...work} />
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {work.items.map((item, i) => {
            const enterprise = item.status === "enterprise";
            return (
              <article
                key={item.title}
                className={`reveal flex flex-col overflow-hidden rounded-2xl border border-line bg-bg ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                {!enterprise && (
                  <div className="relative aspect-[16/10] border-b border-line bg-gradient-to-br from-teal/10 via-surface-2 to-violet/15">
                    {item.image ? (
                      <a href={item.url || undefined} target="_blank" rel="noreferrer" tabIndex={-1} className="group/shot">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.03]"
                          sizes="(min-width: 1024px) 33vw, 100vw"
                        />
                      </a>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-faint">
                        <ImageIcon className="size-7" />
                        <span className="text-xs">{work.screenshotSoon}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-muted">
                      <span className="text-ink">{item.client}</span> · {item.kind}
                    </p>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${statusStyle[item.status]}`}>
                      {work.status[item.status as keyof typeof work.status]}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{item.body}</p>
                  {item.metric && (
                    <p className="mt-5 flex items-baseline gap-2">
                      <span className="text-gradient font-display text-3xl font-semibold">{item.metric}</span>
                      <span className="text-sm text-muted">{item.metricLabel}</span>
                    </p>
                  )}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <li key={t} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-teal hover:text-ink"
                    >
                      {work.visit}
                      <Arrow className="size-4 -rotate-45 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process({ process, engagement }: { process: Dictionary["process"]; engagement: Dictionary["engagement"] }) {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading {...process} />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((s, i) => (
          <li key={s.title} className="reveal relative rounded-2xl border border-line bg-surface p-6">
            <span className="font-mono text-sm text-teal">0{i + 1}</span>
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="reveal ring-gradient mt-16 rounded-2xl bg-surface p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet">{engagement.eyebrow}</p>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {engagement.items.map((e) => (
            <div key={e.title}>
              <h3 className="font-display text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section id="about" className="border-y border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{about.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{about.title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h3 className="mt-10 text-sm font-medium text-ink">{about.stackTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.stack.map((t) => (
              <li key={t} className="rounded-full border border-line-strong bg-bg px-3 py-1.5 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <h3 className="text-sm font-medium text-ink">{about.timelineTitle}</h3>
          <ol className="mt-6 border-l border-line-strong">
            {about.timeline.map((t, i) => (
              <li key={t.period} className="relative pb-8 pl-6 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ${
                    i === 0 ? "bg-teal shadow-[0_0_12px] shadow-teal" : "bg-faint"
                  }`}
                />
                <p className="font-mono text-xs text-faint">{t.period}</p>
                <p className="mt-1 font-display font-semibold">{t.role}</p>
                <p className="text-sm text-muted">{t.org}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  const Plus = icons.plus;
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faq.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
