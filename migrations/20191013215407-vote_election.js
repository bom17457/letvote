'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vote_election', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      election_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'elections',
          },
          key: 'id'
        }
      },
      candidate_id: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      voter_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        }
      },
      create_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    }, {
        uniqueKeys: {
          vote_unique: {
            fields: ['election_id', 'voter_id']
          }
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vote_election')
  }
};
