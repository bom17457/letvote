'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {        
    await queryInterface.bulkInsert('role', [
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
