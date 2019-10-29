'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vote_election', [{
      election_id:1,
      candidate_id:'025930461038-2',
      voter_id: '025930461038-4',
      create_datetime: new Date()
    },{
      election_id:1,
      candidate_id:'025930461038-2',
      voter_id: '025930461038-6',
      create_datetime: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    if(process.env.NODE_ENV == 'test'){
      await queryInterface.sequelize.query('PRAGMA foreign_keys = OFF', null, { transaction });
      await queryInterface.sequelize.query('DELETE FROM `vote_election` WHERE true', null, { transaction });
      await queryInterface.sequelize.query('PRAGMA foreign_keys = ON', { transaction });
    }else{
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, { transaction });
      await queryInterface.sequelize.query('DROP TABLE `vote_election`', null, { transaction });
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { transaction });
    }
    await transaction.commit()
  }
};
