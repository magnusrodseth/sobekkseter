// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      hostname: "firebasestorage.googleapis.com",
    }]
  },
};
export default config;
