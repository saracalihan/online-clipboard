'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Clipboards',
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
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        header: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        text: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        token_value: {
          type: Sequelize.STRING
        },
        is_shared: {
          allowNull: true,
          type: Sequelize.BOOLEAN ,
          defaultValue: false
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      },
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Clipboards');
  },
};