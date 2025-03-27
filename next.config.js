/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ready2frag.com",
        port: '',
        pathname: "/favicon/favicon-og.png",
      }
    ]
  }
}

module.exports = nextConfig
