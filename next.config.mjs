/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // https://img.magnific.com
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        
        pathname: '**',
        
      },
    ],
  },
};

export default nextConfig;
