import { Context } from 'egg';
import SuperController from './v1';

export default class UserController extends SuperController {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async show() {
    await super.show();

    const { ctx } = this;
    const friendIds = await ctx.service.friend.findFriendIds(ctx.params.id);
    const b = ctx.body;
    ctx.body = {
      ...b,
      friend_ids: friendIds,
    };
  }

}