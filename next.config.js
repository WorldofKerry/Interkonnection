/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

const withTM = require('next-transpile-modules')(['react-cytoscapejs', 'use-window-size-v2'])

module.exports = withTM(nextConfig)
