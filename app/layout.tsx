import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-MERTZ Travel and Tours - Your Gateway to Adventure",
  description: "Book your luxury Japan & Taiwan cruise with Costa Serena. K-MERTZ Travel and Tours offers premium services, visa assistance, and flexible payment options.",
  keywords: ["travel", "cruise", "K-MERTZ", "Japan cruise", "Taiwan cruise", "Costa Serena", "travel agency Philippines"],
  authors: [{ name: "K-MERTZ Travel and Tours" }],
  openGraph: {
    title: "K-MERTZ Travel and Tours - Premium Cruise Experiences",
    description: "Experience the magic of East Asia with our premium cruise packages.",
    type: "website",
    locale: "en_PH",
    siteName: "K-MERTZ Travel",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
