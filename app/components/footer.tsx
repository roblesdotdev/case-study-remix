export function Footer() {
  return (
    <footer className="relative mt-12 flex h-20">
      <div className="container mx-auto flex h-[inherit] items-center px-4">
        <p className="text-sm text-fg-muted/80 md:text-base">
          &copy; Tinogasta {new Date().getFullYear()} -{' '}
          <a
            href="https://github.com/tinogasta-labs"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-fg"
          >
            Tinogasta Labs
          </a>
        </p>
      </div>
    </footer>
  )
}
