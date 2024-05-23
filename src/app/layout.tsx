import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${jetbrainsMonoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
