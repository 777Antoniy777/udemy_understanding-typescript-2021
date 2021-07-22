class Hotel {
  // title: string;
  // guests: number;
  // 4) Св-во protected позволяет изменять св-во класса в другом классе в отличие от private
  protected employees: string[] = [];

  // 1) при указании типа свойства в конструктуре мы исключаем дублиравание типа в начале класса
  constructor(public title: string, public guests: number = 1) {
    this.title = title;
    this.guests = guests;
  }

  // 5) static методы не привязаны к какому то классу, а привязаны ко всей группе классов
  // их вызывают без оператора new
  static createHotelAdmin(name: string, age: number): { [key: string]: string | number } {
    return {
      name,
      age,
    }
  }

  // 2) при указании getter мы не вызываем метод, а записываем как св-во
  get getGuests() {
    return this.guests;
  }

  // 3) при указании setter мы не вызываем метод, а приравниваем к нему значение
  set setGuests(value: number) {
    if (value < 20) {
      this.guests = value;
      return;
    }

    console.log('so many visitors');
  }

  getHotelValue(): void {
    console.log(this.title, this.guests);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}

class SochiHotel extends Hotel {
  constructor(title: string, public rooms: number) {
    super(title);
    this.rooms = rooms;
  }

  getHotelValue(): void {
    console.log('Values from SochiClass:', this.title, this.guests);
  }

  addEmployee(employee: string): void {
    if (this.employees.length > 5) {
      this.employees = [];
    }

    this.employees.push(employee);
  }
}

const admin1 = Hotel.createHotelAdmin('Aurora', 24);
console.log('admin1', admin1)

const hotel = new Hotel('At big daddy', 2);
console.log(hotel);
hotel.getHotelValue();
console.log(hotel.addEmployee('Ivan'));
console.log(hotel.getGuests);
hotel.setGuests = 5;

const sochiHotel = new SochiHotel('Rose Hutor', 60);
console.log(sochiHotel);
sochiHotel.getHotelValue();


// 1) Абстрактные классы используются как шаблоны, когда не нужно создавать базовый объект
abstract class Figure {
  protected constructor(
    public height: number,
    public width: number,
    public color: string
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // 2) абстр. методы или св-ва обозначаются только типами без значений
  abstract createFigure(): { [key: string]: string | number };

  showProperties(): void {
    console.log(this.createFigure());
  }
}

// 3) Вызвать абстр.метод или св-во нужно в наследуемом классе
// и при этом не забыть его описать согласно типу в абстр.классе
class Triangle extends Figure {
  constructor(public type: string, height: number, width: number, color: string) {
    super(height, width, color);
    this.type = type;
  }

  createFigure() {
    return {
      type: this.type,
      width: this.width,
      height: this.height,
      color: this.color,
    };
  }
}

const triangle = new Triangle('triangle', 30, 15, 'blue');
triangle.showProperties();
