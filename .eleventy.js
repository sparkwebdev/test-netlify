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
    eleventyConfig.addPassthroughCopy("admin/**/*.yml");

    return {
      templateFormats: ["md", "njk", "html", "liquid"],
  
      // If your site lives in a different subdirectory, change this.
      // Leading or trailing slashes are all normalized away, so donâ€™t worry about it.
      // If you donâ€™t have a subdirectory, use "" or "/" (they do the same thing)
      // This is only used for URLs (it does not affect your file structure)
      pathPrefix: "/",
  
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      passthroughFileCopy: true,
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
};
