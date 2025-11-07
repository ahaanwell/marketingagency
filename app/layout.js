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
        <Script
                id="tawk-to"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                      s1.async=true;
                      s1.src='https://embed.tawk.to/68e4b9cd615cd1194e6d045f/1j6unbirp';
                      s1.charset='UTF-8';
                      s1.setAttribute('crossorigin','*');
                      s0.parentNode.insertBefore(s1,s0);
                    })();
                  `,
                }}
              />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
