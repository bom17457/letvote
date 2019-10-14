'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('login', 'status', {
      type: Sequelize.STRING
    }, {
      after: 'user_id'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('login', 'status')
  }
};
