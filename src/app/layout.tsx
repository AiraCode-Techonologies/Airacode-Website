import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  authors: [{ name: "AIRACODE Technologies" }],
  openGraph: {
    title: "AIRACODE | Transforming Vision Into Autonomous Reality",
    description:
      "Digitalizing businesses, modernizing legacy systems, and scaling digital products with state-of-the-art AI solutions.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo-icon.svg",
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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full w-full flex flex-col bg-[#f5f2eb] text-[#1e2530] font-sans selection:bg-[#ff7259]/25 selection:text-[#eb4a2d] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
