/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       // source: '/:slug*',
  //       source: '/:path*',
  //       // destination: 'http://localhost:3001/api/:slug*'
  //       destination: `${BACKEND_API_URL}/:path*`
  //     },
  //   ]
  // },
}

module.exports = nextConfig
