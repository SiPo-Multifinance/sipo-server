'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('OJTData', [{
    user_id: 2,
    title: 'DATA INCLASS',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    user_id: 2,
    title: 'DATA OJT',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    user_id: 2,
    title: 'DATA PENUGASAN',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ] , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('OJTData', null, {});
  }
};
