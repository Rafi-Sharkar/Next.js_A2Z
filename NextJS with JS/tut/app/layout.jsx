import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEXT.js With Rafi SharKar",
  description: "Keep Learning, Keep Applying  ",
};

export default function RootLayout({ children }) {    // This RootLayout will be run first of all directories.
  return (
    <html lang="en" className="p-6">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex gap-10">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/posts'>Posts</Link></li>
          </ul>
        </nav>
        <hr />
        {children}   {/* children direct every directory's page.jsx file. */}
      </body>
    </html>
  );
}
