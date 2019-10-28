'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vote_election', {
      election_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      candidate_id: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      voter_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true
      },
      create_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vote_election')
  }
};
