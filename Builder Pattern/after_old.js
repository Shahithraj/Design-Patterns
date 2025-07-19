class User {
    constructor(name) {
        this.name = name;
    }

    getUserName() {
        return this.name;
    }

    getUserAge() {
        return this.age
    }

    getUserAddress() {
        return this.address;
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
        return this.user; // return user instance
    }
}

const address = new Address('gandhi street','600001');

const user = new UserBuilder('shahith').setAge(18).setAddress(address).build(); // this will have user instance not userBuilder
console.log(user.getUserName());