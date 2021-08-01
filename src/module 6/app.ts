// 1) декораторы применяются к классам во время их объявления, вызывать класс при этом необязательно!
const Logger = (textMessage: string) => {
  return (constructor: Function) => {
    console.log(constructor);
    console.log(textMessage);
  };
};

// 2) сам декоратор мы оборачиваем фабрикой, которая принимает сторонние параметры и не загрязняет реализацию декоратора
// мы можем свободно вызывать сам конструктор внутри декоратора и использовать его методы/свойства
// также даже если св-ва/методы класса защищены, мы можем их использовать или даже менять внутри декоратора
const WithTemplate = (tagName: string, id: string) => {
  return (constructor: any) => {
    const elem = document.querySelector(`#${id}`) as HTMLElement;
    const createdElem = document.createElement(tagName);
    const place1 = new constructor('Central Park');
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