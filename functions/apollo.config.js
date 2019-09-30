module.exports = {
  client: {
    includes: ['./**/*.js'],
    tagName: "graphql",
    addTypename: true,
  },
  service: {
    endpoint: {
      url: 'http://127.0.0.1:3000/graphql'
    }
  },
};
