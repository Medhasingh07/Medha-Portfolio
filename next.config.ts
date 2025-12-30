import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // This is to allow cross-origin requests from the Firebase Studio preview environment.
  allowedDevOrigins: [
    'https://6000-firebase-studio-1767022927244.cluster-ulqnojp5endvgve6krhe7klaws.cloudworkstations.dev',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
