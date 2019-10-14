'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.bulkInsert('candidate_join_election',[
      {
        election_id: 1,
        user_id: '025930461038-2'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction(); 
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {transaction});    
    await queryInterface.sequelize.query('truncate table `candidate_join_election`', null, {transaction});
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', {transaction});
    await transaction.commit()
  }
};
