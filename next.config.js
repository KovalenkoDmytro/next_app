/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.punkapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig,);
