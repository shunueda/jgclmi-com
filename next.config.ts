import type { NextConfig } from 'next'

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io'
      }
    ]
  },
  experimental: {
    typedRoutes: true,
    typedEnv: true
  }
} satisfies NextConfig
