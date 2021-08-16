// 1) декораторы применяются к классам во время их объявления, вызывать класс при этом необязательно!
// использование декораторов возможно при подключении экспериментальной настройки в .tsconfig
const Logger = (textMessage: string) => {
  return (constructor: any) => {
    console.log(constructor);
    console.log(textMessage);
  };
};

// 2) сам декоратор мы оборачиваем фабрикой, которая принимает сторонние параметры и не загрязняет реализацию декоратора
// мы можем свободно вызывать сам конструктор внутри декоратора и использовать его методы/свойства
// также даже если св-ва/методы класса защищены, мы можем их использовать или даже менять внутри декоратора
const WithTemplate = (tagName: string, id: string) => {
  return (currentConstructor: any) => {
    const elem = document.querySelector(`#${id}`) as HTMLElement;
    const createdElem = document.createElement(tagName);
    const place1 = new currentConstructor('Central Park');
    place1.title = 'New-York Central Park';

    createdElem.textContent = place1.title;
    elem.append(createdElem);
  };
};

@Logger('Test Message')
@WithTemplate('h1', 'template')
class Place {
  constructor(protected title: string) {
    this.title = title;
  }
}

// -- 2 --

// 3) мы также можем применять декоратор к отдельным св-вам или методам класса
const Log = (constructor: any, prop: string) => {
  console.log('Property decorator', constructor, prop)
}

// 4) для методов также есть 3 параметр - descriptor
const Log2 = (constructor: any, prop: string, descriptor: PropertyDescriptor) => {
  console.log('Method decorator', constructor, prop, descriptor)
}

// 5) для параметров функций 3 параметр - position
const Log3 = (constructor: any, prop: string, position: number) => {
  console.log('Parameter decorator', constructor, prop, position)
}

class Product {
  @Log
  title: string;
  private price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  @Log2
  set setPrice(val: number) {
    this.price = val;
  }

  @Log2
  getTransformedPrice(@Log3 tax: number): number {
    return this.price * tax;
  }
}

new Product('', 20);

// -- 3 --

// 7) декоратор связывает метод с будущим объектом получаемым из класса
// и таким образом мы уже не зависим от контекста листенера
const Autobind = (_: any, _1: string, descriptor: PropertyDescriptor) => {
  const method = descriptor.value;

  // 8) присваиваем новый метод get в обновленном descriptor и даем новый контекст
  // и возвращаем descriptor
  const updatedDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    }
  }

  return updatedDescriptor;
};

class Printer {
  message = 'Some message';

  @Autobind
  showMessage() {
    console.log('this from Printer', this)
    console.log(this.message);
  }
}

const printer = new Printer();

// 6) при вызове метода класса в качестве листенера, мы сталкиваемся с тем, что
// this присваивается объекту до точки и в данном случае это button
// и в методе showMessage у нас будет результатом undefined
// чтобы это исправить нужно либо применить метод bind напрямую, либо создать декоратор
button.addEventListener('click', printer.showMessage);