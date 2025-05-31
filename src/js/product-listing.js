import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

const productCategory = document.querySelector(".product-category");
productCategory.textContent =
    category.charAt(0).toUpperCase() + category.slice(1);

const productData = new ProductData();

const listElement = document.querySelector(".product-list");
const list = new ProductList(category, productData, listElement);

list.init();
