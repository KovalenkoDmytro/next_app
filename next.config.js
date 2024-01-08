/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl(nextConfig,);
