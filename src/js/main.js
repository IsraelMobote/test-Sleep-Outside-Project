import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const externalServices = new ExternalServices();

const listElement = document.querySelector(".product-list");
const list = new ProductList("tents", externalServices, listElement);

list.init();
loadHeaderFooter();
