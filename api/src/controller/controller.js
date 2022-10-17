const axios = require ("axios")
const { Product, Category } = require("../db");
const { Op } = require("sequelize");

const getProducts = async()=>{
    allProducts = await Product.findAll();
    return allProducts

}


const getCategories = async()=>{
    allCategories = await Category.findAll();
    return allCategories
}

const getProductByCategory = async()=>{
    const products = await Product.findAll({
        include:{
          model : Category, as: "categoryName" 
        }
      })
      return products
}

const sortByPrice = async(sort)=>{
    const products= await getProducts()
    if(sort==='toLow'){
        let sorted = products.sort((a,b)=>b.price - a.price)
return sorted
    }else if(sort==='toHigh'){
        let sorted = products.sort((a,b)=>a.price - b.price)
return sorted
    }
   return products
    
}


module.exports = {
    getProducts,
    getCategories, 
    getProductByCategory,
    sortByPrice
  }