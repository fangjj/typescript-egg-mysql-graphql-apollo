// app.js
import { Application } from 'egg';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import schema from './app/graphql/schema/index';

const start = (app: Application) => {
  app.beforeStart(async () => {
    const server = app.listen();
    SubscriptionServer.create(
      {
        schema,
        execute,
        subscribe,
      },
      {
        server,
        host: '127.0.0.1',
        port: 5000,
        path: '/subscription',
      },
    );
  });
};

export default start;
