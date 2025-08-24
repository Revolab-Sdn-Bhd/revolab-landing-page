import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revolab - AI Agency for Your Business",
  description:
    "Revolutionize your business with cutting-edge AI custom solutions with Revolab, your trusted AI solutions agency. Dive into our comprehensive artificial intelligence services designed to transform your business operations and drive innovation. We utilize AI technologies like generative AI, machine learning, natural language processing, and computer vision to enhance your operations and decision-making. Experience personalized, innovative, and efficient AI solutions with Revolab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
