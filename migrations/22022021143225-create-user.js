'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        password_hash: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password_salt: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  },
};