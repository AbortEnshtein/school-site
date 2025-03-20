import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Игра про Смуту",
  icons: "https://i.postimg.cc/MKKQx28v/boyarin.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
