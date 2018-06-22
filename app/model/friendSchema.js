const Sequelize = require('sequelize')
const { INTEGER, DATE } = Sequelize

module.exports = {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  user_id: INTEGER,
  friend_id: INTEGER,
  created_at: DATE,
  updated_at: DATE
}
