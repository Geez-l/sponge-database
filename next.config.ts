import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable the eslint
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
