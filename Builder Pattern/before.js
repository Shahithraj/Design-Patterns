class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

class Address {
    constructor(street,zip) {
        this.street = street;
        this.zip = zip;
    }
}

const user = new User('shahith', undefined, undefined, new Address('gandhi street','600001'));
console.log(user);