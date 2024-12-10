/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side rendering for Electron
  trailingSlash: true,
}
