/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static HTML in out/ — deployable to Netlify, Cloudflare Pages, or any host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
