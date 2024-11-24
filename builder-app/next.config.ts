const { BuilderDevTools } = require("@builder.io/dev-tools/next");
/** @type {import('next').NextConfig} */

const nextConfig = BuilderDevTools()({
  // конфигурация
});

module.exports = nextConfig;