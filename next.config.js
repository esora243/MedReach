/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['your-supabase-url.supabase.co'],
  },
})