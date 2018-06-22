import { importSchema } from 'graphql-import';
import {
  // addMockFunctionsToSchema,
  makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolver';
// import mocks from './mocks';

const query = importSchema('./app/graphql/schema/schema.graphql');

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [
    query,
  ],
});

// addMockFunctionsToSchema({
//   schema,
//   mocks,
//   preserveResolvers: false,
// });

export default schema;
