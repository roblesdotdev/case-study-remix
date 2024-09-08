import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <h1 className="text-xl font-medium">Working</h1>
      <Link to="/demo">Demo</Link>
    </div>
  )
}
