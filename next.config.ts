import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  output: 'export', // Static export for easier hosting
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
