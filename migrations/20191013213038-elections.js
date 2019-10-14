'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('elections', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      topic:{
        type: Sequelize.STRING(50),
        allowNull: false,        
      },
      description: {
        type: Sequelize.STRING(70),
        allowNull: true
      },
      displaytext: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      start_register_datetime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      end_register_datetime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      start_vote_datetime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      end_vote_datetime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue:'active'
      },
      create_datetime:{
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      owner: {
        type: Sequelize.STRING(20),
        allowNull:false,
        references: {
          model:'users',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('elections');    
  }
}
