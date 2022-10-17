const items = document.getElementById("content");

//---------- Pintar productos

function displayProducts(productList) {
  let productsHTML = "";

  productList.forEach((product) => {
    if (product.url_image) {
      productsHTML += `<div class="productContainer">
    <div class= "imgContainer">
    <img src= ${product.url_image} alt="">
    </div>
    <h3 class="productName">${product.name}</h3>
    <span class="price">Precio: $${product.price}</span>
    <button id=${product.id} class="addButton" >Agregar</button>
    </div>`;
    } else {
      productsHTML += `<div class="productContainer">
  <div class= "imgContainer">
  <img src= "https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg" alt="">
  </div>
  <h3 class="productName">${product.name}</h3>
  <span class="price">Precio: $${product.price}</span>
  <button id="addButton" class="addButton" >Agregar</button>
  </div>`;
    }
  });

  document.getElementById("content").innerHTML = productsHTML;
}
//---------Pintar categorias

function displayCategories(categories) {
  let categoriesHTML = `<button class="setCategory" onclick=search()>VER TODOS</button>`;
  categories.forEach((c) => {
    categoriesHTML += `  <button class="setCategory" onclick=setCategory(${c.id})>${c.name}</button>`;
  });

  document.getElementById("categoryFilters").innerHTML = categoriesHTML;
}

//--------------Buscar por categoria
async function setCategory(id) {
  let products = await axios.get(`/api/categories/${id}`);
  displayProducts(products.data);
}

//----------Barra de busqueda

async function search() {
  let isVisible = "true";
  let search = document.getElementById("search").value;
  let product = await axios.get(`/api/products?name=${search}`);
  document.getElementById("search").value = "";
  displayProducts(product.data);
}
//----------Ordenacion por precio
async function priceSort() {
  let sort = document.getElementById("sort").value;
  let sortedProducts = await axios.post(`/api/products/sorted?sort=${sort}`);
  displayProducts(sortedProducts.data);
}

//----------------
window.onload = async () => {
  let productList = [];
  productList = await axios.get("/api/products");
  categories = await axios.get("/api/categories");

  displayProducts(productList.data);
  displayCategories(categories.data);
};
