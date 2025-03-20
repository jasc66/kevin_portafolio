/** @type {import('next').NextConfig} */

// Importamos el analizador de bundle solo si se necesita
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  // Remove experimental features that might cause issues
};

// Aplicamos el analizador de bundle solo si ANALYZE=true
export default process.env.ANALYZE === 'true' 
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;

