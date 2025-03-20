// Este archivo solo se usa cuando quieres analizar el tamaño del bundle
// No es necesario para el funcionamiento normal del sitio
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({})

