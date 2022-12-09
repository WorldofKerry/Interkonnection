/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-cytoscapejs'])

module.exports = withTM(nextConfig)
