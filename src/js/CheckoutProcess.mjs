import { checkoutData } from "./ExternalServices.mjs";
import { getLocalStorage, getParam } from "./utils.mjs";

const total = parseFloat(getParam("total")).toFixed(2);

const itemList = getLocalStorage('so-cart');

function formDataToJson(formElement) {
    const formData = new FormData(formElement);

    let convertedJson = {};
    formData.forEach(function (value, key) {
        convertedJson[key] = value
    });

    return convertedJson;
}

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
        //this.checkout();

    }

    calculateITemSubTotal() {
        const itemTotalElement = document.querySelector(`${this.outputSelector} .subtotal`);
        itemTotalElement.textContent = `$${total}`;
    }

    displayOrderTotals() {

        this.tax = parseFloat((total * 0.06).toFixed(2));
        if (this.list.length > 1) {
            this.shipping = 10 + (this.list.length - 1) * 2;
        }
        else if (this.list.length = 1) {
            this.shipping = 10;

        }

        this.orderTotal = parseFloat(total) + parseFloat(this.tax) + parseFloat(this.shipping);
        this.orderTotal = this.orderTotal.toFixed(2);

        const taxElement = document.querySelector(`${this.outputSelector} .tax`);
        taxElement.textContent = `$${this.tax}`;

        const shippingElement = document.querySelector(`${this.outputSelector} .shipping`);
        shippingElement.textContent = `$${this.shipping}`;

        const orderTotalElement = document.querySelector(`${this.outputSelector} .order-total`);
        orderTotalElement.textContent = `$${this.orderTotal}`;

    }


    packageItems() {

        const simpleItemList = itemList.map(function (item) {
            return { "id": item.Id, "name": item.Name, "price": item.ListPrice, "quantity": getLocalStorage(item.Name) };

        })
        return simpleItemList;
    }

    async checkout(formElement) {
        await this.displayOrderTotals();

        let JsonObject = formDataToJson(formElement);
        JsonObject.items = this.packageItems();
        JsonObject.orderTotal = this.orderTotal;
        JsonObject.shipping = this.shipping;
        JsonObject.tax = this.tax;
        JsonObject.orderDate = await new Date().toISOString();

        const result = await checkoutData(JsonObject);
        console.log(result.json());

    }


}

