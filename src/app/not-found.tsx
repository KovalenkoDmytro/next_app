'use client';
import { PropsWithChildren, ReactNode } from 'react';
 
export default function NotFound({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        Error with url there Lang did not add 
        {children}
      </body>
    </html>
  );
}