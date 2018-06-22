import { Application } from 'egg';

export default (app: Application) => {
  const { controller: c, router: r } = app;

  r.resources('user', '/api/v1/user', c.user.v1);
  r.resources('user', '/api/v2/user', c.user.v2);
  r.resources('user', '/api/v3/user', c.user.v3);
  r.get('/api/user/:id/friend_ids', c.user.friend.friendIds);
  r.get('/api/user/:id/friends', c.user.friend.friends);

  r.post('/graphql', c.graphql.ql);
  // 如果是开发环境，可以开启 graphiql graphql-voyager
  if (process.env.NODE_ENV === 'development') {
    r.get('/graphiql', c.graphql.iql);
    r.get('/voyager', c.graphql.voyager);
  }
};
