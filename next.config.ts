import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false,
	experimental: {
		staleTimes: {
			dynamic: 30,
		},
	},
};

export default nextConfig;
