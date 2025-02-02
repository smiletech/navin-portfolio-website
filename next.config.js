/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      },
      output: 'export',
      distDir: 'out',
      trailingSlash: true,
      images: {
        unoptimized: true, 
      },
}

module.exports = nextConfig
