import { Context } from 'egg';
import SuperController from './v2';

export default class UserController extends SuperController {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async show() {
    await super.show();

    const { ctx } = this;
    const { friend_ids, ...b } = ctx.body;
    const friends = await ctx.service.user.findMultiple(friend_ids);
    ctx.body = {
      ...b,
      friends,
    };
  }

}