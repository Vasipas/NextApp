/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['somedomain.com'],
  },
  // experimental: { appDir: true },
}

module.exports = nextConfig
