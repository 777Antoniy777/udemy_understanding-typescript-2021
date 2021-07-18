"use strict";
class Hotel {
    constructor(title, guests = 0) {
        this.title = title;
        this.employees = [];
        this.title = title;
        this.guests = guests;
    }
    set guests(value) {
        if (value < 5) {
            console.log('so few visitors');
            return;
        }
        this.guests = value;
    }
    getHotelValue() {
        console.log(this.title, this.guests);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class SochiHotel extends Hotel {
    constructor(title, rooms) {
        super(title);
        this.rooms = rooms;
        this.rooms = rooms;
    }
}
const hotel = new Hotel('At big daddy', 1);
console.log(hotel);
console.log(hotel.getHotelValue());
console.log(hotel.addEmployee('Ivan'));
const sochiHotel = new SochiHotel('Rose Hutor', 60);
console.log(sochiHotel);
//# sourceMappingURL=app.js.map