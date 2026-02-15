import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudharsan | Frontend Developer",
  description: "Frontend Developer building modern and interactive web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}