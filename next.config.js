/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
        port: "",
        pathname: "*",
      }
    ],
  },
  experimental: {
    metadataBase: new URL('http://localhost:3000')
  }
};

module.exports = nextConfig;
