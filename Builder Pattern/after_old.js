class User {
    constructor(name) {
        this.name = name;
    }
}

class Address {
    constructor(street,zip) {
        this.street = street;
        this.zip = zip;
    }
}

class UserBuilder {
    constructor(name){
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        this.user;
    }
}

const user = new UserBuilder('shahith').setAge(18);
const address = new Address('gandhi street','600001');
user.setAddress(address)
console.log(user.build());