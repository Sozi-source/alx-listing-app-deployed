// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disable PWA in dev
  buildExcludes: [
    /.*dynamic-css-manifest\.json$/,  // exclude dynamic CSS manifest
    /.*middleware-manifest\.json$/,   // exclude middleware manifest
    /.*_buildManifest\.js$/,          // exclude other dynamic build files
    /.*_ssgManifest\.json$/,          // exclude static generation manifest
  ],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/alx-listing-app-deployed-xi-eight\.vercel\.app\/_next\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "next-dynamic-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
