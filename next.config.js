/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  react: {
    useSuspense: false,
    wait: true
  },
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
}

module.exports = nextConfig
