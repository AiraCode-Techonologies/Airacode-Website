import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AIRACODE | Enterprise AI Engineering, System Modernization & Autonomous Workflows",
  description:
    "We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art AI technology solutions.",
  keywords: [
    "AIRACODE",
    "AI Website Development",
    "AI Product Development",
    "Website Maintenance and Optimization",
    "AI Fine-Tuning and Model Optimization",
    "Cloud Infrastructure",
    "Multi-Cloud Deployments",
    "Data Analysis and Data Engineering",
    "Enterprise Workflow Automation",
    "Agentic AI and Autonomous Workflows",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://airacode.online"),
  authors: [{ name: "AIRACODE Technologies" }],
  alternates: {
    canonical: "https://airacode.online",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "AIRACODE | Transforming Vision Into Autonomous Reality",
    description:
      "Digitalizing businesses, modernizing legacy systems, and scaling digital products with state-of-the-art AI solutions.",
    url: "https://airacode.online",
    siteName: "AIRACODE",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://airacode.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIRACODE — Enterprise AI Engineering & Autonomous Workflows",
      },
      {
        url: "https://airacode.online/logo-icon.png",
        width: 512,
        height: 512,
        alt: "AIRACODE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIRACODE | Transforming Vision Into Autonomous Reality",
    description:
      "Digitalizing businesses, modernizing legacy systems, and scaling digital products with state-of-the-art AI solutions.",
    images: ["https://airacode.online/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased scroll-smooth">
      <head>
        {/* Security: Enforce HTTPS & upgrade insecure requests automatically */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        {/* HTML Header Logo & Favicon definitions */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Structured Data / Organization & WebSite Schema */}
        <JsonLd />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full w-full flex flex-col bg-[#f5f2eb] dark:bg-[#0b0e14] text-[#1e2530] dark:text-[#f3f4f6] font-sans selection:bg-[#ff7259]/25 selection:text-[#eb4a2d] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
