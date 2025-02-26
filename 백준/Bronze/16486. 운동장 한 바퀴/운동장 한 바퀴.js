// https://www.acmicpc.net/problem/16486

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [d1, d2] = list.map(Number);
  const pi = 3.141592;
  return d1 * 2 + pi * 2 * d2;
};

console.log(sol(input));
