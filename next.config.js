const withImages = require('next-images')
module.exports = withImages({
    images: {
      domains: ["raw.githubusercontent.com"],
    },
  })