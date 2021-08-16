"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (textMessage) => {
    return (constructor) => {
        console.log(constructor);
        console.log(textMessage);
    };
};
const WithTemplate = (tagName, id) => {
    return (currentConstructor) => {
        const elem = document.querySelector(`#${id}`);
        const createdElem = document.createElement(tagName);
        const place1 = new currentConstructor('Central Park');
        place1.title = 'New-York Central Park';
        createdElem.textContent = place1.title;
        elem.append(createdElem);
    };
};
let Place = class Place {
    constructor(title) {
        this.title = title;
        this.title = title;
    }
};
Place = __decorate([
    Logger('Test Message'),
    WithTemplate('h1', 'template')
], Place);
const Log = (constructor, prop) => {
    console.log('Property decorator', constructor, prop);
};
const Log2 = (constructor, prop, descriptor) => {
    console.log('Method decorator', constructor, prop, descriptor);
};
const Log3 = (constructor, prop, position) => {
    console.log('Parameter decorator', constructor, prop, position);
};
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    set setPrice(val) {
        this.price = val;
    }
    getTransformedPrice(tax) {
        return this.price * tax;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "setPrice", null);
__decorate([
    Log2,
    __param(0, Log3)
], Product.prototype, "getTransformedPrice", null);
new Product('', 20);
const Autobind = (_, _1, descriptor) => {
    const method = descriptor.value;
    const updatedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this);
        }
    };
    return updatedDescriptor;
};
class Printer {
    constructor() {
        this.message = 'Some message';
    }
    showMessage() {
        console.log('this from Printer', this);
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
button.addEventListener('click', printer.showMessage);
//# sourceMappingURL=app.js.map