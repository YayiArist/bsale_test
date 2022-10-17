const express = require("express");
const router = express.Router();
const { Product } = require("../db");
const { getProducts, getCategories, sortByPrice } = require("../controller/controller");

router.get("/", async (req, res) => {
  const { name } = req.query;

  let products = await getProducts();
  try {
    if (name) {
      let productName = await products.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      !productName.length
        ? res.json(products) : res.json(productName)
      
    } else {
      res.json(products);
    }
  } catch (error) {
    res.send(err);
  }
});



router.post("/sorted", async (req, res) => {
    const { sort } = req.query
    console.log("qury",req.query)
   
  try{
    let sorted= await sortByPrice(sort)
    res.send(sorted)
  } catch (error) {
    res.send(err);
  }
});





module.exports = router;
