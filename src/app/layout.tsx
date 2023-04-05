import { ClerkProvider } from "@clerk/nextjs/app-beta";
import "./globals.css";

export const metadata = {
  title: "IMG",
  description: "International medical graduates application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
