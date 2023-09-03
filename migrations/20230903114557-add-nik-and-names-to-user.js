'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.addColumn('Users', 'nik', {
        type: Sequelize.INTEGER,
        allowNull: true
      });
      await queryInterface.addColumn('Users', 'first_name', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn('Users', 'last_name', {
        type: Sequelize.STRING,
        allowNull: true
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'nik');
    await queryInterface.removeColumn('Users', 'first_name');
    await queryInterface.removeColumn('Users', 'last_name');
  }
};
