import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Zoheir Kabuli | DevOps Engineer",
  description:
    "DevOps Engineer with a passion for building scalable and efficient systems.",
  metadataBase: new URL("https://zoheir.dev"),
  openGraph: {
    title: "Zoheir Kabuli | DevOps Engineer",
    description:
      "DevOps Engineer with a passion for building scalable and efficient systems.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zoheir Kabuli",
    jobTitle: "DevOps Engineer",
    url: "https://zoheir.dev",
    sameAs: [
      "https://github.com/zoheirkabuli",
      "https://linkedin.com/in/zoheirkabuli",
    ],
    knowsAbout: [
      "DevOps",
      "Cloud Infrastructure",
      "Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
