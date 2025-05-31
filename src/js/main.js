import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const productData = new ProductData("tents");

const listElement = document.querySelector(".product-list");
const list = new ProductList("sleeping-bags", productData, listElement);

list.init();
loadHeaderFooter();
