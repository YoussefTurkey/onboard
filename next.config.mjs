/** @type {import('next').NextConfig} */
const nextConfig = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        native: true,
      },
    },
  ],
};

export default nextConfig;
