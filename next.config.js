const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://samand.design https://localhost:* https://*.vercel.app https://*.netlify.app; frame-src 'self' https://vo2max.app https://www.vo2max.app https://*.jumpshare.com https://*.cloudinary.com https://*.youtube.com https://*.vimeo.com"
          }
        ]
      }
    ];
  }
  // ...add any other Next.js config here
}); 