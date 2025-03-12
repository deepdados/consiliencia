/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Ajuste estes valores para o nome exato do seu repositório
  assetPrefix: isProd ? '/consiliencia/' : '',
  basePath: isProd ? '/consiliencia' : '',
};

module.exports = nextConfig;
