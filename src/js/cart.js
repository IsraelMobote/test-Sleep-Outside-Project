import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");

let total;
const totalSpanElement = document.querySelector(".totalPrice");

returnTotal();

displayTotalPrice();

renderCartContents();

loadHeaderFooter();

function updateCheckoutLink() {
  const checkoutLink = document.querySelector(".checkout");
  checkoutLink.href = `../checkout/?total=${total}`;
}

function renderCartContents() {
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

async function displayTotalPrice() {
  total = await returnTotal();

  totalSpanElement.textContent = total;
  updateCheckoutLink();
}

function returnTotal() {
  total = 0;
  cartItems.forEach((item) => {
    const itemtotal = item.FinalPrice * getLocalStorage(item.Name);
    total += itemtotal;
  });

  return total;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">${getLocalStorage(item.Name)}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
