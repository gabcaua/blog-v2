// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  compress: true,
  swcMinify: true,

  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'blog.cgsilva.com.br',
      '64.media.tumblr.com'
    ],
    unoptimized: false,
    loader: 'default',
    imageSizes: [128, 256, 512, 1024],
    formats: ['image/avif'],
    minimumCacheTTL: 360,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
