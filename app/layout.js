import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Agency | Website Development | App Development | Livexcellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* ✅ Google tag (gtag.js) */}
        <Script
          src="//code.jivosite.com/widget/WdiGroesNz" async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
