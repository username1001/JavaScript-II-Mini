// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class

class Animal {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log(`${this.name} grew larger!`);
  }
}

const dog = new Animal("Luna");
dog.grow();

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class
class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
}
// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: "foofie"
});

foofie.grow();
