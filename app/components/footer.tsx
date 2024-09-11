export function Footer() {
  return (
    <footer className="relative mt-12 flex h-20">
      <div className="container mx-auto flex h-[inherit] items-center px-4">
        <p className="text-sm text-fg-muted/80 md:text-base">
          Remix + Cloudflare {new Date().getFullYear()} by{' '}
          <a
            href="https://github.com/roblesdotdev"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-fg"
          >
            Aldo R. Robles
          </a>
        </p>
      </div>
    </footer>
  )
}
