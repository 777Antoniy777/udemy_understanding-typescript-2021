"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Logger = (textMessage) => {
    return (constructor) => {
        console.log(constructor);
        console.log(textMessage);
    };
};
const WithTemplate = (tagName, id) => {
    return (constructor) => {
        const elem = document.querySelector(`#${id}`);
        const createdElem = document.createElement(tagName);
        const place1 = new constructor('Central Park');
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
//# sourceMappingURL=app.js.map