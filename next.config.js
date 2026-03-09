/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // force Webpack, avoid Turbopack symlink issue on cPanel
  },
};

module.exports = nextConfig;
