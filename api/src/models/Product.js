const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
      },
      url_image: {
        type: DataTypes.STRING(255),
      },
      price: {
        type: DataTypes.FLOAT,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: 'product'
    },
  );
};