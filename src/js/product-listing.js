import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();

const category = getParam("category");
const productData = new ProductData(category);

const listElement = document.querySelector(".product-list");
const list = new ProductList(category, productData, listElement);

list.init();