const del = require("del");
const { transform } = require("markmap-lib/dist/transform.common");

module.exports = (eleventyConfig) => {
  del.sync("dist");

  eleventyConfig.addPairedShortcode("mindmap", (input, id = "mindmap") => {
    const output = transform(input);
    return `
      <svg id="${id}" style="width: 800px; height: 800px"></svg>
      <script>markmap.markmap("#${id}", ${JSON.stringify(
      output
    )}).fit();</script>
    `.trim();
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
