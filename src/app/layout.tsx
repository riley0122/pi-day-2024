import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi day 2024",
  description: "Memorize as many digits as pi and see how much you can remember!",
};

import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TODO switch over to google analytics via cloudflare zaraz */}
        <Analytics />
      </head>
      <body className={inter.className}>
        {children}
        <a href="https://github.com/riley0122/pi-day-2024" className="text-gray-600 decoration-dotted underline absolute bottom-5 right-1/2 translate-x-1/2">
          <small>View source code</small>
        </a>
      </body>
    </html>
  );
}
