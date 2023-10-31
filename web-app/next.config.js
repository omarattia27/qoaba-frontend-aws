/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

module.exports = nextConfig;

const withFonts = require("next-fonts");
module.exports = withFonts();
