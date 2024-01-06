'use client';
 
import Error from 'next/error';
 
export default function NotFound() {
  return (
    <html lang="en">
      <body>
      Catching non-localized requests page
        {/* <Error statusCode={404} /> */}
      </body>
    </html>
  );
}