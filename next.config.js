// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  experimental: {
    nextScriptWorkers: true,
    optimizeCss: true,
    // workerThreads: true,
    scrollRestoration: true
  },
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    unoptimized: false,
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

    formats: ['image/avif'],
    minimumCacheTTL: 360,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
