import { Application } from 'egg';
import schema = require('./friendSchema.js');
import schemaOption = require('./schemaOption.js');

export default (app: Application) => {
  const model = app.model.define(
    'friend',
    schema,
    schemaOption,
  );
  return model;
};
