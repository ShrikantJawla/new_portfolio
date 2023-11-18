import type { Metadata } from "next";
import "./globals.css";
import NextThemeProvider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Shrikant Jawla | Full Stack Web Developer",
  description: "Portfolio website of Shrikant Jawla | Full Stack Web Developer",
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
