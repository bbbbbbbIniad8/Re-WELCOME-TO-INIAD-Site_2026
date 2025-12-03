import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ↓ ここを追加
  output: 'export',
  // SSGではnext/imageが利用できない。今回はunoptimizedで割愛
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
