"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const location_1 = require("./location");
const typeDefs = apollo_server_lambda_1.gql `
  type Query
`;
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: [typeDefs, location_1.typeDefs],
    resolvers: [location_1.resolvers]
});
exports.graphQLHandler = server.createHandler();
