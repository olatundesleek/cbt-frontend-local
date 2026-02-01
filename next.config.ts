import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
      // Add this to allow any local network IP
      {
        protocol: "http",
        hostname: "192.168.*.*", // Matches 192.168.x.x
        port: "4000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "10.*.*.*", // Matches 10.x.x.x
        port: "4000",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: true,
  },

  // turbopack: {
  //   root: path.resolve("D:/cbt-fullapp - Copy"),
  // },
};

export default nextConfig;
