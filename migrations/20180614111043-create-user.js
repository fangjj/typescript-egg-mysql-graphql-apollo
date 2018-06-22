const schema = require('../app/model/userSchema')

module.exports = {
  up (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('user', { id: Sequelize.INTEGER })
    */
    return queryInterface.createTable('users', schema, {
      charset: 'utf8mb4'
    })
  },
  down (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users')
    */
    return queryInterface.dropTable('users')
  }
}
