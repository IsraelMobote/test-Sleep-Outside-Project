import { getParam, loadHeaderFooter, scrollToTop } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");

const cartContainer = document.querySelector(".cartItems");

const product = new ProductDetails(productId, dataSource, cartContainer);
product.init();
product.renderCart();

const clearCartButton = document.querySelector(".clearCart");
clearCartButton.addEventListener("click", () => {
  cartContainer.innerHTML = "";
  localStorage.clear();
});

export async function animateBagPackIcon() {
  await loadHeaderFooter();

  const BagPackIconDiv = document.querySelector(".cart");
  const addToCartButton = document.querySelector("#addToCart");

  addToCartButton.addEventListener("click", () => {
    scrollToTop();
    BagPackIconDiv.classList.add("animate");

    setTimeout(() => {
      BagPackIconDiv.classList.remove("animate");
    }, 3000);
  });
}

animateBagPackIcon();
