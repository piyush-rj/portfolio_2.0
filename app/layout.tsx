import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/src/provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush - Developer",
  description: "Portfolio of Piyush Raj",
  icons: {
    icon: '/pfp.ico',
    shortcut: 'pfp.ico',
    apple: '/pfp.ico'
  },
  openGraph: {
    title: 'Piyush Raj',
    description: 'Portfolio',
    url: 'https://piyush-nine-zeta.vercel.app',
    siteName: 'piyush',
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Piyush Raj Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush - Developer",
    description: "Explore projects, skills, and contact info.",
    images: ["/images/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
