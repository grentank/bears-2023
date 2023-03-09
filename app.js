// const fs = require("fs");

// const myPromise = new Promise((resolve, reject) => {
//   fs.readFile("./package.jso", "utf8", (err, data) => {
//     if (err) reject(new Error("Error reading file"));

//     setTimeout(() => {
//       resolve(data);
//     }, 1000);
//   });
// });

// myPromise
//   .catch((err) => {
//     console.log(err);
//     return '{"scripts":{"start":"BE AWAKE!"}}';
//   })
//   .then((value) => {
//     const jsonData = JSON.parse(value);
//     const startScript = jsonData.scripts.start;
//     return new Promise((res, rej) => {
//       fs.writeFile("./test.txt", startScript, "utf8", (err) => {
//         if (err) rej(err);

//         res("Success!");
//       });
//     });
//   })
//   .catch((err) => {
//     console.log("Err2: ", err);
//     // сделай новый запрос
//     return "there was an error";
//   })
//   .then((data) => {
//     console.log("Data: ", data);
//   });

const fs = require("fs/promises");
// const fs = require("fs");

// Задание: используя метод fs.stat, работающий на коллбеках
// написать его на промисах (промисифицировать)

// function myStat(path) {
//   return new Promise((res, rej) => {
//     fs.stat(path, (err, stats) => {
//       if (err) rej(err);

//       res(stats);
//     });
//   });
// }

// fs.stat("./app.js", (err, data) => {
//   console.log(`${data.size}cb`);
// });

// myStat("./app.js").then((data) => {
//   console.log(`${data.size}pr`);
// });

// console.log(1);

// fs.readFile("./package.json", "utf8")
//   .then((data) => JSON.parse(`${data}`))
//   .then((obj) => fs.writeFile("./test.txt", obj.main, "utf8"))
//   .then(() => console.log("Success"))
//   .catch(console.log); // .catch((err) => console.log(err))

// console.log(2);

// Задача: получить 3 todo сетевыми запросами и вывести на консоль

// console.time();
// const allTodos = [];
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((todo1) => {
//     allTodos.push(todo1);
//   })
//   .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
//   .then((res) => res.json())
//   .then((todo2) => {
//     allTodos.push(todo2);
//   })
//   .then(() =>
//     fetch("https://jsonplaceholder.typicode.com/todos/3")
//       .then((res) => res.json())
//       .then((todo3) => {
//         allTodos.push(todo3);
//         console.log(allTodos);
//         console.timeEnd();
//       })
//   );

// Promise.all(
//   ["1", "2", "3"].map((id) =>
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
//       res.json()
//     )
//   )
// ).then((arr) => {
//   console.log(arr);
//   console.timeEnd();
// });

async function run() {
  try {
    const data = await fs.readFile("./package.json", "utf8");
    const json = JSON.parse(data);
    await fs.writeFile("./test.txt", json.name, "utf8");
    console.log("Success!");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user1 = await response.json();
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const user2 = await response2.json();
    console.log(user1, user2);
  } catch (err) {
    console.log(err);
  }
}

// console.log(1);

// run();

// console.log(2);

async function getUsernames() {
  const ids = ["1", "2", "3"];
  return (
    await Promise.all(
      ids.map((id) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
          res.json()
        )
      )
    )
  ).map((user) => user.username);
  //   console.log(userNames);
  //   return 5;
}

// const a = await fetch('');
getUsernames().then((data) => console.log(data));

// https://www.npmjs.com/package/enquirer
// https://www.npmjs.com/package/inquirer
