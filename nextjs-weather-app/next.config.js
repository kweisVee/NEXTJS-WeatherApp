/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // externalDir:
        //     true |
        //     {
        //         enabled: true,
        //         silent: true,
        //     },
        appDir: true,
        serverComponentsExternalPackages: ['@tremor/react'],
        // Potential new config flag:
        // disableExperimentalFeaturesWarning: true,
    },
}

module.exports = nextConfig
