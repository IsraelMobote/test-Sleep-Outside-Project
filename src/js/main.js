import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const productData = new ProductData("tents");

const listElement = document.querySelector('.product-list');
const list = new ProductList(productData, listElement);

list.init();

