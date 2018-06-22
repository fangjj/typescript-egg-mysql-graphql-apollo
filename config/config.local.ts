import { DefaultConfig } from './config.default';
import * as conf from './config.json';

export default () => {
  const config: DefaultConfig = {};

  config.sequelize = (conf as any).development;

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
