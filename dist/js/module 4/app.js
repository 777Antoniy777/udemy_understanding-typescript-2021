"use strict";
const getAnimal = (obj) => {
    if ('tigerSpeed' in obj) {
        return 'tiger';
    }
    return 'lion';
};
getAnimal({ tigerSpeed: 20, tigerType: '' });
//# sourceMappingURL=app.js.map