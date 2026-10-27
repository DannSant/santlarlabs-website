import type { Dictionary } from "@/dictionaries";
import { icons } from "./icons";

const toneClass: Record<string, string> = {
  amber: "bg-amber/10 text-amber ring-amber/25",
  violet: "bg-violet/10 text-violet ring-violet/25",
  teal: "bg-teal/10 text-teal ring-teal/25",
};

export function Hero({ hero }: { hero: Dictionary["hero"] }) {
  const Arrow = icons.arrow;
  const Check = icons.check;

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-teal shadow-[0_0_10px] shadow-teal" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleStart} <span className="text-gradient">{hero.titleAccent}</span>{" "}
            <span className="text-muted">{hero.titleEnd}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition hover:bg-teal"
            >
              {hero.primary}
              <Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition hover:border-ink/40 hover:bg-white/5"
            >
              {hero.secondary}
            </a>
          </div>
        </div>

        {/* Product mock: a work-order dashboard like the ones built for clients. */}
        <div className="animate-rise relative mx-auto w-full max-w-lg [animation-delay:150ms]" aria-hidden="true">
          <div className="ring-gradient rounded-2xl bg-surface/90 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-xs text-faint">{hero.mock.app}</span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-baseline justify-between">
                <p className="font-display text-base font-semibold">{hero.mock.title}</p>
                <p className="text-xs text-faint">{hero.mock.today}</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {hero.mock.kpis.map((k) => (
                  <div key={k.label} className="rounded-xl border border-line bg-surface-2 p-3">
                    <p className="font-display text-xl font-semibold">{k.value}</p>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted">{k.label}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {hero.mock.rows.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface-2/60 px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-faint">{r.id}</p>
                      <p className="truncate text-sm">{r.vehicle}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${toneClass[r.tone]}`}>
                      {r.status}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex h-16 items-end gap-1.5">
                {[38, 52, 44, 63, 58, 72, 66, 80, 74, 88, 82, 95].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-teal/20 to-teal/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="animate-float absolute -left-4 bottom-8 hidden rounded-xl border border-line-strong bg-surface-2/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur sm:block sm:-left-10">
            <p className="text-[11px] text-muted">{hero.mock.toastTitle}</p>
            <p className="font-display text-2xl font-semibold text-teal">{hero.mock.toastValue}</p>
          </div>
          <div className="animate-float absolute -top-4 right-3 flex items-center gap-2 rounded-full border border-line-strong bg-surface-2/95 px-3.5 py-2 text-xs shadow-xl shadow-black/40 backdrop-blur [animation-delay:-3s] sm:-right-6">
            <span className="flex size-5 items-center justify-center rounded-full bg-teal/15 text-teal">
              <Check className="size-3.5" />
            </span>
            {hero.mock.deploy}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {hero.stats.map((s) => (
            <li key={s.label} className="bg-bg p-5 sm:p-6">
              <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
