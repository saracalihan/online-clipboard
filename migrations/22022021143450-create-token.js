'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Tokens',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'cascade',
          onDelete: 'cascade',
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        value: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        expired_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tokens');
  }
};