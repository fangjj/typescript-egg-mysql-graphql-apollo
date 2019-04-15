# graphql-demo

showcase using TypeScript && Egg && GraphQL && MySQL(Docker)

## 快速启动

### Development

```bash
docker-compose up

npm i
npm run dev

open http://127.0.0.1:7001/api/v1/user # RESTful APIs
open http://127.0.0.1:7001/api/v1/user/1
open http://127.0.0.1:7001/api/user/1/friend_ids
open http://127.0.0.1:7001/api/user/1/friends
open http://127.0.0.1:7001/api/v2/user/1
open http://127.0.0.1:7001/api/v3/user/1

open http://127.0.0.1:7001/graphiql # GraphQL API
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

<!-- ### Deploy

```bash
npm run tsc
npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once -->

### Requirement

- Node.js 8.x
- Typescript 2.8+
- docker 18+


### Links
[知乎](https://zhuanlan.zhihu.com/p/38393983)
