import { Context, Controller } from 'egg';

export default class UserController extends Controller {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async friendIds() {
    const { ctx } = this;
    const id = parseInt(ctx.params.id, 10);
    const friendIds = await ctx.service.friend.findFriendIds(id);
    ctx.body = friendIds;
  }

  public async friends() {
    const { ctx } = this;
    const id = parseInt(ctx.params.id, 10);
    const friendIds = await ctx.service.friend.findFriendIds(id);
    const friends = await ctx.service.user.findMultiple(friendIds);
    ctx.body = friends;
  }
};