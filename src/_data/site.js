module.exports = {
    // Detect if we're running in development (localhost) or production (GitHub Pages)
    baseUrl: process.env.NODE_ENV === 'production' ? '/Integrated-livecoding' : '',

    // Helper function to create paths
    path: function (relativePath) {
        const baseUrl = process.env.NODE_ENV === 'production' ? '/Integrated-livecoding' : '';
        // Handle both relative paths starting with / and without
        const cleanPath = relativePath.startsWith('/') ? relativePath : '/' + relativePath;
        return baseUrl + cleanPath;
    },

    // Helper function specifically for CSS and assets
    asset: function (assetPath) {
        const baseUrl = process.env.NODE_ENV === 'production' ? '/Integrated-livecoding' : '';
        const cleanPath = assetPath.startsWith('/') ? assetPath : '/' + assetPath;
        return baseUrl + cleanPath;
    }
};
