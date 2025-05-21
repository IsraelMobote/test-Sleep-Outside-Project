import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `
    <li class="product-card">
            <a href="product_pages/?product=${product.Id}">
              <img
                src="${product.Image}"
                alt="${product.Name}"
              />
              <h2 class="card__brand">${product.Brand.Name}</h2>
              <h3 class="card__name">${product.Name}</h3>
              <p class="product-card__price">$${product.ListPrice}</p>
            </a></li>
          `
}

export default class ProductList {
    constructor(datasource, listElement) {
        // this.category = category;
        this.datasource = datasource;
        this.listElement = listElement;
    }

    async init() {
        const productList = await this.datasource.getData();
        this.renderList(productList);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list)
    }
}
