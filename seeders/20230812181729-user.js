'use strict';

const { query } = require('express');

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
    await queryInterface.bulkInsert('Users', [{
      is_admin: true,
      is_student: false,
      username: 'admin',
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student',
      password: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student2',
      password: 'student2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student3',
      password: 'student3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: false,
      username: 'manager',
      password: 'manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
