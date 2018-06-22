import { Context, Service } from 'egg';
import { groupBy, map } from 'lodash';
import { Op } from 'sequelize';

export default class Friend extends Service {

  constructor(ctx: Context) {
    super(ctx);
  }

  static mapFriendId (res) {
    return map(res, (i) => i.friend_id);
  }

  public async findFriendIds(id: number) {
    const friendIds = await this.app.model.Friend.findAll({
      where: { user_id: id },
    });
    // 需要异常处理
    return Friend.mapFriendId(friendIds);
  }

  public async findFriendIdsMultiple(ids: number[]) {
    const friendIds = await this.app.model.Friend.findAll({
      where: { user_id: { [Op.in]: ids } },
    });
    // 需要异常处理
    const group = groupBy(friendIds, (i) => i.user_id)
    return map(group, (i) => Friend.mapFriendId(i));
  }
}
