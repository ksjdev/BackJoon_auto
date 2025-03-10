// https://www.acmicpc.net/problem/32651

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  return num <= 100000 && num % 2024 === 0 ? "Yes" : "No";
};

console.log(sol(N));
