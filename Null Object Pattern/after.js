class User {
 constructor(id, name) {
    this.id = id;
    this.name = name;
 }

 hasAccess() {
    return this.id == 1;
 }
}

class NullUser {
    constructor() {
        this.id = -1;
        this.name = 'Guest'
    }
    hasAccess() {
        return false;
    }
}

const users = [
    new User(1,'John'),
    new User(2,'Bob'),
    new User(3,'Doe')
]

function getUserById(id) {
 const user = users.find(user => user.id === id);   
   /*
    We are now checking if the user is null before returning, and instead returning a NullUser object if the user is null. 
    This means that we no longer need to check for null users later in the code and can treat all users that are returned from this function the same whether they exist or not.
  */
 if(user) {
    return user;
 }
 return new NullUser();
}

function printUser(id) {
    const user = getUserById(id);

    console.log(`Hello ${user.name}`);

    if(user.hasAccess()) {
      console.log('You have access')
  } else {
    console.log('You are not allowed here')
  }
}

printUser(2);
