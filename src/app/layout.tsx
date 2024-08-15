import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";  // Certifique-se de que o caminho está correto

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Hive",
  description: "Book Hive is a platform for book lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />  
        <Navbar />
        {children}
      </body>
    </html>
  );
}
