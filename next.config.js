/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "1000logos.net",
      "images.pexels.com",
      "scontent.fjai2-3.fna.fbcdn.net",
      "static.xx.fbcdn.net",
      "lh3.googleusercontent.com",
      "scontent.fjai2-2.fna.fbcdn.net",
      "png.pngtree.com"
    ]
  }
}

module.exports = nextConfig
