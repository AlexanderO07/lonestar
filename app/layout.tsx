import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoneStar",
  description: "An AI-powered task management assistant that prioritizes tasks based on urgency, deadlines, and user habits.",
  applicationName: "LoneStar",
  authors: [{ name: "Alexander Onyiuke", url: "https://www.linkedin.com/in/Alexander-Onyiuke/" }],
  keywords: ["task management", "AI", "productivity"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://lonestar-beta.vercel.app",
    title: "LoneStar",
    description: "An AI-powered task management assistant.",
    siteName: "LoneStar",
    images: [{ url: "https://yourwebsite.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "LoneStar",
    description: "An AI-powered task management assistant.",
  },
  icons: {
    icon: "/icons/android-chrome-192x192.png", // Standard icon
    apple: "/icons/apple-touch-icon.png",        // Apple touch icon
    shortcut: "/icons/favicon.ico"               // Favicon for shortcut links
  },
  manifest: "/site.webmanifest" // Manifest file
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <StackProvider app={stackServerApp}>
            <StackTheme>{children}</StackTheme>
          </StackProvider>
        </Provider>
      </body>
    </html>
  );
}
