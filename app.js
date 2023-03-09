// console.log(1);

// setInterval(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// (function run() {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log(++counter);

//     if (counter === 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// })();

const fs = require("fs");
// const bcrypt = require("bcrypt");

// fs.writeFileSync(
//   "./bigdata2.txt",
//   new Array(1e7)
//     .fill(1)
//     .map(() => Math.random())
//     .join("\n"),
//   "utf8"
// );
// const res = fs.readFileSync("./bigdata2.txt", "utf8");
// console.log(res.at(-1));

// console.time();
// let counter = 0;

// bcrypt.hash("123", 15, (err, data) => {
//   console.log("Hashed 123");
//   counter++;
//   if (counter === 2) console.timeEnd();
// });

// bcrypt.hash("b", 15, (err, data) => {
//   console.log("Hashed b");
//   counter++;
//   if (counter === 2) console.timeEnd();
// });

// console.time();

// function accumulateStudents() {
//   try {
//     fs.readdir("./files", "utf8", (errDir, filenames) => {
//       if (errDir) throw new Error(`Error reading dir\n${errDir}`);

//       let totalSize = 0;

//       filenames.forEach((filename) => {
//         fs.stat(`./files/${filename}`, (errStat, dataStat) => {
//           totalSize += dataStat.size;

//           if (/* получены размеры всех файлов в папке */ 0) {
//             /* начать читать все файлы */
//           }
//         });
//       });

//       const studentsArray = [];

//       filenames.forEach((filename) => {
//         fs.readFile(`./files/${filename}`, "utf8", (errFile, fileData) => {
//           if (errFile)
//             throw new Error(`Error reading file ${filename}\n${errFile}`);

//           studentsArray.push(fileData);

//           if (studentsArray.length === filenames.length) {
//             console.timeEnd();
//             console.log("All students:\n", studentsArray.join("\n"));
//             fs.writeFile(
//               "./allstudents.txt",
//               studentsArray.join("\n"),
//               "utf8",
//               (errWrite) => {
//                 if (errWrite) throw new Error("Error writing to file");

//                 console.log("Finished writing to file");
//               }
//             );
//           }
//         });
//       });
//     });
//   } catch (err) {
//     console.log("Что-то пошло не так");
//   }
// }

fs.writeFile(`file.txt`, `1111111 111111111111111111111\n`, () => {});
fs.writeFile(`file.txt`, `22222222222222 222\n`, () => {});
fs.writeFile(`file.txt`, `333\n`, () => {});
fs.writeFile(`file.txt`, `44\n`, () => {});
fs.writeFile(`file.txt`, `5555555 55555555555555555\n`, () => {});

// fs.readFile("./files/st1.txt", "utf8", (err1, data1) => {
//   if (err1) throw new Error("err 1");
//   fs.readFile("./files/st2.txt", "utf8", (err2, data2) => {
//     if (err2) throw new Error("err 2");
//     fs.readFile("./files/st3.txt", "utf8", (err3, data3) => {
//       if (err3) throw new Error("err 3");
//       fs.readFile("./files/st4.txt", "utf8", (err4, data4) => {
//         if (err4) throw new Error("err 4");

//         console.timeEnd();
//         console.log([data1, data2, data3, data4]);
//       });
//     });
//   });
// });
