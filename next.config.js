// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  serverRuntimeConfig: {
    // Will only be available on the server side
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
  },
  env: {
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
  },
};

module.exports = withMDX(nextConfig);
