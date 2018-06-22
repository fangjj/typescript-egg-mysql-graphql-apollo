import { Context, Controller } from 'egg';

export default class UserController extends Controller {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async index() {
    const { ctx } = this;
    const body = await ctx.service.user.list(ctx.query);
    ctx.body = body;
  }

  public async show() {
    const { ctx } = this;
    ctx.params.id = parseInt(ctx.params.id, 10);
    ctx.body = await ctx.service.user.find(ctx.params.id);
  }

  public async create() {
    const { ctx } = this;
    const created = await ctx.service.user.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = created;
  }

  public async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  public async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}