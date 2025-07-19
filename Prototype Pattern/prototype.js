class ProfilePrototype {
    clone() {
        throw new Error("This method must be implemented!")
    }

    getInfo() {
        throw new Error("This method must be implemented!")
    }
}

class AdminProfile extends ProfilePrototype {
    constructor(name) {
        super();
        this.name = name;
    }

    clone() {
        return new AdminProfile(this.name);
    }

    getInfo() {
        return `Admin profile : ${this.name}`;
    }
}

class UserProfile extends ProfilePrototype {
    constructor(name) {
        super();
        this.name = name;
    }

    clone() {
        return new UserProfile(this.name);
    }

    getInfo() {
        return `User profile : ${this.name}`;
    }
}

class ProfileRegistry {
    constructor() {
        this.prototypes = {};
    }

    registerProfile(profileType, prototype) {
        this.prototypes[profileType] = prototype; // adminProfile or userProfile object is stored
    }

      cloneProfile(profileType) {
       const prototype = this.prototypes[profileType]; // it will get the adminProfile or userProfile object
       return prototype ? prototype.clone() : null;
    }
}

// create the registry

const registry = new ProfileRegistry();

// admin and user prototype

const adminProfile = new AdminProfile("Admin");
const userProfile = new UserProfile("User");


// register the prototypes
registry.registerProfile("admin",adminProfile);
registry.registerProfile("user",userProfile);

// clone
// it will clone the object in same name, but not same instance

const clonedAdmin = registry.cloneProfile("admin");
const clonedUser =  registry.cloneProfile("user");

console.log(clonedAdmin.getInfo());
console.log(clonedUser.getInfo());



