class User {
    constructor(name, {age, phone = "123456789", address }) {
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

const user = new User('shahith',{ address : new Address('gandhi street','600001')});

console.log(user);