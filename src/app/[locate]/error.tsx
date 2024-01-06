'use client'

import { useTranslations } from "next-intl";

export default function Error({ error, reset, }: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const dictionary = useTranslations('page');

  return (
    <html>
      <body>
        <div>
          <h2>{error.message}</h2>
          <p>{dictionary('error.title')} </p>
          <button onClick={() => reset()}>{dictionary('error.buttons.tryAgain')}</button>
        </div>
      </body>
    </html>
  )
}