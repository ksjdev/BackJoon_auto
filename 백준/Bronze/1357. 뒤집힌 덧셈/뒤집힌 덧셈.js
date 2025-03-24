// https://www.acmicpc.net/problem/1357

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  return list.reduce((acc, cur) => {
    return +String(+acc.split("").reverse().join("") + +cur.split("").reverse().join(""))
      .split("")
      .reverse()
      .join("");
  });
};

console.log(sol(input.shift().split(" ")));
