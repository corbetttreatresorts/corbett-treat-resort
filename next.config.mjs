/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow dev server access from 127.0.0.1
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  // Image optimization configuration
  images: {
    // Modern formats — automatically serve WebP/AVIF instead of JPEG/PNG
    formats: ["image/avif", "image/webp"],

    // Device sizes for responsive images (matches our breakpoints)
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],

    // Image sizes for `sizes` prop in next/image
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Recommended: strip unused CSS in production
  experimental: {
    optimizeCss: false, // Enable agar critters package install ho
  },
};

export default nextConfig;
