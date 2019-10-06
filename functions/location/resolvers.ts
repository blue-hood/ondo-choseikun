import { QueryResolvers, Location } from '../graphql';

export const queries: QueryResolvers = {
  location: (obj, { id }, context, info): Location => {
    return {
      latitude: Number(id),
      longitude: 1.5
    };
  }
};
