type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const icons = {
  app: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 13h4M8 16h7" />
    </svg>
  ),
  shop: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M4 9h16l-1.2 10.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z" />
      <path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" />
    </svg>
  ),
  automation: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5" />
    </svg>
  ),
  modernize: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M13 3 5 14h6l-1 7 8-11h-6z" />
    </svg>
  ),
  arrow: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  mail: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  check: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  ),
  plus: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  image: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="m21 16-5-5-9 9" />
    </svg>
  ),
};

export type IconName = keyof typeof icons;
