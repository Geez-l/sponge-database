import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable the eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frckjzkmelttjzkabepe.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
