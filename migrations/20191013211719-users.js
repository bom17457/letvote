'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.STRING(20),
        allowNull:false,
        primaryKey:true
      },
      fname:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      lname:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      username:{
        type: Sequelize.STRING(100),
        allowNull: false,        
        unique: true,        
      },
      password:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      role:{
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
          model:  {
            tableName: 'role'
          },
          key: 'role'
        }
      },
      status:{
        type: Sequelize.ENUM('enable', 'disable'),
        defaultValue:'enable',
        allowNull:false
      },
      create_datetime:{
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');    
  }
};
