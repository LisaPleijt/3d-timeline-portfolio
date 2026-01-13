import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Removed for dynamic MDX features
  images: {
    unoptimized: true, // Keep for now if simple hosting checks are needed, but can likely be removed later
  },
};

export default nextConfig;
