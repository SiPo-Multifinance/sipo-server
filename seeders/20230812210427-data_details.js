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
   await queryInterface.bulkInsert('DataDetails', [{
    ojt_data_id: 2,
    title: 'POSISI & CABANG OJT',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    ojt_data_id: 2,
    title: 'RECAP DAILY REPORT',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    ojt_data_id: 2,
    title: 'RECAP FORM MENTORING',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    ojt_data_id: 2,
    title: 'RECAP REVIEW OJT',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    ojt_data_id: 2,
    title: 'NILAI PANEL & SMART OJT',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    ojt_data_id: 2,
    title: 'MENTOR TEKNIS & NON TEKNIS',
    description: 'lorem ipsum dolor sit amet',
    date: new Date(),
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
    await queryInterface.bulkDelete('DataDetails', null, {});
  }
};
