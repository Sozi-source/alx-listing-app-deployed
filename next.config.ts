// next.config.js

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",

  buildExcludes: [
    /.*dynamic-css-manifest\.json$/,
    /.*middleware-manifest\.json$/,
    /.*_buildManifest\.js$/,
    /.*_ssgManifest\.json$/,
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
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,

  // ✅ Disable all ESLint checks during Vercel production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Optional: disable TypeScript build blocking)
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
});
