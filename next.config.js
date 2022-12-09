/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true, 
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

const withTM = require('next-transpile-modules')(['react-cytoscapejs'])

module.exports = withTM(nextConfig)
