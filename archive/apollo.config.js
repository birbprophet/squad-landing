module.exports = {
  client: {
    includes: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    service: {
      name: "datocms",
      url: "https://graphql.datocms.com/",
      headers: {
        authorization: "Bearer a66bf9e92add4bba5402cf45234989"
      }
    }
  }
};
