class Singleton {
  constructor() {
    // If an instance already exists, return it
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Otherwise, create a new instance
    this.timestamp = Date.now(); // just an example property
    Singleton.instance = this;
  }
}

// Usage
const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
console.log(a.timestamp, b.timestamp); // same value