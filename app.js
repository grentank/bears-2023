// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`My name is ${this.name}, my age is ${this.age}`);
// };

class Being {
  constructor() {
    this.isHuman = null;
  }

  becomeHuman() {
    this.isHuman = true;
  }

  loseHumanity() {
    this.isHuman = false;
  }
}

class Person extends Being {
  constructor(name = 'John Doe', age) {
    super();
    this.name = name;
    this.age = age ?? 30; // age || 30;
    this.isHuman = true;
  }

  greet() {
    console.log(
      `My name is ${this.name}, my age is ${this.age}`,
    );
  }

  static getMyPlanet() {
    return 'The Earth';
  }
}

class President extends Person {
  constructor(name, age, country) {
    super(name, age);
    this.country = country;
  }

  loseHumanity() {
    this.isHuman = true;
    console.log("A president can't lose it's humanity");
  }

  greet() {
    console.log(`I am the president of ${this.country}`);
    super.greet();
  }
}

// class Student extends Person {
//   constructor(options = {}) {
//     super(options.name, options.age);
//     this.phase = options.phase ?? 1;
//     this.bootcamp = "Elbrus";
//   }
// }

const uuid = require('uuid');

class Student extends Person {
  #id;

  constructor({ age, name = 'Ivan', phase = 0 }) {
    super(name, age);
    this.phase = phase;
    this.bootcamp = 'Elbrus';
    this.#id = uuid.v4();
  }

  static language = 'Javascript';

  static getCampusLocation() {
    return 'Москва, пр. Орджоникидзе';
  }

  static getDefaultStudent() {
    return new Student({});
  }

  get studentInfo() {
    return `name: ${this.name}, age: ${this.age}, phase: ${this.phase}`;
  }

  get id() {
    console.log(`Extracting id from ${this.name}...`);
    return this.#id;
  }

  set id(newValue) {
    if (!uuid.validate(newValue))
      console.log('Cannot change id. Invalid ID.');
    else this.#id = newValue;
  }
}

const studentYana = new Student({
  age: 25,
  name: 'Yana',
  phase: 2,
});

// studentYana.#id = '1';
// studentYana.setId('1');
console.log(studentYana.id);
studentYana.id = uuid.v4();
console.log(studentYana.id);
console.log(studentYana.studentInfo);

// console.log(Student.language)

// console.log(Student.getCampusLocation())
// console.log(Person.getMyPlanet());
// console.log(Student.getMyPlanet());

// const defSt = Student.getDefaultStudent();

// const studentGrisha = new Student({
//   name: 'Grisha',
//   age: 32,
//   phase: 3,
// });

// const defaultStudent = new Student({ age: 25 });

// console.log(Object.getPrototypeOf(defaultStudent));

// const a = {};
// const b = [];

// console.log(Array.isArray())

// Деструктуризация объектов, есть ещё деструктуризация массивов
// const { age, phase } = studentYana;
// console.log("YanaAge: ", age, "phase", phase);

// const students = [studentYana, studentGrisha, defaultStudent];
// const [, { name }] = students;
// console.log("Second student`s name: ", name);

// const presidentMacron = new President("Macron", 45, "France");

// const personAlex = new Person("Alex", 30);
// const personBob = new Person("Bob", 42);

// console.log(personAlex);
