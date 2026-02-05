import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: "/",
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;