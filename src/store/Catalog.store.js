import { makeAutoObservable } from "mobx";

export class Catalog {
    productList = [];

    constructor() {
        makeAutoObservable(this);
    }

    get products() {
        return this.productList;
    }

    delProductById(id) {
        const index = this.productList.findIndex(
            (product) => product.id === id
        );

        if (index !== -1) this.productList.splice(index, 1);
    }

    addProduct(product) {
        this.productList.push(product);
    }

    changeProduct(product) {
        const index = this.productList.findIndex((p) => p.id === product.id);

        if (index !== -1) this.productList[index] = product;
    }

    setProductList(productList) {
        this.productList = productList;
    }
}
