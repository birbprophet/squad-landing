const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withOptimizedImages = require("next-optimized-images");

const withPurgeCss = require("next-purgecss");

module.exports = withOptimizedImages(
  withCss(
    withFonts(
      withPurgeCss({
        purgeCss: {
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      })
    )
  )
);
