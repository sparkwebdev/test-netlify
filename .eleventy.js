module.exports = function(eleventyConfig) {
    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("**/*.yml");
};