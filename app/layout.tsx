import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack & Mobile Developer",
  description: "Full-Stack & Mobile Developer specializing in Next.js, FastAPI, and Android development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
