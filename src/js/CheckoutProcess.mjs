import { getLocalStorage, getParam } from "./utils.mjs";

const total = parseFloat(getParam("total")).toFixed(2);

export default class CheckoutProcess {

    list = [];

    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key);
        this.displayOrderTotals();
      
    }

    calculateITemSubTotal() {
          console.log(this.list.length);
        const itemTotalElement = document.querySelector(`${this.outputSelector} .subtotal`);
        itemTotalElement.textContent = `$${total}`;
    }

    displayOrderTotals() {
        
        this.tax = parseFloat((total * 0.06).toFixed(2));
        if (this.list.length > 1) {
            console.log(5);
            this.shipping = 10 + (this.list.length - 1) * 2;
        }
        else if (this.list.length = 1) {
            this.shipping = 10;
           
        }
        this.orderTotal = parseFloat(total) + parseFloat(this.tax) + parseFloat(this.shipping);

        const taxElement = document.querySelector(`${this.outputSelector} .tax`);
        taxElement.textContent = `$${this.tax}`;

        const shippingElement = document.querySelector(`${this.outputSelector} .shipping`);
        shippingElement.textContent = `$${this.shipping}`;

        const orderTotalElement = document.querySelector(`${this.outputSelector} .order-total`);
        orderTotalElement.textContent = `$${this.orderTotal.toFixed(2)}`;

    }

}