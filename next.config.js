/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Ajuste aqui conforme o nome do repo
  assetPrefix: isProd ? '/consiliencia/' : '',
  basePath: isProd ? '/consiliencia' : ''
};

module.exports = nextConfig;
