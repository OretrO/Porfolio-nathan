export default function SectionHead({ number, title, titleId, aside }) {
  return (
    <header className="section-head">
      <span className="section-num mono">({number})</span>
      {aside && <p className="section-aside mono">{aside}</p>}
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>
    </header>
  )
}
