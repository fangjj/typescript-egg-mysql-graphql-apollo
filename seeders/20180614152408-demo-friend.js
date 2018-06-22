module.exports = {
  up (queryInterface, Sequelize) {
    const date = new Date()
    const d = { created_at: date, updated_at: date }
    return queryInterface.bulkInsert('friends', [{
      user_id: 1,
      friend_id: 2,
      ...d
    }, {
      user_id: 1,
      friend_id: 3,
      ...d
    }, {
      user_id: 2,
      friend_id: 1,
      ...d
    }, {
      user_id: 2,
      friend_id: 3,
      ...d
    }, {
      user_id: 3,
      friend_id: 1,
      ...d
    }, {
      user_id: 3,
      friend_id: 2,
      ...d
    }], {})
  },
  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('friends', null, {})
  }
}
