// https://www.acmicpc.net/problem/17263

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 정렬
  return list
    .shift()
    .split(" ")
    .sort((a, b) => +a - +b)[pcs - 1];
};

console.log(sol(N, input));
