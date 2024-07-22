import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "My Food App",
  description: "This is a food App that simplifies food choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
