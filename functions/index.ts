import { ApolloServer, gql } from 'apollo-server-lambda';
import { typeDefs as locationTypeDefs, resolvers as locationResolvers } from './location';

const typeDefs = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDefs, locationTypeDefs],
  resolvers: [locationResolvers]
});

export const graphQLHandler = server.createHandler();
