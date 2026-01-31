import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAM LE - Portfolio",
  description: "Full-stack developer and designer passionate about creating beautiful, functional web experiences.",
  icons: {
    icon: "/elements/tab ava.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
