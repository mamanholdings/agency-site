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
    default: "MamanDigital | אתרים שעובדים בשביל בעלי מקצוע",
    template: "%s | MamanDigital",
  },
  description:
    "MamanDigital בונה אתרי תדמית מהירים, מדויקים ומותאמים לנייד עבור טכנאים, חשמלאים, אינסטלטורים ובעלי מקצוע בכל הארץ.",
  keywords: [
    "בניית אתרים לבעלי מקצוע",
    "אתר לחשמלאי",
    "אתר לאינסטלטור",
    "אתר לטכנאי",
    "בניית אתר לעסק קטן",
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    locale: "he_IL",
    type: "website",
    title: "MamanDigital | אתרים שעובדים בשביל בעלי מקצוע",
    description:
      "אתרי תדמית חדים, מהירים ומותאמים לבעלי מקצוע שרוצים להפוך חיפושים לפניות.",
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
