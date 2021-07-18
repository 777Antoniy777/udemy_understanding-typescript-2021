class Hotel {
  // title: string;
  // guests: number;
  private employees: string[] = [];

  // 1) при указании типа свойства в конструктуре мы исключаем дублиравание типа в начале класса
  constructor(public title: string, guests: number = 0) {
    this.title = title;
    this.guests = guests;
  }

  // 2) при указании setter объявление типа свойства в начале класса не требуется
  set guests(value: number) {
    if (value < 5) {
      console.log('so few visitors');
      return;
    }

    this.guests = value;
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
}

const hotel = new Hotel('At big daddy', 1);
console.log(hotel)
console.log(hotel.getHotelValue())
console.log(hotel.addEmployee('Ivan'))

const sochiHotel = new SochiHotel('Rose Hutor', 60);
console.log(sochiHotel)
