import NotFoundPage from '@/app/[locale]/not-found'

export default function NotFoundFallback() {
  return (
    <div className="h-screen">
      <NotFoundPage />
    </div>
  )
}
