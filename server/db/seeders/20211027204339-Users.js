'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[{
      username:'admin',
      password:'admin',
      name:'Mateusz',
      email:'name@contact.org',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users',null,{})
  }
};
