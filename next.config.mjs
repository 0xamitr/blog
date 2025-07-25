import createMDX from '@next/mdx'
/** @type {import('rehype-pretty-code').Options} */
const options = {
};

const withMDX = createMDX({
  // extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}


// Merge MDX config with Next.js config
export default withMDX(nextConfig)