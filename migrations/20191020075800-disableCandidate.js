'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('disableCandidate', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      election_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      candidate_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      reason:{
        type: Sequelize.STRING,
        allowNull: false      
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('disableCandidate')
  }
};
