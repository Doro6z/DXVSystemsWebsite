import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DXV Systems — Unreal Engine Engineering",
  description:
    "Expertise technique Unreal Engine 5 : plugins C++, optimisation réseau, architecture gameplay. Solid foundations. Fluid experiences.",
  keywords: [
    "Unreal Engine",
    "UE5",
    "C++",
    "plugins",
    "game development",
    "freelance",
    "DXV Systems",
  ],
  openGraph: {
    title: "DXV Systems — Unreal Engine Engineering",
    description: "Solid foundations. Fluid experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
