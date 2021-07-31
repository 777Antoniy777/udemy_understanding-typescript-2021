// 1) в дженериках во избежание ошибок, можно указать типам от каких базовых типов наследоваться
// наследоваться в том числе можно и от number, boolean, string и любых кастомных типов, напр. Person
const combineObj = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
  return Object.assign({}, obj1, obj2);
}

// 2) указазывать дополнительно типы через <> излишне. ts уже знает какие типы мы передаем, благодаря дженерику
const combinedObj1 = combineObj({ name: 'Tony' }, { city: 'Omsk' });
const combinedObj2 = combineObj(
  { name: 'Boris', age: 20, places: ['beach', 'sea', { cafeAmount: 3 }] },
  { city: 'Moscow', district: 'Central' }
);

console.log(combinedObj1, combinedObj2)

// 3) создаем интерфейс со св-ом length, которое есть у массивов, строк и т.д., но нет у чисел
interface LengthyElement {
  length: number;
}

// 4) таким образом мы можем создать какую-либо функцию, которая работает, только с сущностями у которых есть длина
// и в данном примере мы не стали использовать всевозможные комбинации из типов, напр T extends string | Array | function и т.д.
const showLengthyElements = <T extends LengthyElement>(element: T): [T, string] => {
  let infoText = `element has ${element.length} length`;

  return [element, infoText];
};

console.log(showLengthyElements([1, 2]));
console.log(showLengthyElements('very long word'));
console.log(showLengthyElements(Object.keys({ key: 'key' })));
console.log(showLengthyElements((a: number, b: number) => { return a + b }));

// 5) через оператор keyof мы можем гарантировать в дженерике, что необходимый ключ существует в объекте или будет ошибка
const getObjectKey = <T extends object, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};

getObjectKey({ name: 'Tony' }, 'name');

// 6) создаем класс, который принимает все типы значений
class StorageData<T> {
  private content: T[] = [];

  addContentElem(elem: T): void {
    this.content.push(elem);
  }

  getContent(): T[] {
    return [...this.content];
  }

  removeContentElem(elem: T): void {
    const index = this.content.findIndex((contentElem) => elem === contentElem);

    if (index === -1) {
      this.content = [...this.content];
    } else {
      this.content = [...this.content.slice(0, index), ...this.content.slice(index + 1)];
    }
  }
}

// 7) через <> мы можем указать, если это понадобится, принимаемый тип в класс
const storage = new StorageData();
const arr = [1, 2, 3];
storage.addContentElem(true);
storage.addContentElem('str');
storage.addContentElem(arr);
storage.removeContentElem(arr)

console.log(storage.getContent())