export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sl-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5eead4" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#sl-mark)" />
      <path
        d="M21.5 10.5H14a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8h-7.5"
        fill="none"
        stroke="#07080c"
        strokeWidth="3.2"
        strokeLinecap="round"
        transform="translate(0 -2.5)"
      />
      <circle cx="23.4" cy="24" r="1.9" fill="#07080c" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight">
        Santlar <span className="text-muted">Labs</span>
      </span>
    </span>
  );
}
