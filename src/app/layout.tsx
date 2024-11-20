import type { Metadata } from "next";
import "./globals.css";
import { Onest } from "next/font/google";

const fontHeading = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const dmsans = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500", "600", "700", "800", "900"],
});




export const metadata: Metadata = {
  title: "pixel_person",
  description: "AI Avatar Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${dmsans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
