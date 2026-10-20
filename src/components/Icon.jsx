export default function Icon({ name = "arrow", size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M7 17 17 7M7 7h10v10" />
      </>
    ),
    right: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 4v-4c0-1 .1-2-.5-2.5 3-.3 5.5-1.5 5.5-6 0-1.3-.5-2.5-1.3-3.3.2-1 .2-2-.2-3.2 0 0-1.2-.4-3.5 1.3a12 12 0 0 0-6 0C6.7 1.6 5.5 2 5.5 2c-.4 1.2-.4 2.2-.2 3.2C4.5 6 4 7.2 4 8.5c0 4.5 2.5 5.7 5.5 6C9 15 9 16 9 17v4" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
