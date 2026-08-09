import type { Metadata } from "next";
import { Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MamanDigital | אתרים שמקדמים עסקים",
    template: "%s | MamanDigital",
  },
  description:
    "MamanDigital מתמחים בבניית דפי נחיתה, אתרי תדמית וחנויות אונליין שמותאמים למטרות של עסקים בישראל.",
  keywords: [
    "בניית אתרים לעסקים",
    "בניית אתר לעסק קטן",
    "בניית אתר תדמית",
    "בניית דף נחיתה",
    "בניית חנות אונליין",
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    locale: "he_IL",
    type: "website",
    title: "MamanDigital | אתרים שמקדמים עסקים",
    description:
      "דפי נחיתה, אתרי תדמית וחנויות אונליין שמותאמים ללידים, מכירות ונוכחות מקצועית.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he">
      <body className={`${heebo.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
