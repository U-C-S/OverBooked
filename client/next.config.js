const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
