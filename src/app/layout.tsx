import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corinna AI - Your AI-Powered Sales Assistant",
  description:
    "Corinna AI revolutionizes sales by providing intelligent, AI-powered assistance to help you close deals faster and more efficiently. Experience the future of sales with Corinna AI.",
  applicationName: "Corinna AI",
  keywords: [
    "AI sales assistant",
    "sales automation",
    "AI-powered sales",
    "sales assistance",
    "intelligent sales tools",
  ],
  authors: [{ name: "Your Name or Company", url: "https://yourwebsite.com" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Corinna AI - Your AI-Powered Sales Assistant",
    description:
      "Corinna AI revolutionizes sales by providing intelligent, AI-powered assistance to help you close deals faster and more efficiently.",
    siteName: "Corinna AI",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corinna AI - Your AI-Powered Sales Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Corinna AI - Your AI-Powered Sales Assistant",
    description:
      "Corinna AI revolutionizes sales by providing intelligent, AI-powered assistance to help you close deals faster and more efficiently.",
    images: [
      {
        url: "https://yourwebsite.com/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corinna AI - Your AI-Powered Sales Assistant",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  themeColor: "#FF7E5F",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
