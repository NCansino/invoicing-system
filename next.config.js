/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_URI: process.env.NEXT_PUBLIC_API_URI,
  },

  images: {
    domains: ['placehold.co'],
  },
};

module.exports = nextConfig;
