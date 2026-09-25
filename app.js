var products = [
  { name: "Shoe", category: "fashion", price: 5000, image: "photos/shoe-images.jpg" },
  {
    name: "Watch",
    category: "electronics",
    price: 2000,
    image: "photos/watch-images.jpg",
  },
  { name: "Hoodie", category: "clothes", price: 1500, image: "photos/clothes.webp" },
  {
    name: "Coffee Maker",
    category: "home",
    price: 25000 ,
    image: "photos/coffee-maker.webp",
  },
  { name: "Shoe", category: "fashion", price: 5500, image: "photos/brown-shoe.avif" },
  {
    name: "Keyboard",
    category: "electronics",
    price: 15000,
    image: "photos/keyboard.webp",
  },
  { name: "Mouse", category: "electronics", price: 7000, image: "photos/mouse.png" },
  
  { name: "Grinder", category: "home", price: 17000, image: "photos/grinder.webp" },
  
];

var productgrid = document.getElementById("product-grid");

function showProducts() {
  for (var i = 0; i < products.length; i++) {
    productgrid.innerHTML += `<div class ="product-container">
	<img src ="${products[i].image}" width= "100%" height="140" class="product-img" >
	<h3>${products[i].name}</h3>
	<p>${products[i].price}</p>
	<p>${products[i].category}</p></div>
	`;
  }
}

showProducts();

var searchInput = document.getElementById("search-input");

var errorDialog = document.getElementById("errorDialog");
var closeDialog = document.getElementById("closeDialog");

function showSearchedProducts() {
  productgrid.innerHTML = "";

  var searchText = searchInput.value.toLowerCase();
  var found = false;

  for (var i = 0; i < products.length; i++) {
    var selectedProduct = products[i];

    if (
      selectedProduct.name.toLowerCase().includes(searchText) ||
      selectedProduct.category.toLowerCase().includes(searchText)
    ) {
      found = true;

      productgrid.innerHTML += `<div class ="product-container"> <img src ="${products[i].image}" width= "100%" height="140" class="product-img" >
      <h3>${products[i].name}</h3>
      <p>${products[i].price}</p>
      <p>${products[i].category}</p></div>`;
    }
  }

  if (found === false) {
    errorDialog.showModal();
  }
}
searchInput.addEventListener("input", showSearchedProducts);
showSearchedProducts();

closeDialog.addEventListener("click", function () {
  errorDialog.close();
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Bright";
  } else {
    themeToggle.textContent = "Dark";
  }
});

var sortSelect = document.getElementById("sortSelect");

function sortProducts() {
  var sortValue = sortSelect.value;

  if (sortValue === "price-low") {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortValue === "price-High") {
    products.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (sortValue === "name") {
    products.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  showSearchedProducts();
}

sortSelect.addEventListener("change", sortProducts);
sortProducts();
