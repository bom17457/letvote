'use strict';
let moment = require('moment')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('elections', [{
      topic: 'topic',
      description: 'election description',
      displaytext: 'display',
      start_register_datetime: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
      end_register_datetime: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      start_vote_datetime: moment().add(8, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      end_vote_datetime: moment().add(9, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      status: 'active',
      create_datetime: new Date(),
      owner: '025930461038-1'
    },{
      topic: 'topic Title',
      description: 'election description 2',
      displaytext: 'display',
      start_register_datetime: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
      end_register_datetime: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      start_vote_datetime: moment().add(8, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      end_vote_datetime: moment().add(9, 'days').format('YYYY-MM-DD HH:mm:ss').toString(),
      status: 'active',
      create_datetime: new Date(),
      owner: '025930461038-1'
    },{
      topic: 'topic Title3',
      description: 'election description 2',
      displaytext: 'display',
      start_register_datetime: moment().format('YYYY-MM-DD').toString(),
      end_register_datetime: moment().format('YYYY-MM-DD').toString(),
      start_vote_datetime: moment().format('YYYY-MM-DD').toString(),
      end_vote_datetime: moment().format('YYYY-MM-DD').toString(),
      status: 'active',
      create_datetime: new Date(),
      owner: '025930461038-1'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction(); 
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {transaction});    
    await queryInterface.sequelize.query('truncate table `elections`', null, {transaction});
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', {transaction});
    await transaction.commit()
  }
};
