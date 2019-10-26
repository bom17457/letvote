'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vote_election', {
      election_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'candidate_join_election',
          key: 'election_id'
        }
      },
      candidate_id: {
        type: Sequelize.STRING(20),
        allowNull: false,        
        references: {
          model: 'candidate_join_election',
          key: 'user_id'
        }
      },
      voter_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
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
