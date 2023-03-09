const obj = {
  name: "Alex",
  age: 30,
};

console.log(obj);
console.log(JSON.stringify(obj));

const str = '["elem1",26,{"name":"Alex"}]';
console.log(str);
const parsedArr = JSON.parse(str);
console.log(parsedArr);
parsedArr[1] = "new value";
console.log(parsedArr);
