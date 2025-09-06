const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		webVitalsAttribution: ["CLS", "LCP"],
	},
};

export default nextConfig;
