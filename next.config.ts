import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ add unsplash here
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
