import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GeminiChat from "./components/GeminiChat";
import Navbar from "@/app/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hrishikesh Portfolio",
  description: "Explore projects in AI-powered SaaS, real-time collaboration, and Web3 infrastructure built by Hrishikesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
      
       
        <Navbar />
        
        {children}
        <GeminiChat />
      </body>
    </html>
  );
}
