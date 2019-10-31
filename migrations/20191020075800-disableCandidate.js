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
        references: {
          model: {
            tableName: 'candidate_join_election',
          },
          key: 'election_id'
        }
      },
      candidate_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: 'candidate_join_election'
          },
          key: 'user_id'
        }
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
