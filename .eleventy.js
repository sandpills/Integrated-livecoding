const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-toc-done-right");

module.exports = function (eleventyConfig) {
    // Copy CSS and other assets
    eleventyConfig.addPassthroughCopy("src/style.css");

    // Configure Markdown rendering
    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    })
        .use(markdownItAnchor, {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "✦",
            slugify: (s) => s.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
        })
        .use(markdownItToc, {
            level: [1, 2, 3],
            listType: "ul"
        });

    eleventyConfig.setLibrary("md", markdownLibrary);

    // Set input and output directories
    return {
        dir: {
            input: "src",
            output: ".",
            includes: "../_includes",
            layouts: "../_layouts"
        }
    };
};
