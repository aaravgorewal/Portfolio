import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import FloatingMusicPlayer from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Aarav | AI Developer & ML Enthusiast",
  description: "Personal portfolio website of Aarav, an AI & ML student showcasing real-world projects and technical skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-[#020617] text-white selection:bg-[#3B82F6] selection:text-white`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <FloatingMusicPlayer />
      </body>
    </html>
  );
}
