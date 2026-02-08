// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Zero Delights Club",
  description: "Structured video lessons combined with an exclusive community experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6989106fec899b39d3fd4a45";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
