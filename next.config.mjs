/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
				port: "",
				pathname: "/images/**"
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/wikipedia/**"
			},
			{
				protocol: "https",
				hostname: "ui-avatars.com",
				port: "",
				pathname: "/api/**"
			}
		]
	}
};

export default nextConfig;
