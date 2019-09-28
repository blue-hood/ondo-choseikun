'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const apollo_server_lambda_1 = require('apollo-server-lambda');
const typeDefs = apollo_server_lambda_1.gql`
  type Query { 
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'hello'
  }
};
const server = new apollo_server_lambda_1.ApolloServer({
  typeDefs,
  resolvers
});
exports.graphQLHandler = server.createHandler();
