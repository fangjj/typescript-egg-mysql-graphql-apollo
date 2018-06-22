module.exports = {
  up (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {})
    */
    const date = new Date()
    const d = { created_at: date, updated_at: date }
    return queryInterface.bulkInsert('users', [{
      name: 'zhangchen',
      gender: 'male',
      age: 28,
      ...d
    }, {
      name: 'zhangyuan',
      gender: 'female',
      age: 27,
      ...d
    }, {
      name: 'chenzhang',
      gender: 'secret',
      age: 28,
      ...d
    }], {})
  },

  down (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {})
  }
}
