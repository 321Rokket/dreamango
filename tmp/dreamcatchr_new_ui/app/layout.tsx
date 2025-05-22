import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "dreamcatchr | Digital Marketing Dashboard",
  description: "Advanced analytics and insights for your digital marketing campaigns",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dreamcatchr-logo%20FAVICON%2032X32-FO3TdCp5S251ivfbxnfWf3zL6POqAt.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dreamcatchr-logo%20FAVICON%2032X32-FO3TdCp5S251ivfbxnfWf3zL6POqAt.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
