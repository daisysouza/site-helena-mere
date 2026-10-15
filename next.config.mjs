/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'thumb.wikimedia.org',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
