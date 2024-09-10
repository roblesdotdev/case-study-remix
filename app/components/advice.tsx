export default function Advice() {
  return (
    <div className="space-y-2 border border-dashed border-fg/20 bg-panel p-4 font-mono text-sm">
      <p className="text-fg-muted/80">
        Este es un caso de estudio en desarrollo para la ciudad de Tinogasta. El
        sitio aún no está completo ni ha alcanzado la fase de MVP.
      </p>
      <p>
        💡 Es{' '}
        <a
          className="underline"
          href="https://github.com/tinogasta-labs/case-study-tino"
          target="_blank"
          rel="noreferrer noopener"
        >
          código abierto
        </a>{' '}
        y puedes contribuir.
      </p>
    </div>
  )
}
