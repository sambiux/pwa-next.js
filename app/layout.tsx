import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Music Calculator",
  description: "Proyecto musical en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <header className="fixed top-0 left-0 w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-white font-bold text-xl">
              Estadisticas de tu Music!
            </h1>

            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-medium"
              >
                Calculadora
              </Link>

              <Link
                href="/clasificacion"
                className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg text-white font-medium"
              >
                Ranking
              </Link>
            </div>
          </nav>
        </header>

        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}