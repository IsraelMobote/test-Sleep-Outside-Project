import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");

let total;
const totalSpanElement = document.querySelector(".totalPrice");

<<<<<<< HEAD
=======

>>>>>>> 361ac385a19333ec456632670a69b74a5030e942
returnTotal();

displayTotalPrice();

renderCartContents();

loadHeaderFooter();

function updateCheckoutLink() {
  const checkoutLink = document.querySelector(".checkout");
  checkoutLink.href = `../checkout/?total=${total}`;
<<<<<<< HEAD
}

function renderCartContents() {
=======

}

function renderCartContents() {
  console.log(cartItems);
>>>>>>> 361ac385a19333ec456632670a69b74a5030e942
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

async function displayTotalPrice() {
<<<<<<< HEAD
=======

>>>>>>> 361ac385a19333ec456632670a69b74a5030e942
  total = await returnTotal();

  totalSpanElement.textContent = total;
  updateCheckoutLink();
<<<<<<< HEAD
}

function returnTotal() {
  total = 0;
  cartItems.forEach((item) => {
=======

}

function returnTotal() {
  let total = 0;
  cartItems.forEach(item => {
>>>>>>> 361ac385a19333ec456632670a69b74a5030e942
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
