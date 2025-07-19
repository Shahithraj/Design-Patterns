// Example 1

function Car(brand) {
  this.brand = brand;
}

// Define shared behavior on the prototype
Car.prototype.drive = function () {
  console.log(`Driving a ${this.brand} car`);
};

// Create instances normally
const car1 = new Car('Toyota');
const car2 = new Car('BMW');

car1.drive(); // Driving a Toyota car
car2.drive(); // Driving a BMW car

// Example 1 with Object.create

const carPrototype = {
  drive() {
    console.log(`Driving a ${this.brand} car`);
  }
};

const carr1 = Object.create(carPrototype);
carr1.brand = 'Toyota';

const carr2 = Object.create(carPrototype);
carr2.brand = 'BMW';

carr1.drive(); // Driving a Toyota car
carr2.drive(); // Driving a BMW car


// Example 2

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  clone() {
    return new Book(this.title, this.author);
  }
}

const book1 = new Book('1984', 'George Orwell');
const book2 = book1.clone();

console.log(book2.title); // 1984
console.log(book1 === book2); // false (different instances)