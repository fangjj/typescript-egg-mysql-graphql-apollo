const schema = require('../app/model/friendSchema')

module.exports = {
  up (queryInterface) {
    return queryInterface.createTable('friends', schema, {
      charset: 'utf8mb4'
    })
  },
  down (queryInterface) {
    return queryInterface.dropTable('friends')
  }
}
