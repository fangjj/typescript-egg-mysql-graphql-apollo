import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const USER_CREATED = 'user_created';
const USER_UPDATED = 'user_updated';
const USER_REMOVED = 'user_removed';

export const subscription = {
  userChanged: {
    resolve: (payload) => payload,
    subscribe: () => pubsub.asyncIterator([
      USER_CREATED,
      USER_UPDATED,
      USER_REMOVED,
    ]),
  },
};

export const mutation = {
  async createUser (_, query, {ctx}) {
    const user = await ctx.service.user.create(query);
    pubsub.publish(USER_CREATED, {
      message: USER_CREATED,
      data: user.toJSON(),
    });
    return user;
  },
  async updateUser (_, {id, ...updates}, {ctx}) {
    const user = await ctx.service.user.update({id, updates});
    pubsub.publish(USER_UPDATED, {
      message: USER_UPDATED,
      data: user.toJSON(),
    });
    return user;
  },
  async deleteUser (_, {id}, {ctx}) {
    const user = await ctx.service.user.del(id);
    pubsub.publish(USER_REMOVED, {
      message: USER_REMOVED,
      data: user.toJSON(),
    });
    return user;
  },
};
