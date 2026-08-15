export default function CsFigure({ src, alt, aspect, contain = false, className = '' }) {
  return (
    <figure
      className={`cs-figure${contain ? ' cs-figure--contain' : ''}${className ? ` ${className}` : ''}`}
      style={aspect ? { '--fig-aspect': aspect } : undefined}
    >
      <img src={src} alt={alt} />
    </figure>
  )
}
