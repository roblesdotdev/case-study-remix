export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12">
      <h1 className="text-2xl font-medium">Working</h1>
      <p className="text-lg text-fg-muted">This is a description</p>

      <div className="mt-4 flex items-center gap-3">
        <button className="inline-flex h-12 items-center justify-center bg-primary px-4 text-sm font-medium text-on-primary">
          Get started
        </button>
        <button className="inline-flex h-12 items-center justify-center border-2 bg-transparent px-4 text-sm font-medium">
          Get started
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-12 w-96 bg-panel px-4 outline-none ring-primary ring-offset-2 ring-offset-canvas placeholder:text-fg-muted/75 focus:ring-2"
        />
      </div>
    </div>
  )
}
