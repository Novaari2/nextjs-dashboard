/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'roduct-ucket.nos.wjv-1.neo.id',
                port:'',
                pathname: '/assets/**'
            }
        ]
    }
};

module.exports = nextConfig;
