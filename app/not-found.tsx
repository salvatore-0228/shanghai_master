import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-6xl font-bold text-muted-foreground mb-4">404</h2>
      <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">Sorry, we couldn't find the page you're looking for.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
