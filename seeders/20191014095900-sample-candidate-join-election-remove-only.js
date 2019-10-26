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
    await queryInterface.sequelize.query('PRAGMA foreign_keys = OFF', null, {transaction});    
    await queryInterface.sequelize.query('DELETE FROM `candidate_join_election` WHERE true', null, {transaction});
    await queryInterface.sequelize.query('PRAGMA foreign_keys = ON;', {transaction});
    await transaction.commit()
  }
};
