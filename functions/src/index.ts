import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (): string => 'hello',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphQLHandler = server.createHandler();
