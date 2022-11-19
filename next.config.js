/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "1000logos.net",
      "images.pexels.com",
      "scontent.fjai2-3.fna.fbcdn.net"
    ]
  }
}

module.exports = nextConfig
