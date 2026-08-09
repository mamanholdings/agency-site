type IconName =
  | "arrow"
  | "bolt"
  | "check"
  | "code"
  | "gauge"
  | "lock"
  | "phone"
  | "spark"
  | "tools";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="m9 18 6-6-6-6M15 12H3" />,
  bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-5 3 2-12" />,
  gauge: (
    <>
      <path d="M20 13a8 8 0 1 0-16 0" />
      <path d="m12 13 4-4M5 19h14" />
    </>
  ),
  lock: (
    <>
      <rect width="14" height="10" x="5" y="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9Z" />
  ),
  spark: <path d="m12 3-1.4 4.1a5 5 0 0 1-3.5 3.5L3 12l4.1 1.4a5 5 0 0 1 3.5 3.5L12 21l1.4-4.1a5 5 0 0 1 3.5-3.5L21 12l-4.1-1.4a5 5 0 0 1-3.5-3.5L12 3Z" />,
  tools: (
    <>
      <path d="m14.7 6.3 3-3a4.2 4.2 0 0 1-5.6 5.6l-6.8 6.8a2.1 2.1 0 0 1-3-3l6.8-6.8a4.2 4.2 0 0 1 5.6-5.6l-3 3 3 3Z" />
      <path d="m15 15 6 6M18 12l3 3" />
    </>
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  );
}
