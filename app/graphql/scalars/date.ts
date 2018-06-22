import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'Date',
  description: 'The Date custom scalar type represents a ISO Date String like yyyy-MM-ddTHH:mm:ss.fffZ',
  parseValue (value) {
    return new Date(value); // value from the client
  },
  serialize (value) {
    return value.toISOString ? value.toISOString() : value; // value sent to the client
  },
  parseLiteral (ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});
