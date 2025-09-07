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
	images: {
		domains: ['placehold.co'],
	},
};

export default nextConfig;
