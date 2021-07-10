const button = document.querySelector('button') as HTMLButtonElement;

// 1) Использование bind позволяет избежать доп. функций для передачи параметров
// для evt придется делать либо анонимную функцию, либо отдельную
// NOTICE: во Vue это уже учтено
const clickHandler = (val: string): void => {
  console.log(val);
};

button.addEventListener('click', clickHandler.bind(null,'My value'));