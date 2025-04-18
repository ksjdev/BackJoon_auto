// https://www.acmicpc.net/problem/24751

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (num) => {
  return `${(100 / num).toFixed(10)}\n${(100 / (100 - num)).toFixed(10)}`;
};

console.log(sol(N));
