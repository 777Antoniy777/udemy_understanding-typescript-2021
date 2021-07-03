const number1 = 5;
const number2 = 2.7;

// 1) Стандартный алиас type и его использование
type User = {
  name: string;
  age: number;
  cities: [number, string];
};

const user: User = {
  name: 'Tony',
  age: 25,
  cities: [2, 'moscow'],
};

// 2) Пример того, что результат вызова коллбэка
// можно описать через void и в ts не будет ошибки
const sum = (val1: number, val2: number, cb: (param: string) => void): void => {
  const res = (val1 + val2).toString();
  console.log(cb(res));

  return;
};

const func = (param: string): string => {
  return param + 22;
};

console.log(sum(number1, number2, func));

// 3) Пример использования типа never
// он возвращается всегда при throw, т.к. ф-ция не возвращает НИЧЕГО
const generateError = (param?: any): void | never => {
  if (param) {
    throw {
      error: 'error',
      message: 'just message',
      data: [1, 5],
    };
  }
};

try {
  generateError(true);
} catch (err) {
  console.log(err)
}

// 4) Пример ф-ции Конструктора
// в них всегда возврат void
function User(name: string, age: number): void {
  this.name = name;
  this.age = age + 1;
}

const user1 = new User('Anton', 24);

console.log(user1)
