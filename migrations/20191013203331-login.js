'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('login', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      token: Sequelize.STRING(500),
      user_id: Sequelize.STRING,
      create_datetime: Sequelize.DATE,      
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('login');    
  }
};
