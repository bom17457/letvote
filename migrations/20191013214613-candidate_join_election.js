'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidate_join_election', {
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
            tableName: 'elections'
          },
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('enable', 'disable'),
        defaultValue: 'enable',
        allowNull: false,
      }
    }, {
        uniqueKeys: {
          user_indo_unique: {
            fields: ['election_id', 'user_id']
          }
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('candidate_join_election')
  }
};
