/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd26lpennugtm8s.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'dcdn-us.mitiendanube.com',
      },
      {
        protocol: 'https',
        hostname: '*.mitiendanube.com',
      },
    ],
  },
};

export default nextConfig;
