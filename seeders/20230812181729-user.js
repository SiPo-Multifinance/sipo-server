'use strict';
const bcrypt = require('bcrypt');
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
    const hashedAdminPassword = await bcrypt.hash('admin', 10);
    const hashedStudentPassword = await bcrypt.hash('student', 10);
    const hashedManagerPassword = await bcrypt.hash('manager', 10);
    await queryInterface.bulkInsert('Users', [{
      is_admin: true,
      is_student: false,
      username: 'admin',
      password: hashedAdminPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student2',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student3',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student4',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student5',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'student6',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: false,
      username: 'manager',
      password: hashedManagerPassword,
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
