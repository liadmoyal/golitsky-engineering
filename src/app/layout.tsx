import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo-var",
  subsets: ["latin", "hebrew"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "גדליה אוליצקי הנדסה | הנדסת גשרים ותשתיות",
  description:
    "גדליה אוליצקי הנדסה — מומחים בהנדסת גשרים, בטון מזוין ודרוך, בקרת ואבטחת איכות, פיקוח וסקירות מבני דרך ותשתיות תחבורה. מאז 2013.",
  keywords: [
    "הנדסה אזרחית",
    "גשרים",
    "בקרת איכות",
    "הבטחת איכות",
    "סקירות גשרים",
    "תשתיות תחבורה",
    "בטון דרוך",
    "ירושלים",
  ],
  openGraph: {
    title: "גדליה אוליצקי הנדסה | הנדסת גשרים ותשתיות",
    description:
      "מומחים בהנדסת גשרים, בטון מזוין ודרוך, בקרת ואבטחת איכות, פיקוח וסקירות מבני דרך.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
