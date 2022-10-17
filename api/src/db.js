require("dotenv").config();
const { Sequelize } = require('sequelize');
const ProductModel = require('./models/Product')
const ProductCategory = require('./models/category.js')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "mysql",
});

const Product = ProductModel(sequelize, Sequelize);
const Category = ProductCategory(sequelize, Sequelize);

Product.belongsTo(Category, { as: "categoryName", foreignKey: "category" });
Category.hasMany(Product, { as: "product", foreignKey: "category" });


sequelize
  .authenticate()
  .then(()=>{
    console.log("BD connected")
  })
  .catch((err)=>{
console.log(err)
  })



module.exports = {
  Product,
  Category     
};



