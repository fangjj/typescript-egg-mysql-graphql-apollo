import * as DataLoader from 'dataloader';
import { Context } from 'egg';

class Connector {
  ctx: Context;
  loader: any;
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }
  fetch (ids: any) {
    return Promise.resolve(ids);
   }
}

export class UserConnector extends Connector {
  constructor(ctx) {
    super(ctx);
  }
  fetch(ids) {
    return this.ctx.service.user.findMultiple(ids);
  }
}

export class FriendConnector extends Connector {
  constructor(ctx) {
    super(ctx);
  }
  fetch(ids) {
    return this.ctx.service.friend.findFriendIdsMultiple(ids);
  }
}

export class UserCurlConnector extends Connector {
  constructor(ctx) {
    super(ctx);
  }
  fetch(ids) {
    const promises = ids.map((id) => this.ctx.service.user.curl(id));
    return Promise.all(promises);
  }
}
