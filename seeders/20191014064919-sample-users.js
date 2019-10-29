'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '025930461038-1',
      fname: 'authority',
      lname: 'authority',
      username: 'authority',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'authority',
      status: 'enable',
      create_datetime: new Date()
    },
    {
      id: '025930461038-2',
      fname: 'candidate1',
      lname: 'candidate1',
      username: 'candidate1',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'candidate',
      status: 'enable',
      create_datetime: new Date()
    },
    {
      id: '025930461038-3',
      fname: 'candidate2',
      lname: 'candidate2',
      username: 'candidate2',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'candidate',
      status: 'enable',
      create_datetime: new Date()
    },
    {
      id: '025930461038-4',
      fname: 'voter1',
      lname: 'voter1',
      username: 'voter1',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'voter',
      status: 'enable',
      create_datetime: new Date()
    },
    {
      id: '025930461038-5',
      fname: 'voter2',
      lname: 'voter2',
      username: 'voter2',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'voter',
      status: 'enable',
      create_datetime: new Date()
    },
    {
      id: '025930461038-6',
      fname: 'voter3',
      lname: 'voter3',
      username: 'voter3',
      password: '$2b$10$YfdcarD0zRuv69SzJMyjDuyrZj2ZMJ.bM3C5.9d987XKviSMxBfS.',
      role: 'voter',
      status: 'enable',
      create_datetime: new Date()
    }
    ], {logging:console.log}).catch((err) => {
      console.log(err)
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
};
