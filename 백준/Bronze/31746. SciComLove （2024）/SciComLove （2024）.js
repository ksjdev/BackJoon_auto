// https://www.acmicpc.net/problem/31746

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  const text = "SciComLove";
  return num % 2 === 0 ? text : text.split("").reverse().join("");
};

console.log(sol(N));
