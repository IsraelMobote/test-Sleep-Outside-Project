import CheckoutProcess from "./checkoutProcess.mjs";
import { checkoutData } from "./ExternalServices.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const checkoutProcess = new CheckoutProcess("so-cart", ".order-summary");

<<<<<<< HEAD
const formInputs = document.querySelectorAll("form input");

formInputs[5].addEventListener("input", () => {
  if (checkFormZipCodeIsFilled()) {
    checkoutProcess.init();
  }
});

let checkFormZipCodeIsFilled = function () {
  let formZipCodeFilled = false;

  if (formInputs[5].validity.valid) {
    formZipCodeFilled = true;
  }

  return formZipCodeFilled;
};

checkoutProcess.calculateITemSubTotal();

const formElement = document.querySelector("#checkout");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  checkoutProcess.checkout();
});
=======
const formInputs = document.querySelectorAll('form input');

formInputs[5].addEventListener("input", () => {
    if (checkFormZipCodeIsFilled()) {
        checkoutProcess.init();
    }
})

let checkFormZipCodeIsFilled = function () {

    let formZipCodeFilled = false;

    if (formInputs[5].validity.valid) {

        formZipCodeFilled = true;
    }


    return formZipCodeFilled;
}



checkoutProcess.calculateITemSubTotal();


const formElement = document.querySelector("#checkout");

formElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    checkoutProcess.checkout();
}

)
>>>>>>> 361ac385a19333ec456632670a69b74a5030e942
