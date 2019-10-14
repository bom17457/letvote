'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [
      {
        role: 'authority'
      },
      {
        role: 'candidate'
      },
      {
        role: 'voter'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op
    return queryInterface.bulkDelete('role')
  }
};
