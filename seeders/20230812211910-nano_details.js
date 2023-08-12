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
   await queryInterface.bulkInsert('NanoDetails', [{
    title: 'ODP - CABANG DEPOK',
    date: '2022-04-01',
    description: 'lorem ipsum dolor sit amet',
    data_details_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    title: 'ODP - CABANG DEPOK',
    date: '2022-04-02',
    description: 'lorem ipsum dolor sit amet',
    data_details_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    title: 'ODP - CABANG DEPOK',
    date: '2022-04-03',
    description: 'lorem ipsum dolor sit amet',
    data_details_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    title: 'MENTOR TEKNIS - CABANG DEPOK',
    date: '2022-04-04',
    description: 'lorem ipsum dolor sit amet',
    data_details_id: 1,
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
    await queryInterface.bulkDelete('NanoDetails', null, {});
  }
};
