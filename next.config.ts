import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'your-json-server-domain.com'],
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
