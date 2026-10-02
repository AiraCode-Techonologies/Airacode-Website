import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only export static files for GitHub Pages in GitHub Actions; Vercel runs full dynamic Next.js API routes
  ...(process.env.GITHUB_ACTIONS && { output: "export" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
