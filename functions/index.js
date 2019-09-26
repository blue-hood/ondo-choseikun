"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const typeDefs = apollo_server_lambda_1.gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "world"
  }
};
const server = new apollo_server_lambda_1.ApolloServer({
  typeDefs,
  resolvers
});
exports.helloHandler = server.createHandler();
