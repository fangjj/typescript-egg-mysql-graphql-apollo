import * as Chance from 'chance';
import { MockList } from 'graphql-tools';
const chance = new Chance();

export default {
  Int: () => 3,
  Date: () => new Date(),
  User: () => ({
    name: () => chance.name(),
    age: () => chance.age(),
    gender: () => chance.gender(),
    friends: () => new MockList([2, 4]),
  }),
  Users: () => ({
    rows: () => new MockList(3),
  }),
};
