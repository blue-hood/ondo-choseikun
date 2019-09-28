import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs as locationTypeDefs, resolvers as locationResolvers } from './location';

const server = new ApolloServer({
  typeDefs: [locationTypeDefs],
  resolvers: [locationResolvers]
});

export const graphQLHandler = server.createHandler();
