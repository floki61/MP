import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import SidesBar from "@/components/sidesBar";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <div>
          <SpeedInsights />
          <NavBar />
          <SidesBar />
          {children}
        </div>
      </body>
    </html>
  );
}
