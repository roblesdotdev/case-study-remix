export default function Advice() {
  return (
    <div className="space-y-2 border border-dashed border-fg/20 bg-panel p-4 font-mono text-sm">
      <p className="text-fg-muted/80">
        This is a case study with remix and cloudflare. The site is not yet
        complete and has not yet reached the MVP stage.
      </p>
      <p>
        💡 You can explore the{' '}
        <a
          className="underline"
          href="https://github.com/tinogasta-labs/case-study-tino"
          target="_blank"
          rel="noreferrer noopener"
        >
          source code
        </a>
        .
      </p>
    </div>
  )
}
