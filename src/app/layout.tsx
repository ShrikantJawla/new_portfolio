import type { Metadata } from "next";
import "./globals.css";
import NextThemeProvider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Shrikant Jawla | Full Stack Web Developer",
  description: "Portfolio website of Shrikant Jawla | Full Stack Web Developer",
  icons: {
    icon: "/logo.png",
  },
  authors: [{ name: "Shrikant Jawla" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Shrikant Jawla | Full Stack Web Developer",
    description:
      "Portfolio website of Shrikant Jawla | Full Stack Web Developer",
    siteName: "Shrikant Jawla | Full Stack Web Developer",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
