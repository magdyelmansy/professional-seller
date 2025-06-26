import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true  // 308-permanent redirect, or false for 307-temporary
      },
    ];
  },
};

export default nextConfig;
