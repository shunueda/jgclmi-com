import type { NextConfig } from 'next'
import { Endpoint } from '#constants/Endpoint'

export default {
  images: {
    remotePatterns: [
      {
        hostname: new URL(Endpoint.PRISMIC_IMAGES).hostname
      }
    ]
  },
  experimental: {
    typedRoutes: true,
    typedEnv: true
  }
} satisfies NextConfig
