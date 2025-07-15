import { Libre_Baskerville, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans-serif",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.className} ${geistMono.variable} ${montserrat.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
