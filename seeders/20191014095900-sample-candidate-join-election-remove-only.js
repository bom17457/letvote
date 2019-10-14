'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction(); 
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {transaction});    
    await queryInterface.sequelize.query('truncate table `candidate_join_election`', null, {transaction});
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', {transaction});
    await transaction.commit()
  }
};
