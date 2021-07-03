const number1 = 5;
const number2 = 2.7;

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const user: {
  name: string;
  age: number;
  cities: [number, string];
} = {
  name: 'Anton',
  age: 25,
  cities: [2, 'moscow'],
};

console.log(user.cities)