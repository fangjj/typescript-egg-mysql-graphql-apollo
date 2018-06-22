import { Context, Service } from 'egg';
import { Op } from 'sequelize';

export default class User extends Service {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async curl(id) {
    const result = await this.app.curl(
      `http://127.0.0.1:7001/api/v1/user/${id}`,
      { dataType: 'json' },
    );
    this.app.logger.info('curl', `/api/v1/user/${id}`);
    return result.data;
  }

  public async list({ order_by = 'created_at', order = 'ASC', offset = 0, limit = 10 }) {
    return this.app.model.User.findAndCountAll({
      order: [[ order_by, order.toUpperCase() ]], offset, limit,
    }).then(({rows, count}) => {
      return {
        rows: rows.map((i) => i.toJSON()), count,
      };
    });
  }

  public async find(id: number) {
    const user = await this.app.model.User.findById(id);
    if (!user) {
      return this.ctx.throw(404, 'user not found');
    }
    return user.toJSON();
  }

  public async findMultiple(ids: number[]) {
    const users = await this.app.model.User.findAll({
      where: { id: { [Op.in]: ids } },
    });
    // 需要异常处理
    return users.map((i) => i.toJSON());
  }

  public async create(user) {
    return this.app.model.User.create(user);
  }

  public async update({ id, updates }) {
    const user = await this.app.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    user.update(updates);
    return user;
  }

  public async del(id) {
    const user = await this.app.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    user.destroy();
    return user;
  }
}
