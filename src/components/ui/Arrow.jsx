// Flèches dessinées (les polices du site n'ont pas ces glyphes).
const PATHS = {
  right: 'M1.5 8h12M9 3.5 13.5 8 9 12.5',
  left: 'M14.5 8h-12M7 3.5 2.5 8 7 12.5',
  up: 'M8 14.5v-12M3.5 7 8 2.5 12.5 7',
  down: 'M8 1.5v12M3.5 9 8 13.5 12.5 9',
  out: 'M3.5 12.5 12 4M5.5 3.5H12.5V10.5',
  download: 'M8 1.5v9M4 6.5l4 4 4-4M2 14.5h12',
}

export default function Arrow({ dir = 'right', className = '' }) {
  return (
    <svg
      className={`arrow arrow--${dir} ${className}`}
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[dir]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}
