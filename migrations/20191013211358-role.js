'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role', {
      role:{
        type:Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role');    
  }
};
