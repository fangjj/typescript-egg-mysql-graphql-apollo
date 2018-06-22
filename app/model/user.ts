import { Application } from 'egg';
import schema = require('./userSchema.js');
import schemaOption = require('./schemaOption.js');

export default (app: Application) => {
  const model = app.model.define(
    'user',
    schema,
    schemaOption,
  );
  // model.prototype.associate = function() {
  //   app.model.User.hasMany(app.model.Friend, { as: 'friends', foreignKey: 'user_id' });
  // };
  return model;
};
