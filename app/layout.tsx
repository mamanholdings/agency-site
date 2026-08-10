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
    default: "MamanDigital | אתר תדמית ב־250 ₪ לחודש",
    template: "%s | MamanDigital",
  },
  description:
    "אתר תדמית מקצועי לעסק ללא דמי הקמה, במסלול של 250 ₪ לחודש הכולל אחסון ותחזוקה ובהתחייבות לשנה הראשונה.",
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
    title: "MamanDigital | אתר תדמית ב־250 ₪ לחודש",
    description:
      "אתר תדמית מקצועי ללא דמי הקמה, עם אחסון ותחזוקה במסלול חודשי ברור.",
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
