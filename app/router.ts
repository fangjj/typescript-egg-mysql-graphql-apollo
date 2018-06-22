import { Application } from 'egg';

export default (app: Application) => {
  const { controller: c, router: r } = app;

  r.resources('user', '/api/v1/user', c.user.v1);
  r.resources('user', '/api/v2/user', c.user.v2);
  r.resources('user', '/api/v3/user', c.user.v3);
  r.get('/api/user/:id/friend_ids', c.user.friend.friendIds);
  r.get('/api/user/:id/friends', c.user.friend.friends);
};
