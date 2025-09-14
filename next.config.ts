// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'json-server-api-y5tr.onrender.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
