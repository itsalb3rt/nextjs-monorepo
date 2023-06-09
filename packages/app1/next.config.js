/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    })
    return config
  },
}

module.exports = nextConfig
