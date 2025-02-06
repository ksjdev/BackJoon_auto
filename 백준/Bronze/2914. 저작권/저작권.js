// https://www.acmicpc.net/problem/2914

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [A, I] = list.split(" ").map(Number);
  return A * I - (A - 1);
};

console.log(sol(input.shift()));
