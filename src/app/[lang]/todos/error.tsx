'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <p>Something went wrong! Error page </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}