interface Lion {
  lionSpeed: string;
}

interface Tiger {
  tigerType: string;
  tigerSpeed: number;
}

type UAnimal = Lion | Tiger;

// 1) при различных параметрах входа, мы можем выдать результат от наличия элемента в объекте через оператор in (JS оператор)
// проверить через obj.prop не получится, т.к. TS не знает какой именно тип входит в параметр
// 2) для классов используется метод JS instanceof
const getAnimal = (obj: UAnimal): string => {
  if ('tigerSpeed' in obj) {
    return 'tiger';
  }

  return 'lion';
};

getAnimal({ tigerSpeed: 20, tigerType: ''  });