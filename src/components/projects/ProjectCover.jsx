import { useI18n } from '../../i18n/context'
import './ProjectCover.css'

/*
 * Couvertures dessinées pour les projets sans capture d'écran.
 * SVG en ligne : elles suivent le thème (couleurs en variables CSS).
 */

const X0 = 96
const X1 = 452
const PERIOD = 64

function wave(kind, cy, amp = 20) {
  if (kind === 'sine') {
    const points = []
    for (let x = X0; x <= X1; x += 2) {
      const y = cy - amp * Math.sin(((x - X0) / PERIOD) * 2 * Math.PI)
      points.push(`${x} ${y.toFixed(1)}`)
    }
    return `M${points.join('L')}`
  }
  if (kind === 'square') {
    let d = `M${X0} ${cy - amp}`
    let high = true
    for (let x = X0 + PERIOD / 2; x <= X1; x += PERIOD / 2) {
      d += `H${x}V${high ? cy + amp : cy - amp}`
      high = !high
    }
    return d
  }
  if (kind === 'triangle') {
    const levels = [cy - amp, cy, cy + amp, cy]
    let d = `M${X0} ${cy}`
    for (let x = X0 + PERIOD / 4, i = 0; x <= X1; x += PERIOD / 4, i++) d += `L${x} ${levels[i % 4]}`
    return d
  }
  // dents de scie
  let d = `M${X0} ${cy + amp}`
  for (let x = X0 + PERIOD; x <= X1; x += PERIOD) d += `L${x} ${cy - amp}V${cy + amp}`
  return d
}

const WAVES = [
  { label: 'SIN', d: wave('sine', 64) },
  { label: 'SQR', d: wave('square', 128) },
  { label: 'TRI', d: wave('triangle', 192) },
  { label: 'SAW', d: wave('saw', 256), accent: true },
]

function WavesCover() {
  return (
    <>
      {WAVES.map((w, i) => (
        <g key={w.label}>
          <line className="cover-rule" x1="28" x2="452" y1={64 + i * 64} y2={64 + i * 64} />
          <text className="cover-label" x="28" y={68 + i * 64}>
            {w.label}
          </text>
          <path className={w.accent ? 'cover-line cover-line--accent' : 'cover-line'} d={w.d} />
        </g>
      ))}
    </>
  )
}

function HereCover() {
  const { t } = useI18n()
  const label = t('project.youAreHere')
  return (
    <>
      {/* un bout de plan : rues et îlots */}
      <path
        className="cover-street"
        d="M-10 96 C120 110 220 70 490 88 M-10 250 L490 214 M70 -10 L128 330 M300 -10 C290 120 330 200 312 330 M410 -10 L382 330"
      />
      <path className="cover-rule" d="M-10 160 H490" />
      <circle className="cover-ring" cx="170" cy="160" r="26" />
      <circle className="cover-dot" cx="170" cy="160" r="9" />
      <text className="cover-title" x="212" y="176">
        {label.toUpperCase()}
      </text>
    </>
  )
}

export default function ProjectCover({ variant, className = '' }) {
  return (
    <svg
      className={`cover cover--${variant} ${className}`}
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="cover-bg" width="480" height="320" />
      {variant === 'waves' ? <WavesCover /> : <HereCover />}
    </svg>
  )
}
