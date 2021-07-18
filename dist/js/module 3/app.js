"use strict";
class Hotel {
    constructor(title, guests = 1) {
        this.title = title;
        this.guests = guests;
        this.employees = [];
        this.title = title;
        this.guests = guests;
    }
    static createHotelAdmin(name, age) {
        return {
            name,
            age,
        };
    }
    get getGuests() {
        return this.guests;
    }
    set setGuests(value) {
        if (value < 20) {
            this.guests = value;
            return;
        }
        console.log('so many visitors');
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
    addEmployee(employee) {
        if (this.employees.length > 5) {
            this.employees = [];
        }
        this.employees.push(employee);
    }
}
const admin1 = Hotel.createHotelAdmin('Aurora', 24);
console.log('admin1', admin1);
const hotel = new Hotel('At big daddy', 2);
console.log(hotel);
console.log(hotel.getHotelValue());
console.log(hotel.addEmployee('Ivan'));
console.log(hotel.getGuests);
hotel.setGuests = 5;
const sochiHotel = new SochiHotel('Rose Hutor', 60);
console.log(sochiHotel);
//# sourceMappingURL=app.js.map