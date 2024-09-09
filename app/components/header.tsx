import { Link } from '@remix-run/react'
import { Icon } from './ui/icon'
import { ThemeSwitch } from '~/routes/resources+/theme-switch'
import { type Theme } from '~/utils/theme.server'

export function Header({ theme }: { theme: Theme | null }) {
  return (
    <header className="relative flex h-[80px] items-center justify-center after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">Case Study Tino</Link>
        <ul className="hidden items-center md:flex">
          <li className="px-4">Home</li>
          <li className="px-4">Services</li>
          <li className="px-4">Events</li>
          <li className="px-4">About</li>
        </ul>
        <div className="flex items-center gap-4">
          <ThemeSwitch userPreference={theme} />
          <button className="md:hidden">
            <span className="sr-only">Menu</span>
            <Icon name="hamburger-menu" className="size-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
