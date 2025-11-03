import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Библия - Свет Писания',
  description: 'Мир, свет и глубина Священного Писания',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
