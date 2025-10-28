import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// Metadata
export const metadata: Metadata = {
  title: "Zoheir Kabuli | DevOps Engineer",
  description:
    "DevOps Engineer with a passion for building scalable and efficient systems.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zoheir Kabuli | DevOps Engineer",
    description:
      "DevOps Engineer with a passion for building scalable and efficient systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
