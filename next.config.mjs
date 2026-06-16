const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
