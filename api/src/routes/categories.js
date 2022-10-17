const express = require("express");
const router = express.Router();
const { Category, Product } = require("../db.js");
const { getCategories, getProducts, getProductByCategory } = require("../controller/controller");
const model = 

router.get("/", async (req, res) => {
  try {
    const categories = await getCategories()
  
    res.json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
  let {id}= req.params
  let productsWithCategory = await getProductByCategory()
  try{
   let productByCategory = productsWithCategory.filter((product) =>
    product.categoryName.id == id)
   res.send(productByCategory ) 
  }catch(error){
    res.send(error);
  }
})

module.exports = router;