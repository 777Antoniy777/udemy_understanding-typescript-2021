"use strict";
const number1 = 5;
const number2 = 2.7;
const user = {
    name: 'Tony',
    age: 25,
    cities: [2, 'moscow'],
};
// 2) Пример того, что результат вызова коллбэка
// можно описать через void и в ts не будет ошибки
const sum = (val1, val2, cb) => {
    const res = (val1 + val2).toString();
    console.log(cb(res));
    return;
};
const func = (param) => {
    return param + 22;
};
console.log(sum(number1, number2, func));
// 3) Пример использования типа never
// он возвращается всегда при throw, т.к. ф-ция не возвращает НИЧЕГО
const generateError = (param) => {
    if (param) {
        throw {
            error: 'error',
            message: 'just message',
            data: [1, 2],
        };
    }
};
try {
    generateError(true);
}
catch (err) {
    console.log(err);
}
function User(name, age) {
    this.name = name;
    this.age = age + 1;
}
const user1 = new User('Anton', 24);
console.log(user1);
//# sourceMappingURL=app.js.map