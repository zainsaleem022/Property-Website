import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dbConnect } from "../backend/dbConnect"; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyFinder - Compare Airbnb & Booking.com",
  description: "Find the best deals across Airbnb and Booking.com",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await dbConnect(); // Ensure the database is connected when the app starts

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
