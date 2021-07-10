"use strict";
const button = document.querySelector('button');
const clickHandler = (val) => {
    console.log(val);
};
button.addEventListener('click', clickHandler.bind(null, 'My value'));
//# sourceMappingURL=app.js.map