import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "github-readme-stats.vercel.app",
            },
            {
                protocol: "https",
                hostname: "zurke-innovation.s3.us-east-1.amazonaws.com",
            },
        ],
    },

    async headers() {
        return [
            {
                source: "/(.*)", // todas as rotas
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600, stale-while-revalidate=59", // 1h cache + SWR
                    },
                ],
            },
            {
                source: "/_next/static/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable", // cache por 1 ano
                    },
                ],
            },
            {
                source: "/images/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=604800, immutable", // cache imagens por 7 dias
                    },
                ],
            },
        ]
    },
}

export default nextConfig
