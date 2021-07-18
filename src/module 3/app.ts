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
  static createHotelAdmin(name: string, age: number) {
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
console.log(hotel)
console.log(hotel.getHotelValue())
console.log(hotel.addEmployee('Ivan'))
console.log(hotel.getGuests);
hotel.setGuests = 5;

const sochiHotel = new SochiHotel('Rose Hutor', 60);
console.log(sochiHotel)
