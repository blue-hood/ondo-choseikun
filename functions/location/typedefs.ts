import { gql } from 'apollo-server-lambda';

export default gql`
  type Location {
    latitude: Float!
    longitude: Float!
  }

  extend type Query {
    location(id: ID!): Location!
  }
`;
