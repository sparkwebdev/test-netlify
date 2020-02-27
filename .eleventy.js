const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Date formatting (human readable)
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });
    // Date formatting (machine readable)
    eleventyConfig.addFilter("machineDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
    });
    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("*.yml");
};
