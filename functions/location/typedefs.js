"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql `
  extend type Query {
    hello: String!
  }
`;
