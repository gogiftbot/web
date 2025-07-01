import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["@prisma/client"],
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    webpackMemoryOptimizations: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/gifts",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
