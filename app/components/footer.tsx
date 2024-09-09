export function Footer() {
  return (
    <footer className="relative flex h-24 before:absolute before:inset-x-0 before:h-px before:bg-border">
      <div className="container mx-auto flex h-[inherit] items-center px-4">
        <p className="text-sm text-fg-muted md:text-base">
          &copy; Tinogasta {new Date().getFullYear()} -{' '}
          <span>Tinogasta Labs</span>
        </p>
      </div>
    </footer>
  )
}
