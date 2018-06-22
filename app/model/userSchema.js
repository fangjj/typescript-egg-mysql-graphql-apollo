const Sequelize = require('sequelize')
const { INTEGER, STRING, ENUM, TINYINT, DATE } = Sequelize

module.exports = {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  name: STRING(20),
  gender: ENUM('Male', 'Female', 'Secret'),
  age: TINYINT(3),
  created_at: DATE,
  updated_at: DATE
}
