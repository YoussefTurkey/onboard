/** @type {import('next').NextConfig} */
const nextConfig = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        native: true,
      },
      images: {
        formats: ["image/webp", "image/avif"], // دعم التنسيقات
        // domains: ["example.com"], // إذا كنت تستخدم صورًا من نطاق خارجي
      },
    },
  ],
};

export default nextConfig;
