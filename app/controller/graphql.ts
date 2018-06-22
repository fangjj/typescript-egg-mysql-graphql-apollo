import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import { Context, Controller } from 'egg';
import { koa as voyagerMiddleware } from 'graphql-voyager/middleware';
import { FriendConnector, UserConnector, UserCurlConnector } from '../graphql/connector';
import schema from '../graphql/schema';

export default class GraphqlController extends Controller {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async ql() {
    const { ctx } = this;

    await graphqlKoa({
      schema,
      context: {
        ctx,
        connector: {
          friend: new FriendConnector(ctx),
          user: new UserConnector(ctx),
          user_curl: new UserCurlConnector(ctx),
        },
      },
      debug: true,
    })(ctx, () => true);
  }

  public async voyager() {
    const { ctx } = this;
    await voyagerMiddleware({ endpointUrl: '/graphql' })(ctx, () => true);
  }

  public async iql() {
    const { ctx } = this;

    await graphiqlKoa({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://127.0.0.1:5000/subscription`,
    })(ctx);
  }
}
