import { ApolloServer, gql } from 'apollo-server-lambda';
import { typeDefs as locationTypeDefs, queries as locationQueries } from './location';
import { Resolvers } from './graphql';

const typeDefs = gql`
  type Query
`;

const resolvers: Resolvers = {
  Query: {
    ...locationQueries
  }
};

const server = new ApolloServer({
  typeDefs: [typeDefs, locationTypeDefs],
  resolvers: resolvers
});

export const graphQLHandler = server.createHandler();
