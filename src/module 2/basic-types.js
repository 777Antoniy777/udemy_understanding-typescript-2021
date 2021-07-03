var number1 = 5;
var number2 = 2.7;
var user = {
    name: 'Tony',
    age: 25,
    cities: [2, 'moscow']
};
// 2) Пример того, что результат вызова коллбэка
// можно описать через void и в ts не будет ошибки
var sum = function (val1, val2, cb) {
    var res = (val1 + val2).toString();
    console.log(cb(res));
    return;
};
var func = function (param) {
    return param + 22;
};
console.log(sum(number1, number2, func));
// 3) Пример использования типа never
// он возвращается всегда при throw, т.к. ф-ция не возвращает НИЧЕГО
var generateError = function (param) {
    if (param) {
        throw {
            error: 'error',
            message: 'just message',
            data: [1, 5]
        };
    }
};
try {
    generateError(true);
}
catch (err) {
    console.log(err);
}
// 4) Пример ф-ции Конструктора
// в них всегда возврат void
function User(name, age) {
    this.name = name;
    this.age = age + 1;
}
var user1 = new User('Anton', 24);
console.log(user1);
