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
      username: 'Sanydo',
      password: hashedStudentPassword,
      nik: 202100811,
      first_name: 'Sanydo',
      last_name: 'Pandapotan Cesar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Gunantyo',
      password: hashedStudentPassword,
      nik: 202100808,
      first_name: 'Gunantyo',
      last_name: 'Dyas Wiseto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Ilham',
      first_name: 'Ilham',
      last_name: 'Bintang Mahendra',
      password: hashedStudentPassword,
      nik: 202100809,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Reno',
      nik: 202100810,
      first_name: 'Reno',
      last_name: "Ma'ruf Yuniar",
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Yohana',
      nik: 202100813,
      first_name: 'Yohana',
      last_name: 'Julianti Siregar',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Yanda',
      nik: 202100812,
      first_name: 'Yanda',
      last_name: 'Saputra',
      password: hashedStudentPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      is_admin: false,
      is_student: true,
      username: 'Faisal',
      nik: 202100807,
      first_name: 'Faisal',
      last_name: 'Rahman',
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
