require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((err) => {
    console.log(err);
  });

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Category, Product } = sequelize.models;

Product.belongsTo(Category, { as: "category_name", foreignKey: "category" });
Category.hasMany(Product, { as: "product", foreignKey: "category" });

module.exports = {
  ...sequelize.models,
  conn: sequelize, 
};