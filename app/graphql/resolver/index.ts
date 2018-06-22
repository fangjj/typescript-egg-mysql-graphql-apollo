import date from '../scalars/date';
import { mutation as Mutation,
  subscription as Subscription } from './mutationAndSubscription';

export default {
  Date: date,
  Mutation,
  Subscription,
  Query: {
    getUser (_, {id}, {connector}) {
      return connector.user.loader.load(id);
    },
    getUserByCurl (_, {id}, {connector}) {
      return connector.user_curl.loader.load(id);
    },
    getUsers (_, {q}, {ctx}) {
      return ctx.service.user.list(q);
    },
  },
  User: {
    friend_ids (root, _, {connector}) {
      return connector.friend.loader.load(root.id);
    },
    async friends (root, _, {connector}) {
      const friendIds = await connector.friend.loader.load(root.id);
      return connector.user.loader.loadMany(friendIds);
    },
    async friends_curl (root, _, {connector}) {
      // do some authorization
      const friendIds = await connector.friend.loader.load(root.id);
      return connector.user_curl.loader.loadMany(friendIds);
    },
  },
};
