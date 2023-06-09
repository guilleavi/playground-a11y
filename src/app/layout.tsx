import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A11y Playground",
  description: "A11y Playground app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header role="banner"></header>
        {children}
        <footer role="contentinfo"></footer>
      </body>
    </html>
  );
}
