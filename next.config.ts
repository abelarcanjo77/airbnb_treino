import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"a0.muscache.com"
      },
      {
        protocol:"https",
        hostname:"cdn.jsdelivr.net"
      },
      {
        protocol:"https",
        hostname:"img.somake.ai"
      },
      {
        protocol:"https",
        hostname:"files.tecnoblog.net"
      },
      {
        protocol:"https",
        hostname:"s2-epocanegocios.glbimg.com"
      },
    ]
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
