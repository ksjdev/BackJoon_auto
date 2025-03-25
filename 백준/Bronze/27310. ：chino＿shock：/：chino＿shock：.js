// https://www.acmicpc.net/problem/27310

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  return (
    list.length +
    list.reduce((acc, cur) => {
      if (cur === ":") {
        return acc + 1;
      } else if (cur === "_") {
        return acc + 5;
      } else {
        return acc;
      }
    }, 0)
  );
};

console.log(sol(input.shift().split("")));
