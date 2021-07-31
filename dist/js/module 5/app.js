"use strict";
const combineObj = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2);
};
const combinedObj1 = combineObj({ name: 'Tony' }, { city: 'Omsk' });
const combinedObj2 = combineObj({ name: 'Boris', age: 20, places: ['beach', 'sea', { cafeAmount: 3 }] }, { city: 'Moscow', district: 'Central' });
console.log(combinedObj1, combinedObj2);
const showLengthyElements = (element) => {
    let infoText = `element has ${element.length} length`;
    return [element, infoText];
};
console.log(showLengthyElements([1, 2]));
console.log(showLengthyElements('very long word'));
console.log(showLengthyElements(Object.keys({ key: 'key' })));
console.log(showLengthyElements((a, b) => { return a + b; }));
const getObjectKey = (obj, key) => {
    return obj[key];
};
getObjectKey({ name: 'Tony' }, 'name');
class StorageData {
    constructor() {
        this.content = [];
    }
    addContentElem(elem) {
        this.content.push(elem);
    }
    getContent() {
        return [...this.content];
    }
    removeContentElem(elem) {
        const index = this.content.findIndex((contentElem) => elem === contentElem);
        if (index === -1) {
            this.content = [...this.content];
        }
        else {
            this.content = [...this.content.slice(0, index), ...this.content.slice(index + 1)];
        }
    }
}
const storage = new StorageData();
const arr = [1, 2, 3];
storage.addContentElem(true);
storage.addContentElem('str');
storage.addContentElem(arr);
storage.removeContentElem(arr);
console.log(storage.getContent());
//# sourceMappingURL=app.js.map