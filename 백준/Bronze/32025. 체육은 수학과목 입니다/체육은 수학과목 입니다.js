// https://www.acmicpc.net/problem/32025

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [A, B] = list.map(Number);
  return (Math.min(A, B) / 2) * 100;
};

console.log(sol(input));
