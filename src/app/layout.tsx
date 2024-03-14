import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi day 2024",
  description: "Memorize as many digits as pi and see how much you can remember!",
};

function PiDay() {
  const currentTime = new Date();
  // March is the 3d month, but indexing starts at 0 so it is 2
  if(currentTime.getMonth() === 2 && currentTime.getDate() === 14) {
    if(currentTime.getFullYear() === 2024) {
      return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is pi day today!</span>
    }
    return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is pi day! Just a diffrent year :)</span>
  } else {
    return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is not pi day :(</span>
  }
}

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
        <PiDay />
        <div className="w-lvw h-lvh text-center" id="wrapper">{children}</div>
        <a href="https://github.com/riley0122/pi-day-2024" target="_blank" className="text-gray-600 decoration-dotted underline absolute bottom-5 right-1/2 translate-x-1/2">
          <small>View source code</small>
        </a>
      </body>
    </html>
  );
}
