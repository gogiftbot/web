import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
