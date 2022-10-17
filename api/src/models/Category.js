const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
      tableName: 'category',
    },
  );
};