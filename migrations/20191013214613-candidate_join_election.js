'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidate_join_election', {
      election_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model:'elections',
          key: 'id'
        }
      },
      user_id:{
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
        references: {
          model:'users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('enable', 'disable'),
        defaultValue: 'enable',
        allowNull: false,        
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('candidate_join_election')
  }
};
