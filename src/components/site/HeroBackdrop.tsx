export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="hero-backdrop">
      <div className="hero-dots" />
      <svg className="hero-arcs" viewBox="0 0 1000 720" fill="none">
        <g stroke="currentColor" strokeWidth="38">
          <circle cx="1000" cy="0" r="140" />
          <circle cx="1000" cy="0" r="260" />
          <circle cx="1000" cy="0" r="380" />
          <circle className="hero-arc-extra" cx="1000" cy="0" r="500" />
          <circle className="hero-arc-extra" cx="1000" cy="0" r="620" />
          <circle className="hero-arc-extra" cx="1000" cy="0" r="740" />
        </g>
      </svg>
    </div>
  );
}
