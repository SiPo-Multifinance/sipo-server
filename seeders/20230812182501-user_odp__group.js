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
    await queryInterface.bulkInsert('UserODPGroups', [
      {
        user_id: 2,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()},
      {
        user_id: 4,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ,
      {
        user_id: 8,
        odp_group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserODPGroups', null, {});
  }
};
