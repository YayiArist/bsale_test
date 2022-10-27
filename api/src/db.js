require("dotenv").config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const ProductModel = require('./models/Product')
const ProductCategory = require('./models/category.js')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST 
} = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "mysql",
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
  // Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category} = sequelize.models;

/* const Product = ProductModel(sequelize, Sequelize);
const Category = ProductCategory(sequelize, Sequelize); */

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
  ...sequelize.models
};



