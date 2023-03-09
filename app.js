// // const obj1 = {
// //   name: "Alex",
// //   age: 29,
// //   5: "value of the key 5",
// //   name2: 3,
// //   "known-languages": ["russian", "english", "italian", "mandarin"],
// // };
// // const obj2 = {};

// // const key = "name";

// // console.log(obj1[key], obj1["name"], obj1.name);

// // for (const key in obj1) {
// //   const element = obj1[key];
// //   console.log("key: ", key, "\nvalue: ", element);
// // }

// // for (let index = 0; index < Object.keys(obj1).length; index++) {
// //   const key = Object.keys(obj1)[index];
// //   const element = obj1[key];
// //   console.log("key: ", key, "\nvalue: ", element);
// // }

// // const translit = {
// //   b: "б",
// //   B: "Б",
// //   G: "Г",
// // };
// // const char = "b";
// // translit[char];

// // const obj2 = {
// //   name: "Bob",
// //   age: undefined,
// //   occupation: null,
// //   undefined: true,
// // //   null: false,
// // };
// // console.log("null" in obj2);

// const greetMemo = function () {
//   console.log(
//     `Hi everyone! My name is ${this.name}, I am ${this.age} years old. This: `,
//     this
//   );
// };

// const person1 = {
//   name: "Charlie",
//   age: 35,
//   greet: greetMemo,
//   getNameArrow: () => this,
//   getNameFunction() {
//     return this;
//   },
// };

// const person2 = {
//   name: "Egor",
//   age: 32,
//   greet: greetMemo,
//   addNumbers(a, b, c) {
//     console.log("The answer is: ", a + b + c);
//   },
// };

// const person3 = {
//   name: "Fedor",
//   age: 47,
// };

// // person2.addNumbers.call(person3, 5, 6, 8);
// // person2.addNumbers.apply(person3, [5, 6, 8]);
// // const fedorAddsNumbers = person2.addNumbers.bind(person3);

// // fedorAddsNumbers(5, 6, 10);

// // person2.greet.call(person3);
// // person2.greet.apply(person3);
// // person2.greet();

// // person1.greet();
// // person2.greet();
// // greetMemo();
// // console.log(person1.getNameArrow(), person1.getNameFunction());

// // const ar = [3, 5, 7, 8];
// // ar.len = function() {
// //     return this.length;
// // }
// // console.log(ar.len());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.isHuman = true;
//   //   this.greet = function () {
//   //     console.log(`My name is ${this.name}, my age is ${this.age}`);
//   //   };
// }

// Person.prototype.greet = function () {
//   console.log(`My name is ${this.name}, my age is ${this.age}`);
// };

// function President(name, age, country) {
//   Person.call(this, name, age);
//   this.country = country;
// }

// Object.setPrototypeOf(President.prototype, Person.prototype);

// function Student({ name, age, bootcamp }) {
//   Person.call(this, name, age);
//   this.bootcamp = bootcamp;
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype);

// const prez1 = new President("Obama", 56, "USA");
// const student1 = new Student({ name: "Alex", age: 29, bootcamp: "Elbrus" });
// // const pers2 = new Person("Biden", 72);
// // const pers3 = new Person("Trump", 68);

// // pers1.greet();
// // pers2.greet();
// // console.log(pers1.greet === pers2.greet);

(function () {
console.log(this);
}())
